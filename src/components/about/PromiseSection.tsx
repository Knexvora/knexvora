const PROMISES = [
    {
        icon: "person_pin",
        title: "A dedicated success manager — not a ticket system",
        description:
            "Every institution we work with is assigned a named success manager who remains accountable through your contract. You will always have a person to call, not a queue to join.",
    },
    {
        icon: "rocket_launch",
        title: "Full deployment in 90 days — or we stay until it is done",
        description:
            "Our 90-day deployment commitment is not a marketing figure. It is a delivery standard we hold ourselves to across every implementation, regardless of institutional size or complexity.",
    },
    {
        icon: "code_off",
        title: "No bespoke code forks — ever",
        description:
            "Every configuration is achieved through platform settings. You will never be locked into a custom build that prevents you from receiving updates, new features, or compliance patches.",
    },
    {
        icon: "verified_user",
        title: "Regulatory updates included — always",
        description:
            "When NAAC frameworks change, when UGC issues new mandates, when international accreditation standards are revised — your platform is updated as part of your subscription, at no additional cost.",
    },
];

export default function PromiseSection() {
    return (
        <>
            {/* WHITE TOP BREAK — separates ValuesDeep white from PromiseSection navy */}
            <div className="bg-white py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="border-t border-outline-variant/30 w-full" />
            </div>

            <section className="bg-primary text-on-primary py-section-gap">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* Left — heading sticky */}
                        <div className="lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 mb-8 opacity-60">
                                <div className="w-6 h-[1px] bg-white" />
                                <span
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.15em",
                                    }}
                                    className="uppercase"
                                >
                                    Our Promise
                                </span>
                            </div>

                            <h2
                                style={{
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: "clamp(32px, 4vw, 48px)",
                                    lineHeight: "1.15",
                                    fontWeight: "600",
                                    letterSpacing: "-0.01em",
                                }}
                                className="mb-8"
                            >
                                What we promise every institution we work with
                            </h2>

                            <p
                                className="text-primary-fixed-dim leading-relaxed max-w-md"
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "18px",
                                    lineHeight: "28px",
                                }}
                            >
                                These are not aspirational statements. They are the
                                operating standards we hold ourselves to on every
                                engagement, with every institution, every time.
                            </p>

                            <div className="mt-12 w-[1px] h-24 bg-white/20" />
                        </div>

                        {/* Right — promise cards */}
                        <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
                            {PROMISES.map((promise, i) => (
                                <div
                                    key={i}
                                    className="py-10 flex items-start gap-8 group hover:bg-white/5 px-6 -mx-6 transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 bg-white/10 group-hover:bg-white/20 flex items-center justify-center rounded shrink-0 transition-colors">
                                        <span className="material-symbols-outlined text-primary-fixed">
                                            {promise.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4
                                            className="text-white mb-3"
                                            style={{
                                                fontFamily: "'Source Serif 4', serif",
                                                fontSize: "20px",
                                                lineHeight: "28px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {promise.title}
                                        </h4>
                                        <p
                                            className="text-primary-fixed-dim leading-relaxed"
                                            style={{
                                                fontFamily: "'Hanken Grotesk', sans-serif",
                                                fontSize: "15px",
                                                lineHeight: "24px",
                                            }}
                                        >
                                            {promise.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHITE BOTTOM BREAK — separates PromiseSection navy from AboutCTA navy */}
            <div className="bg-white py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="border-t border-outline-variant/30 w-full" />
            </div>
        </>
    );
}