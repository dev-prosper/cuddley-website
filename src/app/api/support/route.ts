// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 },
//       );
//     }

//     // 1️⃣ Send message to your support inbox
//     await resend.emails.send({
//       from: "Support <onboarding@resend.dev>", // replace with verified sender later
//       to: process.env.SUPPORT_EMAIL!, // your inbox (e.g. Gmail, Outlook, or domain email)
//       subject: `New support request from ${name}`,
//       replyTo: email,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     });

//     // 2️⃣ Auto-reply to the user
//     await resend.emails.send({
//       from: "Support <onboarding@resend.dev>", // must be verified in Resend
//       to: email, // the user’s email
//       subject: "We received your support request",
//       text: `Hi ${name},\n\nThanks for reaching out! We’ve received your message and will get back to you shortly.\n\nYour message:\n"${message}"\n\n— Support Team`,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Failed to send message" },
//       { status: 500 },
//     );
//   }
// }
