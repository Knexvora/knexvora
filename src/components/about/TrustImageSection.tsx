export default function TrustImageSection() {
    return (
        <section
            className="relative h-[600px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80"
                alt="Modern university campus architecture"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay so text is readable */}
            <div className="absolute inset-0 bg-primary/70" />

            {/* Subtle dot grid on top */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center text-on-primary px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
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
                        Our Foundation
                    </span>
                    <div className="w-12 h-[1px] bg-white" />
                </div>

                <h3
                    style={{
                        fontFamily: "'Source Serif 4', serif",
                        fontSize: "clamp(32px, 5vw, 56px)",
                        lineHeight: "1.15",
                        fontWeight: "700",
                        letterSpacing: "-0.02em",
                    }}
                    className="mb-6 drop-shadow-lg"
                >
                    Institutional Trust by Design
                </h3>

                <p
                    style={{
                        fontFamily: "'Hanken Grotesk', sans-serif",
                        fontSize: "18px",
                        lineHeight: "28px",
                    }}
                    className="text-white/80 max-w-2xl mx-auto drop-shadow-md"
                >
                    Architecture that mirrors the stability and permanence of the
                    institutions we are privileged to serve.
                </p>
            </div>

            {/* Bottom fade into white for next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}