import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="bg-white py-section-gap px-margin-desktop">
            <div className="max-w-container-max mx-auto">
                {/* Navy card */}
                <div className="bg-primary text-on-primary px-16 py-20 text-center rounded-xl">
                    <div className="inline-flex items-center gap-3 mb-8 opacity-60">
                        <div className="w-12 h-[1px] bg-white" />
                        <span
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "11px",
                                fontWeight: "700",
                                letterSpacing: "0.15em",
                            }}
                            className="uppercase"
                        >
                            Work With Us
                        </span>
                        <div className="w-12 h-[1px] bg-white" />
                    </div>

                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "clamp(32px, 5vw, 56px)",
                            lineHeight: "1.15",
                            fontWeight: "700",
                            letterSpacing: "-0.02em",
                        }}
                        className="mb-6 max-w-3xl mx-auto"
                    >
                        Want to learn more about our work?
                    </h2>

                    <p
                        className="text-primary-fixed-dim mb-12 max-w-xl mx-auto"
                        style={{
                            fontFamily: "'Hanken Grotesk', sans-serif",
                            fontSize: "18px",
                            lineHeight: "28px",
                        }}
                    >
                        Reach out to our team for a conversation about how KNEXVORA
                        can fit your institution&apos;s unique needs.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-10 py-4 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                        >
                            GET IN TOUCH
                        </Link>
                        <Link
                            href="/services"
                            className="border border-white/30 text-white px-10 py-4 rounded-lg font-label-caps text-label-caps hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            VIEW SERVICES
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}