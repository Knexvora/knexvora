import AnimatedSection from "@/components/ui/AnimatedSection";
import { TRUST_FEATURES } from "@/lib/constants";

export default function TrustFeatures() {
    return (
        <section className="bg-surface py-section-gap">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="font-headline-md text-headline-md text-primary mb-2">
                        Built for institutional trust
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                    {TRUST_FEATURES.map((feature, i) => (
                        <AnimatedSection
                            key={feature.title}
                            delay={i * 0.1}
                            className="bg-white p-12 border border-outline-variant/30 flex items-start gap-8 group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="p-4 bg-primary/5 group-hover:bg-primary transition-colors duration-300 shrink-0">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                                    {feature.icon}
                                </span>
                            </div>
                            <div>
                                <h4 className="font-headline-sm text-headline-sm text-primary mb-4">
                                    {feature.title}
                                </h4>
                                <p className="text-secondary font-body-md">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}