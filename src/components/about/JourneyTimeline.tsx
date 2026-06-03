import AnimatedSection from "@/components/ui/AnimatedSection";
import { TIMELINE } from "@/lib/constants";

export default function JourneyTimeline() {
    return (
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
            <AnimatedSection className="text-center">
                <span className="font-label-caps text-label-caps text-utility-gray uppercase tracking-widest mb-stack-md block">
                    — Our Journey
                </span>
                <h2 className="font-headline-md text-headline-md text-primary text-center mb-stack-lg italic">
                    How KNEXVORA came to be
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-section-gap border-y border-outline-variant/30">
                {TIMELINE.map((item, i) => (
                    <AnimatedSection
                        key={item.year}
                        delay={i * 0.1}
                        className={`p-stack-lg border-r border-outline-variant/30 ${i === TIMELINE.length - 1 ? "bg-surface-ice border-r-0" : ""
                            }`}
                    >
                        <span className="font-stats-number text-headline-sm text-primary-container mb-2 block">
                            {item.year}
                        </span>
                        <h4 className="font-label-caps text-label-caps text-primary uppercase mb-stack-md">
                            {item.title}
                        </h4>
                        <p className="font-body-md text-body-md text-secondary">
                            {item.description}
                        </p>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}