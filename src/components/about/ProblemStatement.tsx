const PROBLEMS = [
    {
        num: "01",
        icon: "device_hub",
        title: "Fragmented Systems",
        description:
            "Universities were managing admissions, academics, finance, HR, and compliance on completely separate tools — with no unified view of institutional data. Every department operated in isolation.",
        impact: "12+ disconnected tools on average per institution",
    },
    {
        num: "02",
        icon: "gavel",
        title: "Manual Compliance",
        description:
            "NAAC, UGC, and accreditation preparation consumed months of staff time every cycle. Documents were assembled manually, data was aggregated from spreadsheets, and audit trails existed nowhere.",
        impact: "6–8 months of preparation per accreditation cycle",
    },
    {
        num: "03",
        icon: "visibility_off",
        title: "No Single Source of Truth",
        description:
            "Leadership decisions were made on stale, inconsistent data. Enrollment numbers differed between departments. Financial reports took weeks to compile. Real-time institutional visibility was impossible.",
        impact: "Critical decisions made on outdated information",
    },
];

export default function ProblemStatement() {
    return (
        <section className="py-section-gap bg-surface-ice">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                {/* Header */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-12 h-[1.5px] bg-primary" />
                        <span
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.12em",
                            }}
                            className="uppercase text-primary"
                        >
                            The Problems We Set Out To Solve
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "32px",
                            lineHeight: "40px",
                            fontWeight: "600",
                        }}
                        className="text-primary max-w-2xl"
                    >
                        Higher education deserved better than what technology was offering
                    </h2>
                </div>

                {/* Problem Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-outline-variant/30">
                    {PROBLEMS.map((problem, i) => (
                        <div
                            key={problem.num}
                            className={`p-10 bg-white hover:bg-primary group transition-colors duration-500 cursor-default relative ${i < PROBLEMS.length - 1
                                    ? "border-r border-outline-variant/30 group-hover:border-white/10"
                                    : ""
                                }`}
                        >
                            {/* Faded number */}
                            <span
                                className="absolute top-6 right-8 text-primary/5 group-hover:text-white/5 transition-colors select-none"
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "80px",
                                    fontWeight: "300",
                                    lineHeight: "1",
                                }}
                            >
                                {problem.num}
                            </span>

                            {/* Icon */}
                            <div className="w-12 h-12 bg-primary/5 group-hover:bg-white/10 flex items-center justify-center rounded mb-8 transition-colors">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                                    {problem.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-primary group-hover:text-white mb-4 transition-colors"
                                style={{
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    fontWeight: "600",
                                }}
                            >
                                {problem.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-utility-gray group-hover:text-white/80 mb-8 leading-relaxed transition-colors"
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }}
                            >
                                {problem.description}
                            </p>

                            {/* Impact line */}
                            <div className="border-t border-outline-variant/30 group-hover:border-white/20 pt-6 transition-colors">
                                <p
                                    className="text-primary/60 group-hover:text-white/60 transition-colors"
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    {problem.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}