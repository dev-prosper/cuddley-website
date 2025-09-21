import PageHeader from "@/components/shared/page-header";
import ContactDetailsSection from "@/components/contact-us-page/contact-details-section";
import CustomerSupportSection from "@/components/contact-us-page/customer-support-section";
import WhatsappChatSection from "@/components/contact-us-page/whatsapp-chat-section";

export default function Page() {
  return (
    <div>
      <PageHeader pageName="Contact Us" />
      <ContactDetailsSection />
      <CustomerSupportSection />
      <WhatsappChatSection />
    </div>
  );
}
