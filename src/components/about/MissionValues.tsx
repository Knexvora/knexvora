export default function MissionValues() {
    return (
        <div className="bg-white">
            <section className="grid grid-cols-1 md:grid-cols-2">
                {/* Mission — White */}
                <div className="bg-white p-16 md:p-24 flex flex-col justify-center">
                    <div className="max-w-lg">
                        <span
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.12em",
                            }}
                            className="uppercase text-utility-gray mb-4 block"
                        >
                            — Our Mission
                        </span>
                        <h2
                            style={{
                                fontFamily: "'Source Serif 4', serif",
                                fontSize: "32px",
                                lineHeight: "40px",
                                fontWeight: "600",
                            }}
                            className="text-primary mt-4 mb-8"
                        >
                            Empowering institutions to operate at their highest potential
                        </h2>
                        <p
                            className="text-secondary mb-4"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "16px",
                                lineHeight: "24px",
                            }}
                        >
                            We believe that when administrative systems work seamlessly,
                            educators can focus entirely on what matters — delivering
                            transformational learning experiences to students.
                        </p>
                        <p
                            className="text-secondary"
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "16px",
                                lineHeight: "24px",
                            }}
                        >
                            Every feature we build, every workflow we design, and every
                            report we generate is guided by one question: does this make
                            a university&apos;s life simpler?
                        </p>
                    </div>
                </div>

                {/* Values — Navy */}
                <div className="bg-primary p-16 md:p-24 flex flex-col justify-center">
                    <div className="max-w-lg">
                        <span
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "12px",
                                fontWeight: "700",
                                letterSpacing: "0.12em",
                            }}
                            className="uppercase text-primary-fixed mb-4 block"
                        >
                            — Our Values
                        </span>
                        <h2
                            style={{
                                fontFamily: "'Source Serif 4', serif",
                                fontSize: "32px",
                                lineHeight: "40px",
                                fontWeight: "600",
                            }}
                            className="text-on-primary mt-4 mb-10"
                        >
                            Principles we build by
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    num: "01",
                                    title: "Purpose over features",
                                    desc: "We build what universities actually need, not what looks impressive in a demo.",
                                },
                                {
                                    num: "02",
                                    title: "Precision in execution",
                                    desc: "Every module is designed with the detail and care that higher education demands.",
                                },
                                {
                                    num: "03",
                                    title: "Partnership, not just software",
                                    desc: "We deploy alongside your team and stay accountable through every phase of growth.",
                                },
                            ].map((v) => (
                                <div
                                    key={v.num}
                                    className="border-l-2 border-white/20 pl-6 py-2 hover:border-white/60 transition-colors duration-300"
                                >
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <span
                                            className="text-white/40"
                                            style={{
                                                fontFamily: "'Hanken Grotesk', sans-serif",
                                                fontSize: "13px",
                                                fontWeight: "300",
                                            }}
                                        >
                                            {v.num}
                                        </span>
                                        <h3
                                            className="text-white"
                                            style={{
                                                fontFamily: "'Source Serif 4', serif",
                                                fontSize: "20px",
                                                lineHeight: "28px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {v.title}
                                        </h3>
                                    </div>
                                    <p
                                        className="text-primary-fixed-dim"
                                        style={{
                                            fontFamily: "'Hanken Grotesk', sans-serif",
                                            fontSize: "15px",
                                            lineHeight: "22px",
                                        }}
                                    >
                                        {v.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHITE BREAK STRIP — separates navy MissionValues from navy WhyWeBuiltThis */}
            <div className="bg-white py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="border-t border-outline-variant/30 w-full" />
            </div>
        </div>
    );
}