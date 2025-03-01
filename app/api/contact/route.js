import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "hello@yourdomain.com",
      to: "your-email@gmail.com",
      subject: `New Message from ${name}: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}