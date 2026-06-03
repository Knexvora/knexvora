import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicesHero() {
    return (
        <section className="relative pt-24 pb-stack-lg px-margin-desktop max-w-container-max mx-auto">
            <AnimatedSection className="max-w-4xl">
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                    Platform Services
                </span>
                <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                    Everything your institution <br />
                    <span className="italic font-light opacity-90 text-primary-container">
                        needs, in one place
                    </span>
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
                    Each module is purpose-built for higher education — designed to work
                    independently or as part of a fully unified platform. Implementation
                    in 90 days, no disruption.
                </p>
            </AnimatedSection>
        </section>
    );
}