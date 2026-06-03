import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhyUsHero() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-section-gap pb-24">
            <AnimatedSection className="max-w-3xl">
                <span className="font-label-caps text-label-caps text-primary/60 uppercase block mb-stack-sm">
                    Why KNEXVORA
                </span>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                    Built for higher education.
                    <br />
                    <span className="opacity-40 italic">Not adapted for it.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Most university platforms are horizontal ERPs stretched to fit
                    academia. KNEXVORA was built from the ground up — every workflow,
                    every report, every module — exclusively for how universities operate.
                </p>
            </AnimatedSection>
        </section>
    );
}