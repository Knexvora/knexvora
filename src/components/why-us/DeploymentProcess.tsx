import AnimatedSection from "@/components/ui/AnimatedSection";
import { DEPLOYMENT_STEPS } from "@/lib/constants";

export default function DeploymentProcess() {
    return (
        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap">
            <AnimatedSection className="mb-16">
                <h2 className="font-headline-md text-headline-md text-primary mb-2">
                    How we get you live
                </h2>
                <p className="text-secondary font-body-md">
                    A deployment process refined across every institution we&apos;ve
                    worked with.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
                <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-outline-variant/30 -z-10" />
                {DEPLOYMENT_STEPS.map((step, i) => (
                    <AnimatedSection key={step.step} delay={i * 0.1} className="group">
                        <div className="w-12 h-12 bg-surface border border-outline-variant flex items-center justify-center font-bold text-primary mb-stack-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {step.step}
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-primary mb-stack-md">
                            {step.title}
                        </h4>
                        <p className="text-secondary font-body-md">{step.description}</p>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}