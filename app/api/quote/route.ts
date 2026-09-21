import { NextResponse } from "next/server";

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || "[EMAIL]";

const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

export async function POST(request: Request) {
  let body: Record<string, string> = {};
  const attachments: { filename: string; content: string }[] = [];

  if (request.headers.get("content-type")?.includes("multipart/form-data")) {
    const formData = await request.formData();
    let totalBytes = 0;
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (value.size === 0) continue;
        totalBytes += value.size;
        if (totalBytes > MAX_ATTACHMENT_BYTES) {
          return NextResponse.json(
            { error: "Photos are too large — please keep them under 15MB total" },
            { status: 413 }
          );
        }
        attachments.push({
          filename: value.name,
          content: Buffer.from(await value.arrayBuffer()).toString("base64"),
        });
      } else {
        body[key] = String(value);
      }
    }
  } else {
    body = (await request.json()) as Record<string, string>;
  }

  const { name, phone, suburb, service, email, propertyType, frequency, preferredDate, details } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email && `Email: ${email}`,
    `Suburb: ${suburb || "-"}`,
    `Service: ${service || "-"}`,
    propertyType && `Property type: ${propertyType}`,
    frequency && `Frequency: ${frequency}`,
    preferredDate && `Preferred date: ${preferredDate}`,
    details && `Details: ${details}`,
    attachments.length > 0 && `Photos attached: ${attachments.length}`,
  ].filter(Boolean);

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("Quote request (RESEND_API_KEY not set):", lines.join(" | "));
    return NextResponse.json({ ok: true, mocked: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Eli's Cleaning and Lawn Services <quotes@eliscleaning.com.au>",
      to: [TO_EMAIL],
      subject: `New quote request from ${name}`,
      text: lines.join("\n"),
      ...(attachments.length > 0 && { attachments }),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Resend error:", text);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
