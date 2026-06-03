import AnimatedSection from "@/components/ui/AnimatedSection";
import { LEADERS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function LeadershipSection() {
    return (
        <section className="py-section-gap px-margin-desktop bg-surface-ice">
            <div className="max-w-container-max mx-auto">
                <AnimatedSection className="text-center mb-section-gap">
                    <SectionLabel centered>Leadership</SectionLabel>
                    <h2 className="font-headline-md text-headline-md text-primary italic">
                        The people behind KNEXVORA
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
                    {LEADERS.map((leader, i) => (
                        <AnimatedSection
                            key={leader.name}
                            delay={i * 0.1}
                            className="bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:shadow-xl transition-all duration-300"
                        >
                            <div
                                className={`w-16 h-16 ${leader.bgColor} text-on-primary rounded-full flex items-center justify-center font-bold text-xl mb-stack-md`}
                            >
                                {leader.initials}
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-primary">
                                {leader.name}
                            </h3>
                            <p className="font-label-caps text-label-caps text-utility-gray uppercase mb-stack-md">
                                {leader.role}
                            </p>
                            <p className="font-body-md text-body-md text-secondary leading-relaxed">
                                {leader.bio}
                            </p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
