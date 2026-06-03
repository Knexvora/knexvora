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