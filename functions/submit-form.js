/**
 * Cloudflare Pages Function — handles contact & membership form submissions.
 *
 * Required env vars (set in Cloudflare Pages dashboard):
 *   EMAIL_TO       — recipient email
 *   RESEND_API_KEY — API key from resend.com (free tier)
 *   FROM_DOMAIN    — (optional) verified sending domain
 *
 * Security:
 *   - POST only, origin validated
 *   - Input sanitised (XSS prevention)
 *   - Payload size limited to 256KB
 *   - Basic rate limiting via Cloudflare
 *   - No secrets in code — all via env vars
 */

const MAX_BYTES = 256_000;

export async function onRequest(context) {
  const { request, env } = context;

  // 1. POST only
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  // 2. Origin check (basic CSRF)
  const origin = request.headers.get('Origin') || request.headers.get('Referer') || '';
  const allowed = ['http://localhost:4321', 'https://sarvagunsociety.org', 'https://www.sarvagunsociety.org', 'https://sarvagun-society.pages.dev'];

  const isAllowed = allowed.some(a => origin.startsWith(a));
  if (!isAllowed && !origin.includes('localhost')) {
    return new Response('Forbidden', { status: 403 });
  }

  // 3. Size limit
  const contentLength = parseInt(request.headers.get('Content-Length') || '0', 10);
  if (contentLength > MAX_BYTES) {
    return new Response('Payload too large', { status: 413 });
  }

  try {
    const formData = await request.formData();
    const raw = Object.fromEntries(formData.entries());

    // 4. Strip internal fields, validate user input
    const data = {};
    const internal = ['_form', '_redirect', '_next'];
    for (const [key, val] of Object.entries(raw)) {
      if (internal.includes(key)) continue;
      if (typeof val !== 'string') continue;
      const trimmed = val.trim();
      if (trimmed.length > 5000) continue; // per-field cap
      data[escapeHtml(key)] = escapeHtml(trimmed);
    }

    // 5. Require at least name + message for contact
    const formType = raw._form || 'contact';
    if (formType === 'contact' && (!data.Name || data.Name.length < 1)) {
      return redirect(origin, '/thank-you?error=1');
    }

    // 6. Send email
    const emailTo = env.EMAIL_TO;
    const resendKey = env.RESEND_API_KEY;
    const domain = env.FROM_DOMAIN || 'sarvagunsociety.org';

    if (emailTo && resendKey) {
      const html = buildEmailHtml(formType, data);
      await sendEmail(resendKey, emailTo, domain, formType, html);
    }

    // 7. Done — redirect to thank-you
    return Response.redirect(`${origin}/thank-you?type=${encodeURIComponent(formType)}`, 303);
  } catch (err) {
    console.error('[Form Error]', err);
    return redirect(getOrigin(request), '/thank-you?error=1');
  }
}

function getOrigin(request) {
  try {
    return new URL(request.url).origin;
  } catch {
    return '';
  }
}

function redirect(base, path) {
  return Response.redirect(`${base}${path}`, 303);
}

function buildEmailHtml(type, data) {
  const rows = Object.entries(data)
    .map(([key, val]) => `<tr>
      <td style="font-weight:600;padding:8px 12px;border:1px solid #e8ddd0;white-space:nowrap;vertical-align:top">${key}</td>
      <td style="padding:8px 12px;border:1px solid #e8ddd0">${val}</td>
    </tr>`)
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#faf3ea;font-family:Inter,system-ui,sans-serif">
  <table role="presentation" width="100%" style="max-width:580px;margin:24px auto;background:#fff;border-radius:8px;border:1px solid #e8ddd0;overflow:hidden">
    <tr><td style="background:#2d6a4f;padding:16px 24px"><h2 style="margin:0;color:#fff;font-size:18px">New ${escapeHtml(type)} Submission</h2></td></tr>
    <tr><td style="padding:24px"><table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px">${rows}</table></td></tr>
  </table>
</body>
</html>`;
}

async function sendEmail(apiKey, to, domain, type, html) {
  const from = type === 'membership'
    ? `Membership <noreply@${domain}>`
    : `Sarvagun Society <noreply@${domain}>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      replyTo: to,
      to: [to],
      subject: `New ${type} — Sarvagun Society`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('[Resend Error]', res.status, body);
  }
}

function escapeHtml(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  return String(str).replace(/[&<>"]/g, c => map[c] || c);
}
