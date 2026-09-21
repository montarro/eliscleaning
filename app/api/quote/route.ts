import { NextResponse } from "next/server";

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || "[EMAIL]";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, suburb, service } = body as Record<string, string>;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("Quote request (RESEND_API_KEY not set):", { name, phone, suburb, service });
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
      text: `Name: ${name}\nPhone: ${phone}\nSuburb: ${suburb || "-"}\nService: ${service || "-"}`,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Resend error:", text);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
