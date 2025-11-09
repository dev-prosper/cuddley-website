// src/app/api/paystack/verify/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const reference = req.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/failed`);
  }

  const verifyRes = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    },
  );

  const verifyData = await verifyRes.json();
  const success = verifyData.data?.status === "success";

  if (success) {
    // You can save order info here, send an email, etc.
    console.log("✅ Payment verified:", verifyData.data);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/success`);
  } else {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/failed`);
  }
}
