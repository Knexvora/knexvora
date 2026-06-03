import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OtherWaysSection from "@/components/contact/OtherWaysSection";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Talk to the KNEXVORA team about your institution's needs. We respond within one business day.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>
            <OtherWaysSection />
        </>
    );
}