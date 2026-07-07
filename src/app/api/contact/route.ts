import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Fallback: Log locally if API key is not configured yet
      console.log("RESEND_API_KEY is missing. Local log of lead:", { name, email, projectType, message });
      return NextResponse.json(
        { success: true, message: "Lead captured locally (SMTP/API key pending)." }
      );
    }

    // Call Resend API via native fetch (zero-dependency)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "hello@kalpanaaa.com",
        subject: `New Corporate Lead: ${name} [${projectType.toUpperCase()}]`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
            <h2 style="color: #0066cc; margin-bottom: 20px;">New Proposal Request Captured</h2>
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Domain of Interest:</strong> ${projectType.toUpperCase()}</p>
            <hr style="border: 0; border-t: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message / Project Scope:</strong></p>
            <p style="background-color: #f8fafc; padding: 15px; border-radius: 6px; font-style: italic; white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to send email via provider." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
