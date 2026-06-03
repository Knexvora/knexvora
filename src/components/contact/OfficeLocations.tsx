import AnimatedSection from "@/components/ui/AnimatedSection";
import { OFFICE_LOCATIONS } from "@/lib/constants";

export default function OfficeLocations() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
            <AnimatedSection>
                <div className="flex justify-between items-end mb-stack-lg">
                    <h2 className="font-display-lg text-display-lg text-primary">
                        Our offices
                    </h2>
                    <p className="text-secondary font-label-caps tracking-widest hidden md:block">
                        GLOBAL PRESENCE
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                {OFFICE_LOCATIONS.map((office, i) => (
                    <AnimatedSection
                        key={`${office.city}-${office.country}`}
                        delay={i * 0.1}
                        className="bg-white border border-outline-variant p-8 md:p-10 flex flex-col justify-between hover:shadow-lg transition-shadow"
                    >
                        <div>
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-6">
                                {office.city}, {office.country}
                            </span>
                            <p className="text-headline-sm font-headline-sm text-primary leading-tight">
                                {office.address.map((line, idx) => (
                                    <span key={idx}>
                                        {line}
                                        {idx < office.address.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <div className="mt-12 flex justify-between items-center">
                            <span
                                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm ${office.type === "Headquarters"
                                        ? "bg-primary text-on-primary"
                                        : "bg-surface-container-high text-primary"
                                    }`}
                            >
                                {office.type}
                            </span>
                            <a
                                href="#"
                                className="text-primary hover:opacity-70 flex items-center gap-2 font-bold text-label-caps"
                            >
                                View Map
                                <span className="material-symbols-outlined text-sm">
                                    open_in_new
                                </span>
                            </a>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}