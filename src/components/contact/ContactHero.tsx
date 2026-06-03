import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactHero() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg mt-12">
            <AnimatedSection className="max-w-3xl">
                <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase block mb-stack-sm">
                    Get in touch
                </span>
                <h1 className="font-display-lg text-display-lg text-primary mb-stack-md">
                    Let&apos;s talk about your institution
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
                    Whether you&apos;re evaluating platforms, planning a migration, or
                    just want to understand how KNEXVORA works — our team is happy to
                    have a straightforward conversation.
                </p>
            </AnimatedSection>
        </section>
    );
}