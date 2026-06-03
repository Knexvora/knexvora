export default function ConvictionSection() {
    return (
        <section className="py-section-gap relative overflow-hidden bg-primary text-on-primary">
            {/* Subtle radial bg */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
                {/* Label */}
                <div className="inline-flex items-center gap-2 mb-10 opacity-60">
                    <div className="w-12 h-[1px] bg-white" />
                    <span className="font-label-caps text-label-caps uppercase">
                        Our Conviction
                    </span>
                    <div className="w-12 h-[1px] bg-white" />
                </div>

                {/* Quote */}
                <blockquote
                    style={{
                        fontFamily: "'Source Serif 4', serif",
                        fontSize: "clamp(28px, 4vw, 48px)",
                        lineHeight: "1.2",
                        fontWeight: "700",
                        letterSpacing: "-0.02em",
                    }}
                    className="mb-12"
                >
                    &quot;Administrative complexity should never be the reason a
                    university fails to deliver{" "}
                    <span
                        style={{
                            fontStyle: "italic",
                            fontWeight: "300",
                        }}
                    >
                        transformational education
                    </span>
                    .&quot;
                </blockquote>

                {/* Citation */}
                <div className="flex flex-col items-center opacity-60">
                    <div className="w-[1px] h-12 bg-white mb-4" />
                    <cite className="font-label-caps text-label-caps uppercase tracking-widest not-italic">
                        — KNEXVORA FOUNDING CHARTER
                    </cite>
                </div>
            </div>
        </section>
    );
}