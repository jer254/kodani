"use server";

import { NextResponse } from "next/server";

const CONTACT_RECIPIENT = "ndegwajeremiah8842@gmail.com";
const CONTACT_SENDER = "Kodani Contact <onboarding@resend.dev>";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RETRYABLE_ERROR_CODES = new Set(["ENOTFOUND", "ECONNRESET", "ETIMEDOUT"]);
const MAX_RETRIES = 3;

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /\S+@\S+\.\S+/.test(email);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function buildEmailHtml({
  name,
  email,
  company,
  budget,
  message,
}: Record<string, string>) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function getErrorCode(error: unknown): string | null {
  if (error && typeof error === "object") {
    const withCode = error as { code?: unknown; cause?: unknown };
    if (typeof withCode.code === "string") {
      return withCode.code;
    }
    if (withCode.cause && typeof withCode.cause === "object") {
      const causeWithCode = withCode.cause as { code?: unknown };
      if (typeof causeWithCode.code === "string") {
        return causeWithCode.code;
      }
    }
  }
  return null;
}

async function sendEmailRequest(
  body: Record<string, string>,
  apiKey: string
) {
  const payload = {
    from: CONTACT_SENDER,
    to: CONTACT_RECIPIENT,
    reply_to: body.email,
    subject: `New contact from ${body.name}`,
    html: buildEmailHtml(body),
    text: `Name: ${body.name}
Email: ${body.email}
Company: ${body.company || "N/A"}
Budget: ${body.budget || "N/A"}

Message:
${body.message}`,
  };

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const resendResponse = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!resendResponse.ok) {
        const errorBody = await resendResponse.json().catch(() => null);
        console.error("Resend API error:", errorBody || resendResponse.statusText);
        return NextResponse.json(
          { error: "Failed to send message. Please try again later." },
          { status: 502 }
        );
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      const code = getErrorCode(error);
      const canRetry =
        code !== null && RETRYABLE_ERROR_CODES.has(code) && attempt < MAX_RETRIES;

      console.error(
        `Contact form submission attempt ${attempt} failed${
          code ? ` (code: ${code})` : ""
        }:`,
        error
      );

      if (!canRetry) {
        throw error;
      }

      await sleep(500 * attempt);
    }
  }

  return NextResponse.json(
    { error: "Failed to send message. Please try again later." },
    { status: 502 }
  );
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, company = "", budget = "", message } = payload ?? {};

    if (
      typeof name !== "string" ||
      !isValidEmail(email) ||
      typeof message !== "string" ||
      !name.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    return await sendEmailRequest(
      { name, email, company, budget, message },
      apiKey
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
