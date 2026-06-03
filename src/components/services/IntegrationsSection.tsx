import AnimatedSection from "@/components/ui/AnimatedSection";
import { INTEGRATIONS } from "@/lib/constants";

export default function IntegrationsSection() {
    return (
        <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
            <AnimatedSection className="text-center mb-16">
                <span className="font-label-caps text-label-caps text-utility-gray uppercase tracking-widest mb-2 block">
                    Platform Integrations
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                    Works with your existing systems
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                {INTEGRATIONS.map((item, i) => (
                    <AnimatedSection
                        key={item.label}
                        delay={i * 0.1}
                        className="flex flex-col items-center justify-center p-8 bg-surface-ice border border-outline-variant/30 hover:border-primary transition-colors text-center group"
                    >
                        <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </span>
                        <span className="font-label-caps text-label-caps text-primary">
                            {item.label}
                        </span>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}