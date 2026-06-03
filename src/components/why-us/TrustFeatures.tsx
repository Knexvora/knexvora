import AnimatedSection from "@/components/ui/AnimatedSection";
import { TRUST_FEATURES } from "@/lib/constants";

export default function TrustFeatures() {
    return (
        <section className="bg-surface py-section-gap">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <AnimatedSection className="text-center mb-12 md:mb-16">
                    <h2 className="font-headline-md text-headline-md text-primary mb-2">
                        Built for institutional trust
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-stack-lg">
                    {TRUST_FEATURES.map((feature, i) => (
                        <AnimatedSection
                            key={feature.title}
                            delay={i * 0.1}
                            className="bg-white p-6 md:p-12 border border-outline-variant/30 flex flex-row items-start gap-4 md:gap-8 group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="p-3 md:p-4 bg-primary/5 group-hover:bg-primary transition-colors duration-300 shrink-0">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors" style={{ fontSize: "22px" }}>
                                    {feature.icon}
                                </span>
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-headline-sm text-headline-sm text-primary mb-2 md:mb-4 leading-snug">
                                    {feature.title}
                                </h4>
                                <p className="text-secondary font-body-md text-[14px] md:text-[16px] leading-relaxed">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}