import AnimatedSection from "@/components/ui/AnimatedSection";
import { PRINCIPLES } from "@/lib/constants";

export default function PrinciplesGrid() {
    return (
        <section className="max-w-container-max mx-auto px-margin-desktop pb-section-gap">
            <AnimatedSection className="mb-12">
                <h2 className="font-headline-md text-headline-md text-primary mb-2">
                    What makes us different
                </h2>
                <p className="text-secondary font-body-md">
                    Six principles that guide every decision we make — from product
                    design to how we deploy.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-outline-variant/30 border border-outline-variant/30">
                {PRINCIPLES.map((p, i) => (
                    <AnimatedSection
                        key={p.title}
                        delay={i * 0.08}
                        className="bg-primary p-stack-lg flex flex-col gap-4 hover:bg-primary-container transition-colors duration-300 group cursor-default"
                    >
                        <span className="material-symbols-outlined text-primary-fixed text-3xl">
                            {p.icon}
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-primary">
                            {p.title}
                        </h3>
                        <p className="text-on-primary/70 font-body-md">{p.description}</p>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}