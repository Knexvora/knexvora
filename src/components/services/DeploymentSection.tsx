import Link from "next/link";

export default function DeploymentSection() {
    return (
        <section className="bg-primary text-on-primary py-section-gap px-margin-desktop relative overflow-hidden mt-section-gap">
            <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left — Text */}
                <div>
                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "32px",
                            lineHeight: "40px",
                            fontWeight: "600",
                        }}
                        className="mb-6"
                    >
                        Full deployment in 90 days
                    </h2>
                    <p
                        className="opacity-80 mb-10 max-w-lg"
                        style={{
                            fontFamily: "'Hanken Grotesk', sans-serif",
                            fontSize: "18px",
                            lineHeight: "28px",
                        }}
                    >
                        Our implementation methodology has been refined across multiple
                        institutions. We deploy alongside your team — with zero disruption
                        to ongoing academic operations — and remain accountable through
                        every phase.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block border border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-3 font-label-caps text-label-caps uppercase tracking-wider"
                    >
                        Schedule a conversation
                    </Link>
                </div>

                {/* Right — Real Image */}
                <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                        alt="University team collaborating on platform implementation"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Subtle dark overlay to blend with navy section */}
                    <div className="absolute inset-0 bg-primary/30" />
                </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}