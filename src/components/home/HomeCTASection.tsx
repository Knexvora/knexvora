import Link from "next/link";

export default function HomeCTASection() {
    return (
        <section className="py-section-gap bg-white">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left text */}
                    <div>
                        <h2 className="font-headline-md text-headline-md text-primary mb-6">
                            Ready to transform your institution?
                        </h2>
                        <p className="text-utility-gray text-body-lg mb-10 max-w-lg">
                            Let our university technology specialists walk you through a
                            personalised demonstration tailored to your institution&apos;s
                            requirements.
                        </p>
                    </div>

                    {/* Right buttons */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white font-label-caps text-label-caps px-10 py-5 rounded-lg flex-1 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        >
                            SCHEDULE A DEMO
                            <span className="material-symbols-outlined text-[18px]">
                                calendar_today
                            </span>
                        </Link>

                        <Link
                            href="/services"
                            className="border border-primary text-primary font-label-caps text-label-caps px-10 py-5 rounded-lg flex-1 hover:bg-surface-ice transition-all flex items-center justify-center gap-2"
                        >
                            VIEW ALL MODULES
                            <span className="material-symbols-outlined text-[18px]">
                                dashboard
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}