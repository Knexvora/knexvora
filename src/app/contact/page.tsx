import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OtherWaysSection from "@/components/contact/OtherWaysSection";

import JsonLd from "@/components/seo/JsonLd";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KNEXVORA",
    url: "https://www.knexvora.com",
    logo: "https://www.knexvora.com/images/logo.webp",
    description:
        "KNEXVORA unifies every dimension of your institution — admissions, academics, finance, HR, and compliance — into one platform built exclusively for higher education.",
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://www.knexvora.com/contact",
    },
};

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Talk to the KNEXVORA team about your institution's needs. We respond within one business day.",
    keywords: [
        "contact KNEXVORA",
        "university ERP support",
        "higher education software demo",
        "KNEXVORA contact",
    ],
    alternates: {
        canonical: "https://www.knexvora.com/contact",
    },
    openGraph: {
        title: "Contact Us | KNEXVORA",
        description:
            "Talk to the KNEXVORA team about your institution's needs. We respond within one business day.",
        url: "https://www.knexvora.com/contact",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact KNEXVORA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | KNEXVORA",
        description:
            "Talk to the KNEXVORA team about your institution's needs. We respond within one business day.",
        images: ["/images/og-image.png"],
    },
};

export default function ContactPage() {
    return (
        <>
            <JsonLd data={localBusinessSchema} />
            <ContactHero />
            <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>
            <OtherWaysSection />
        </>
    );
}