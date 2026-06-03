export default function WhyWeBuiltThis() {
    return (
        <section className="bg-primary text-on-primary py-section-gap overflow-hidden relative">
            {/* Subtle dot grid background */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
                {/* Top label */}
                <div className="inline-flex items-center gap-3 mb-16 opacity-60">
                    <div className="w-12 h-[1px] bg-white" />
                    <span
                        style={{
                            fontFamily: "'Hanken Grotesk', sans-serif",
                            fontSize: "12px",
                            fontWeight: "700",
                            letterSpacing: "0.15em",
                        }}
                        className="uppercase"
                    >
                        Why We Built This
                    </span>
                </div>

                {/* Quote block — fully centered, quote marks inline with text */}
                <div className="flex flex-col items-center text-center mb-20">
                    <blockquote
                        className="max-w-5xl mx-auto"
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "clamp(28px, 4vw, 52px)",
                            lineHeight: "1.25",
                            fontWeight: "600",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {/* Opening quote mark — inline, same size, muted */}
                        <span
                            className="text-white/30"
                            style={{ fontWeight: "700" }}
                        >
                            &ldquo;
                        </span>
                        Most university software was built for corporations and
                        stretched to fit academia. We decided to{" "}
                        <span
                            style={{
                                fontStyle: "italic",
                                fontWeight: "300",
                            }}
                        >
                            start from scratch.
                        </span>
                        {/* Closing quote mark — inline, same size, muted */}
                        <span
                            className="text-white/30"
                            style={{ fontWeight: "700" }}
                        >
                            &rdquo;
                        </span>
                    </blockquote>
                </div>

                {/* Two column split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start border-t border-white/10 pt-16">
                    {/* Left — The problem we saw */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 opacity-60">
                            <div className="w-6 h-[1px] bg-white" />
                            <span
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "11px",
                                    fontWeight: "700",
                                    letterSpacing: "0.12em",
                                }}
                                className="uppercase"
                            >
                                The Problem We Saw
                            </span>
                        </div>
                        <p
                            className="text-primary-fixed-dim leading-relaxed mb-6"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            Universities across India and beyond were running on a
                            patchwork of disconnected tools — admissions on one system,
                            finance on another, compliance handled through spreadsheets,
                            and HR managed entirely on paper.
                        </p>
                        <p
                            className="text-primary-fixed-dim leading-relaxed"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            Every accreditation cycle meant months of painful data
                            aggregation. Every leadership decision was made on outdated
                            information. And the people who suffered most were not
                            administrators — they were students.
                        </p>
                    </div>

                    {/* Right — What we decided to do */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 opacity-60">
                            <div className="w-6 h-[1px] bg-white" />
                            <span
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "11px",
                                    fontWeight: "700",
                                    letterSpacing: "0.12em",
                                }}
                                className="uppercase"
                            >
                                What We Decided To Do
                            </span>
                        </div>
                        <p
                            className="text-primary-fixed-dim leading-relaxed mb-6"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            We made one founding decision that has never changed —
                            KNEXVORA would be built exclusively for higher education.
                            Not a generic ERP adapted for universities. Not a
                            repurposed school management tool. A platform designed
                            from the ground up around how universities actually
                            govern, operate, and grow.
                        </p>
                        <p
                            className="text-primary-fixed-dim leading-relaxed"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            Every module, every workflow, every report in KNEXVORA
                            exists because a university needed it — not because a
                            generic software category demanded it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}