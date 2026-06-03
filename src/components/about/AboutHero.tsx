import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutHero() {
    return (
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
            <AnimatedSection className="max-w-3xl">
                <span className="font-label-caps text-label-caps text-utility-gray uppercase tracking-widest mb-stack-sm block">
                    — About Us
                </span>
                <h1 className="font-display-lg text-display-lg text-primary mt-4 mb-stack-lg italic">
                    We exist to simplify institutional complexity
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    KNEXVORA was founded on a single conviction — that universities deserve
                    technology as rigorous and purposeful as the education they provide. We
                    build exclusively for higher education, with no compromises.
                </p>
            </AnimatedSection>
        </section>
    );
}