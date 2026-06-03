const PILLARS = [
    {
        num: "01",
        title: "Unified Student Portal",
        desc: "A single digital gateway for enrollment, grade access, attendance, fee payments, and campus communication — available on any device.",
    },
    {
        num: "02",
        title: "Academic Management",
        desc: "End-to-end management of curricula, examinations, results, and academic records built for precision and regulatory compliance.",
    },
    {
        num: "03",
        title: "Faculty & HR Intelligence",
        desc: "From recruitment through retirement — workload management, performance appraisals, payroll, and leave management unified.",
    },
    {
        num: "04",
        title: "Finance & Fee Management",
        desc: "Multi-currency fee collection, budget forecasting, grant management, and statutory-compliant reporting.",
    },
    {
        num: "05",
        title: "Predictive Analytics",
        desc: "AI-powered dashboards surface dropout risk, enrollment trends, and institutional performance indicators proactively.",
    },
    {
        num: "06",
        title: "Compliance & Accreditation",
        desc: "Automated NAAC, UGC, and international accreditation workflows — turning months of preparation into days.",
    },
];

export default function PillarsSection() {
    return (
        <section className="py-section-gap bg-surface-ice">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                {/* Heading */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="w-6 h-[1.5px] bg-primary" />
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">
                            Core Capabilities
                        </span>
                        <div className="w-6 h-[1.5px] bg-primary" />
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary">
                        Six Pillars of Institutional Excellence
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-outline-variant/20 border border-outline-variant/20 bg-white">
                    {PILLARS.map((pillar) => (
                        <div
                            key={pillar.num}
                            className="p-10 hover:bg-primary group transition-colors duration-500 cursor-default"
                        >
                            <span className="block font-display-lg text-display-lg text-outline-variant/30 mb-6 group-hover:text-white/20 transition-colors">
                                {pillar.num}
                            </span>
                            <h4 className="font-headline-sm text-headline-sm text-primary mb-4 group-hover:text-white transition-colors">
                                {pillar.title}
                            </h4>
                            <p className="text-utility-gray font-body-md group-hover:text-white/80 transition-colors">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}