"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { WhatsAppIconColored } from "../icons";

export default function WhatsappChatSection() {
  const [loading, setLoading] = useState(false);

  const handleWhatsAppClick = () => {
    setLoading(true);

    const phone = "2349033209215";
    const message =
      "Hello, I would like to know more about your skincare products!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 500);
  };

  return (
    <section className="bg-white flex justify-center items-center flex-col px-4 py-15 space-y-6">
      <WhatsAppIconColored className="size-13.5" />

      <h2 className=" font-bold font-inter text-2xl text-center">
        Chat with Us on WhatsApp
      </h2>

      <p className="font-inter font-medium text-lg leading-6 text-center">
        Get instant support and personalized skincare advice directly through
        whatsapp. Our team is ready to help you.
      </p>

      <Button
        onClick={handleWhatsAppClick}
        disabled={loading}
        className=" bg-[#60D669] rounded-lg text-xl text-white font-bold py-6.5 px-6"
      >
        <WhatsAppIconColored className="size-6" />
        <span>{loading ? "Loading..." : "Start Whatsapp Chat"}</span>
      </Button>

      <p className="text-center text-base font-medium font-inter">
        Click the button above to open whatsapp pre-filled message
      </p>
    </section>
  );
}
