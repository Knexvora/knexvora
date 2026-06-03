import Link from "next/link";

export default function WhyUsCTA() {
    return (
        <>
            {/* CTA Section — Navy */}
            <section className="bg-primary text-on-primary py-24">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2
                            style={{
                                fontFamily: "'Source Serif 4', serif",
                                fontSize: "clamp(28px, 4vw, 40px)",
                                lineHeight: "1.2",
                                fontWeight: "600",
                            }}
                            className="mb-4 text-white"
                        >
                            Ready to see it for your institution?
                        </h2>
                        <p
                            className="text-primary-fixed-dim"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "18px",
                                lineHeight: "28px",
                            }}
                        >
                            Talk to our team. We&apos;ll walk you through what KNEXVORA
                            looks like for your specific structure and requirements.
                        </p>
                    </div>

                    <Link
                        href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-10 py-5 font-bold font-label-caps text-label-caps hover:bg-primary-fixed-dim transition-colors shadow-lg shrink-0"
                    >
                        Schedule a conversation
                    </Link>
                </div>
            </section>

            {/* WHITE BREAK — separates navy CTA from navy Footer */}
            <div className="bg-white py-12">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="border-t border-outline-variant/30 w-full" />
                </div>
            </div>
        </>
    );
}