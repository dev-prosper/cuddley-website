// src/app/api/paystack/initialize/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.CONTACT_TO!;

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface ShippingInfo {
  fullName: string;
  email: string;
  address: string;
  country: string;
  state: string;
  zipCode?: string;
}

function escapeHtml(input = "") {
  return input.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return ch;
    }
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, amount, metadata } = body as {
      email: string;
      amount: number;
      metadata: {
        cart: CartItem[];
        shipping: ShippingInfo;
      };
    };

    const { cart, shipping } = metadata;

    const {
      fullName,
      email: customerEmail,
      address,
      country,
      state,
      zipCode,
    } = shipping;

    if (
      !email ||
      !amount ||
      !cart?.length ||
      !fullName ||
      !address ||
      !country ||
      !state
    ) {
      return NextResponse.json(
        { error: "Missing checkout data" },
        { status: 400 },
      );
    }

    // Send email immediately
    await resend.emails.send({
      from: "Checkout <onboarding@resend.dev>",
      to: [ADMIN_EMAIL],
      replyTo: customerEmail,
      subject: "🛒 New Checkout Started",
      html: `
        <h2>New Checkout</h2>

        <h3>Customer Info</h3>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(customerEmail)}</p>

        <h3>Shipping Address</h3>
        <p>
          ${escapeHtml(address)}<br/>
          ${escapeHtml(state)}, ${escapeHtml(country)}<br/>
          ${zipCode ? escapeHtml(zipCode) : ""}
        </p>

        <h3>Items</h3>
        <ul>
          ${cart
            .map(
              (item: CartItem) => `
                <li>
                  ${escapeHtml(item.name)} × ${item.quantity}
                  — ₦${item.price.toLocaleString("en-NG")}
                </li>
              `,
            )
            .join("")}
        </ul>

        <p><strong>Total:</strong> ₦${amount.toLocaleString("en-NG")}</p>
      `,
    });

    // Initialize Paystack
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/paystack/verify`,
        metadata,
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
