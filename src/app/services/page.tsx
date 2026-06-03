import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import DeploymentSection from "@/components/services/DeploymentSection";
import IntegrationsSection from "@/components/services/IntegrationsSection";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Each module is purpose-built for higher education — designed to work independently or as part of a fully unified platform.",
    keywords: [
        "university ERP modules",
        "higher education software modules",
        "admissions management software",
        "academic management system",
        "finance management for universities",
        "HR management higher education",
    ],
    alternates: {
        canonical: "https://www.knexvora.com/services",
    },
    openGraph: {
        title: "Services | KNEXVORA",
        description:
            "Each module is purpose-built for higher education — designed to work independently or as part of a fully unified platform.",
        url: "https://www.knexvora.com/services",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "KNEXVORA Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | KNEXVORA",
        description:
            "Each module is purpose-built for higher education — designed to work independently or as part of a fully unified platform.",
        images: ["/images/og-image.png"],
    },
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <DeploymentSection />
            <IntegrationsSection />
        </>
    );
}