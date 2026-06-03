import Link from "next/link";

export default function BuiltExclusivelySection() {
    return (
        <section className="py-section-gap bg-white">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-[1.5px] bg-primary" />
                            <span className="font-label-caps text-label-caps text-primary uppercase">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="font-headline-md text-headline-md text-primary mb-8 max-w-lg">
                            Built Exclusively for Higher Education
                        </h2>

                        <div className="space-y-6 text-utility-gray font-body-md max-w-xl">
                            <p>
                                KNEXVORA is not a repurposed ERP. Every module, every
                                workflow, and every report has been designed from first
                                principles around how universities actually operate — their
                                governance structures, accreditation requirements, and the
                                unique rhythms of academic life.
                            </p>
                            <p>
                                From a single autonomous institution to a multi-campus
                                consortium, our platform scales with precision and adapts to
                                your regulatory environment.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 mt-10 font-label-caps text-label-caps text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all"
                        >
                            OUR STORY
                            <span className="material-symbols-outlined text-[16px]">
                                arrow_forward
                            </span>
                        </Link>
                    </div>

                    {/* Right */}
                    <div className="divide-y divide-outline-variant/30 border-y border-outline-variant/30">
                        <div className="py-8">
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                                End-to-End
                            </h3>
                            <p className="text-utility-gray text-body-md">
                                One unified platform covering every institutional function.
                            </p>
                        </div>
                        <div className="py-8">
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                                Purpose-Built
                            </h3>
                            <p className="text-utility-gray text-body-md">
                                Designed exclusively for higher education operations.
                            </p>
                        </div>
                        <div className="py-8">
                            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                                90 Days
                            </h3>
                            <p className="text-utility-gray text-body-md">
                                Average full institutional deployment, zero disruption.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}