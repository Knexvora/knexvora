import AnimatedSection from "@/components/ui/AnimatedSection";

const CHANNELS = [
    {
        icon: "mail",
        label: "General enquiries",
        value: "hello@knexvora.com",
        href: "mailto:hello@knexvora.com",
    },
    {
        icon: "handshake",
        label: "Sales & partnerships",
        value: "+91 63059 17651",
        href: "tel:+914045678900",
    },
    {
        icon: "support_agent",
        label: "Implementation support",
        value: "knexvora.support@gmail.com",
        href: "mailto:knexvora.support@gmail.com",
    },
    {
        icon: "location_on",
        label: "Headquarters",
        value: "Hyderabad, Telangana, India",
        href: null,
    },
];

export default function ContactInfo() {
    return (
        <div className="lg:col-span-5 space-y-12">
            <AnimatedSection>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                    Contact information
                </h3>
                <p className="text-secondary max-w-sm">
                    We respond to all enquiries within one business day. For urgent
                    implementation support, use the dedicated support line.
                </p>
            </AnimatedSection>

            <div className="space-y-8">
                {CHANNELS.map((channel, i) => (
                    <AnimatedSection key={channel.label} delay={i * 0.1}>
                        <div className="flex items-start gap-stack-md group">
                            <div className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded group-hover:border-primary transition-colors shrink-0">
                                <span className="material-symbols-outlined text-primary">
                                    {channel.icon}
                                </span>
                            </div>
                            <div>
                                <p className="font-label-caps text-label-caps text-secondary uppercase mb-1">
                                    {channel.label}
                                </p>
                                {channel.href ? (
                                    <a
                                        href={channel.href}
                                        className="font-body-lg text-body-lg text-primary hover:underline"
                                    >
                                        {channel.value}
                                    </a>
                                ) : (
                                    <p className="font-body-lg text-body-lg text-primary">
                                        {channel.value}
                                    </p>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
}