import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionValues from "@/components/about/MissionValues";
import WhyWeBuiltThis from "@/components/about/WhyWeBuiltThis";
import ProblemStatement from "@/components/about/ProblemStatement";
import ValuesDeep from "@/components/about/ValuesDeep";
import TrustImageSection from "@/components/about/TrustImageSection";
import PromiseSection from "@/components/about/PromiseSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "KNEXVORA was founded on a single conviction — universities deserve technology as rigorous as the education they provide.",
    keywords: [
        "about KNEXVORA",
        "university ERP company",
        "higher education technology company",
        "institutional software team",
    ],
    alternates: {
        canonical: "https://www.knexvora.com/about",
    },
    openGraph: {
        title: "About Us | KNEXVORA",
        description:
            "KNEXVORA was founded on a single conviction — universities deserve technology as rigorous as the education they provide.",
        url: "https://www.knexvora.com/about",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "About KNEXVORA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | KNEXVORA",
        description:
            "KNEXVORA was founded on a single conviction — universities deserve technology as rigorous as the education they provide.",
        images: ["/images/og-image.png"],
    },
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <MissionValues />
            <WhyWeBuiltThis />
            <ProblemStatement />
            <ValuesDeep />
            <TrustImageSection />
            <PromiseSection />
            <AboutCTA />
        </>
    );
}