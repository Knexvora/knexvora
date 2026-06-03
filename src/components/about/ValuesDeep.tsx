const VALUES = [
    {
        num: "01",
        title: "We only serve higher education",
        description:
            "We made a deliberate choice to focus exclusively on universities and institutions of higher learning. This is not a positioning statement — it is a structural decision. Our entire product roadmap, our implementation methodology, our support model, and our team's expertise is built around the singular complexity of academic institutions.",
        image:
            "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
        imageAlt: "University campus building with modern architecture",
    },
    {
        num: "02",
        title: "We deploy alongside your team",
        description:
            "Software is only as good as its adoption. We do not hand over a system and walk away. Our implementation team works embedded within your institution — configuring, training, migrating, and going live together. A dedicated success manager stays with you through every phase, not just the first 90 days.",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        imageAlt: "Team collaborating around a table in a professional setting",
    },
    {
        num: "03",
        title: "No bespoke code. Ever.",
        description:
            "Every customisation in KNEXVORA is achieved through platform configuration — never through bespoke code forks. This means every institution we work with always benefits from the latest release, the latest compliance updates, and the latest platform features. Your institution never falls behind because of a one-off technical decision made years ago.",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        imageAlt: "Clean modern technology workspace with monitors",
    },
];

export default function ValuesDeep() {
    return (
        <section className="py-section-gap bg-white">
            <div className="max-w-container-max mx-auto px-margin-desktop">
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
                            How We Operate
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "32px",
                            lineHeight: "40px",
                            fontWeight: "600",
                        }}
                        className="text-primary max-w-xl"
                    >
                        Three principles that define everything we do
                    </h2>
                </div>

                {/* Alternating rows */}
                <div className="space-y-0 divide-y divide-outline-variant/20">
                    {VALUES.map((value, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={value.num}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isEven ? "" : ""
                                    }`}
                            >
                                {/* Text block */}
                                <div
                                    className={`p-12 lg:p-16 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"
                                        }`}
                                >
                                    {/* Number */}
                                    <span
                                        className="text-primary/10 mb-4 block"
                                        style={{
                                            fontFamily: "'Hanken Grotesk', sans-serif",
                                            fontSize: "72px",
                                            lineHeight: "1",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {value.num}
                                    </span>

                                    {/* Title */}
                                    <h3
                                        className="text-primary mb-6"
                                        style={{
                                            fontFamily: "'Source Serif 4', serif",
                                            fontSize: "28px",
                                            lineHeight: "36px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-utility-gray leading-relaxed"
                                        style={{
                                            fontFamily: "'Hanken Grotesk', sans-serif",
                                            fontSize: "16px",
                                            lineHeight: "26px",
                                        }}
                                    >
                                        {value.description}
                                    </p>
                                </div>

                                {/* Image block */}
                                <div
                                    className={`relative overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"
                                        }`}
                                    style={{ minHeight: "400px" }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={value.image}
                                        alt={value.imageAlt}
                                        className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-primary/20" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}