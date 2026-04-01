import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, organization, subject, message } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "AGRITEMIS Contact <onboarding@resend.dev>",
      to: "contact@agritemis.com",
      replyTo: email,
      subject: `[Contact] ${subject || "Nouveau message"} — ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        organization ? `Organisation : ${organization}` : null,
        `Sujet : ${subject || "Non précisé"}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
