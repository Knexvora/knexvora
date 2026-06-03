import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read KNEXVORA's Privacy Policy to understand how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "https://www.knexvora.com/privacy-policy",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "June 2025";

    return (
        <div className="max-w-3xl mx-auto px-6 py-24 text-on-background">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-secondary mb-12">Last updated: {lastUpdated}</p>

            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
                    <p className="leading-relaxed text-secondary">
                        KNEXVORA (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
                        information and your right to privacy. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you visit our
                        website <strong>www.knexvora.com</strong> or use our services.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
                    <p className="leading-relaxed text-secondary mb-3">
                        We may collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside text-secondary space-y-2">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Institution name and role</li>
                        <li>Messages submitted through our contact form</li>
                        <li>Usage data and analytics (anonymised)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
                    <p className="leading-relaxed text-secondary mb-3">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-secondary space-y-2">
                        <li>Respond to your enquiries and provide customer support</li>
                        <li>Send you information about our products and services (with your consent)</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">4. Sharing of Information</h2>
                    <p className="leading-relaxed text-secondary">
                        We do not sell, trade, or otherwise transfer your personal information to third
                        parties without your consent, except as required by law or to trusted service
                        providers who assist us in operating our website (e.g., email delivery services).
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
                    <p className="leading-relaxed text-secondary">
                        Our website may use cookies to enhance your browsing experience. You can choose
                        to disable cookies through your browser settings. Please refer to our{" "}
                        <a href="/cookie-policy" className="text-primary underline">Cookie Policy</a>{" "}
                        for more details.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
                    <p className="leading-relaxed text-secondary">
                        We retain your personal information only for as long as necessary to fulfil the
                        purposes outlined in this policy, unless a longer retention period is required by
                        law.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
                    <p className="leading-relaxed text-secondary">
                        Depending on your location, you may have certain rights regarding your personal
                        data, including the right to access, correct, or delete your information. To
                        exercise these rights, please contact us at{" "}
                        <a href="/contact" className="text-primary underline">our contact page</a>.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">8. Security</h2>
                    <p className="leading-relaxed text-secondary">
                        We implement appropriate technical and organisational measures to protect your
                        personal information against unauthorised access, alteration, disclosure, or
                        destruction.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
                    <p className="leading-relaxed text-secondary">
                        We may update this Privacy Policy from time to time. We will notify you of any
                        changes by posting the new policy on this page with an updated &quot;Last updated&quot;
                        date.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
                    <p className="leading-relaxed text-secondary">
                        If you have any questions about this Privacy Policy, please contact us through
                        our{" "}
                        <a href="/contact" className="text-primary underline">contact page</a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
