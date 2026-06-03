import Link from "next/link";

const WAYS = [
    {
        icon: "calendar_today",
        title: "Book a platform demo",
        desc: "See the platform live, tailored to your institution type. Sessions are 45 minutes with a product specialist.",
        cta: "Schedule demo",
        href: process.env.NEXT_PUBLIC_CAL_LINK || "/contact",
        external: true,
        download: false,
    },
    {
        icon: "download",
        title: "Download product overview",
        desc: "A detailed overview of all modules, deployment methodology, and integration architecture.",
        cta: "Download PDF",
        href: "/docs/knexvora-product-overview.pdf",
        external: false,
        download: true,
    },
    {
        icon: "share",
        title: "Follow us on LinkedIn",
        desc: "Platform updates, higher education insights, and announcements from our team.",
        cta: "View page",
        href: "https://www.linkedin.com/in/knexvora-technologies-b83a14413?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        external: true,
        download: false,
    },
];

export default function OtherWaysSection() {
    return (
        <>
            {/* Other Ways Section — Navy */}
            <section className="bg-primary py-section-gap overflow-hidden">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "32px",
                            lineHeight: "40px",
                            fontWeight: "600",
                        }}
                        className="text-white mb-stack-lg"
                    >
                        Other ways to connect
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {WAYS.map((way, i) => (
                            <div
                                key={way.title}
                                className={`py-10 group cursor-pointer ${i === 0
                                    ? "md:pr-8"
                                    : i === WAYS.length - 1
                                        ? "md:pl-8"
                                        : "md:px-8"
                                    }`}
                            >
                                {/* Icon box */}
                                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded mb-6 group-hover:bg-white/20 transition-all duration-300">
                                    <span className="material-symbols-outlined text-primary-fixed-dim">
                                        {way.icon}
                                    </span>
                                </div>

                                {/* Title */}
                                <h4
                                    style={{
                                        fontFamily: "'Source Serif 4', serif",
                                        fontSize: "24px",
                                        lineHeight: "32px",
                                        fontWeight: "600",
                                    }}
                                    className="text-white mb-4"
                                >
                                    {way.title}
                                </h4>

                                {/* Description */}
                                <p
                                    className="text-on-primary-container mb-6 opacity-80"
                                    style={{
                                        fontFamily: "'Hanken Grotesk', sans-serif",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                    }}
                                >
                                    {way.desc}
                                </p>

                                {/* CTA — download uses <a> tag, others use Link */}
                                {way.download ? (
                                    <a
                                        href={way.href}
                                        download="KNEXVORA-Product-Overview.pdf"
                                        className="text-primary-fixed font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                                        style={{
                                            fontFamily: "'Hanken Grotesk', sans-serif",
                                            fontSize: "12px",
                                            fontWeight: "700",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {way.cta}
                                        <span className="material-symbols-outlined text-[18px]">
                                            download
                                        </span>
                                    </a>
                                ) : (
                                    <Link
                                        href={way.href}
                                        target={way.external ? "_blank" : undefined}
                                        rel={way.external ? "noopener noreferrer" : undefined}
                                        className="text-primary-fixed font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                                        style={{
                                            fontFamily: "'Hanken Grotesk', sans-serif",
                                            fontSize: "12px",
                                            fontWeight: "700",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {way.cta}
                                        <span className="material-symbols-outlined text-[18px]">
                                            arrow_forward
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITE BREAK — separates navy OtherWaysSection from navy Footer */}
            <div className="bg-white py-12">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="border-t border-outline-variant/30 w-full" />
                </div>
            </div>
        </>
    );
}