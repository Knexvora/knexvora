import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import DeploymentSection from "@/components/services/DeploymentSection";
import IntegrationsSection from "@/components/services/IntegrationsSection";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Each module is purpose-built for higher education — designed to work independently or as part of a fully unified platform.",
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