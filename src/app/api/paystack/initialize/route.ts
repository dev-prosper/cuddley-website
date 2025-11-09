// src/app/api/paystack/initialize/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, amount, metadata } = body;

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects kobo (NGN * 100)
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/paystack/verify`,
        metadata, // includes cart, address, etc.
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Paystack init error:", error);
    return NextResponse.json(
      { error: "Payment initialization failed" },
      { status: 500 },
    );
  }
}
