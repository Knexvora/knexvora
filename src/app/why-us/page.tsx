import type { Metadata } from "next";
import WhyUsHero from "@/components/why-us/WhyUsHero";
import PrinciplesGrid from "@/components/why-us/PrinciplesGrid";
import ComparisonTable from "@/components/why-us/ComparisonTable";
import DeploymentProcess from "@/components/why-us/DeploymentProcess";
import TrustFeatures from "@/components/why-us/TrustFeatures";
import WhyUsCTA from "@/components/why-us/WhyUsCTA";

export const metadata: Metadata = {
    title: "Why Us",
    description:
        "KNEXVORA was built from the ground up exclusively for higher education — not adapted from a generic ERP.",
    keywords: [
        "why choose KNEXVORA",
        "best university ERP",
        "higher education ERP comparison",
        "university software advantages",
        "KNEXVORA vs generic ERP",
    ],
    alternates: {
        canonical: "https://www.knexvora.com/why-us",
    },
    openGraph: {
        title: "Why Us | KNEXVORA",
        description:
            "KNEXVORA was built from the ground up exclusively for higher education — not adapted from a generic ERP.",
        url: "https://www.knexvora.com/why-us",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Why Choose KNEXVORA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Why Us | KNEXVORA",
        description:
            "KNEXVORA was built from the ground up exclusively for higher education — not adapted from a generic ERP.",
        images: ["/images/og-image.png"],
    },
};

export default function WhyUsPage() {
    return (
        <>
            <WhyUsHero />
            <PrinciplesGrid />
            <ComparisonTable />
            <DeploymentProcess />
            <TrustFeatures />
            <WhyUsCTA />
        </>
    );
}