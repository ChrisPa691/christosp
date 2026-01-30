import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /.+@.+\..+/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // requests per window per IP
const rateLimitStore = new Map<string, number[]>();

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const contactTo = process.env.CONTACT_TO;
const contactFrom = process.env.CONTACT_FROM;

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "anon";
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "anon";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const entries = rateLimitStore.get(key)?.filter((ts) => ts > windowStart) ?? [];
  entries.push(now);
  rateLimitStore.set(key, entries);
  return entries.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!emailPattern.test(String(email))) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    if (String(message).trim().length < 10) {
      return NextResponse.json({ error: "Message is too short." }, { status: 400 });
    }

    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return NextResponse.json({ error: "Too many requests. Please wait a bit and try again." }, { status: 429 });
    }

    if (!resend || !contactTo || !contactFrom) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const subject = `Portfolio contact from ${name}`;
    const content = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      subject,
      text: content,
      reply_to: email,
    });

    if (error) {
      console.error("/api/contact send error", error);
      return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json({ error: "Unexpected error. Please try again." }, { status: 500 });
  }
}
