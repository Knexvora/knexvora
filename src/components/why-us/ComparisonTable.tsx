export default function ComparisonTable() {
    const rows = [
        {
            criteria: "Industry Focus",
            knexvora: { text: "Purpose-built", positive: true },
            genericERP: { text: "Adapted", positive: false },
            legacyHE: { text: "Partial", neutral: true },
        },
        {
            criteria: "Architecture",
            knexvora: { text: "Full flexibility", positive: true },
            genericERP: { text: "Bundled only", positive: false },
            legacyHE: { text: "Limited", neutral: true },
        },
        {
            criteria: "Regulatory Compliance",
            knexvora: { text: "Embedded", positive: true },
            genericERP: { text: "Manual", positive: false },
            legacyHE: { text: "Basic", neutral: true },
        },
        {
            criteria: "Go-Live Timeline",
            knexvora: { text: "90 days", positive: true },
            genericERP: { text: "12–18 months", positive: false },
            legacyHE: { text: "6–12 months", neutral: true },
        },
        {
            criteria: "Post-Live Support",
            knexvora: { text: "Always included", positive: true },
            genericERP: { text: "Ticketed support", positive: false },
            legacyHE: { text: "On contract", neutral: true },
        },
    ];

    return (
        <section className="bg-surface-ice py-section-gap">
            <div className="max-w-container-max mx-auto px-margin-desktop">

                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-6 h-[1.5px] bg-primary" />
                        <span
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.15em",
                            }}
                            className="uppercase text-primary"
                        >
                            Competitive Comparison
                        </span>
                        <div className="w-6 h-[1.5px] bg-primary" />
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "32px",
                            lineHeight: "40px",
                            fontWeight: "600",
                        }}
                        className="text-primary"
                    >
                        How we compare
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-outline-variant/30 shadow-sm">
                    <table className="w-full text-left border-collapse">

                        {/* Header — full dark navy background */}
                        <thead>
                            <tr className="bg-primary">
                                <th
                                    className="py-6 px-8 text-white/60"
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    CRITERIA
                                </th>
                                <th
                                    className="py-6 px-8 text-white border-l border-white/10"
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    KNEXVORA
                                </th>
                                <th
                                    className="py-6 px-8 text-white/60 border-l border-white/10"
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    GENERIC ERP
                                </th>
                                <th
                                    className="py-6 px-8 text-white/60 border-l border-white/10"
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    LEGACY HE SYSTEM
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {rows.map((row) => (
                                <tr
                                    key={row.criteria}
                                    className="border-t border-outline-variant/20 hover:bg-primary group transition-colors duration-300"
                                >
                                    {/* Criteria */}
                                    <td
                                        className="py-6 px-8 text-on-surface-variant group-hover:text-white/70 transition-colors duration-300"
                                        style={{
                                            fontFamily: "'Hanken Grotesk', sans-serif",
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {row.criteria}
                                    </td>

                                    {/* KNEXVORA column */}
                                    <td className="py-6 px-8 border-l border-outline-variant/20 group-hover:border-white/10 transition-colors duration-300">
                                        <div className="flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                                                <span
                                                    className="material-symbols-outlined text-primary group-hover:text-white transition-colors duration-300"
                                                    style={{ fontSize: "14px" }}
                                                >
                                                    check
                                                </span>
                                            </span>
                                            <span
                                                className="text-primary font-bold group-hover:text-white transition-colors duration-300"
                                                style={{
                                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                {row.knexvora.text}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Generic ERP column */}
                                    <td className="py-6 px-8 border-l border-outline-variant/20 group-hover:border-white/10 transition-colors duration-300">
                                        <div className="flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-outline-variant/20 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                                                <span
                                                    className="material-symbols-outlined text-outline group-hover:text-white/40 transition-colors duration-300"
                                                    style={{ fontSize: "14px" }}
                                                >
                                                    close
                                                </span>
                                            </span>
                                            <span
                                                className="text-utility-gray group-hover:text-white/50 transition-colors duration-300"
                                                style={{
                                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                {row.genericERP.text}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Legacy HE column */}
                                    <td className="py-6 px-8 border-l border-outline-variant/20 group-hover:border-white/10 transition-colors duration-300">
                                        <div className="flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-outline-variant/20 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                                                <span
                                                    className="material-symbols-outlined text-outline group-hover:text-white/40 transition-colors duration-300"
                                                    style={{ fontSize: "14px" }}
                                                >
                                                    remove
                                                </span>
                                            </span>
                                            <span
                                                className="text-utility-gray group-hover:text-white/50 transition-colors duration-300"
                                                style={{
                                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                                    fontSize: "15px",
                                                }}
                                            >
                                                {row.legacyHE.text}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}