import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description:
        "Learn how KNEXVORA uses cookies and similar technologies on our website.",
    alternates: {
        canonical: "https://www.knexvora.com/cookie-policy",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function CookiePolicyPage() {
    const lastUpdated = "June 2025";

    return (
        <div className="max-w-3xl mx-auto px-6 py-24 text-on-background">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-sm text-secondary mb-12">Last updated: {lastUpdated}</p>

            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies?</h2>
                    <p className="leading-relaxed text-secondary">
                        Cookies are small text files that are placed on your device when you visit a
                        website. They are widely used to make websites work more efficiently and to
                        provide information to site owners.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">2. How We Use Cookies</h2>
                    <p className="leading-relaxed text-secondary mb-3">
                        KNEXVORA uses cookies for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-secondary space-y-2">
                        <li>
                            <strong>Essential cookies:</strong> Required for the website to function
                            properly. These cannot be disabled.
                        </li>
                        <li>
                            <strong>Analytics cookies:</strong> Help us understand how visitors use our
                            site (e.g., Google Analytics — anonymised data).
                        </li>
                        <li>
                            <strong>Preference cookies:</strong> Remember your settings and preferences
                            to improve your experience.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">3. Third-Party Cookies</h2>
                    <p className="leading-relaxed text-secondary">
                        Some cookies on our website are set by third-party services, including Google
                        Analytics. These services have their own privacy policies. We recommend you
                        review them:
                    </p>
                    <ul className="list-disc list-inside text-secondary space-y-2 mt-3">
                        <li>
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                Google Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">4. Managing Cookies</h2>
                    <p className="leading-relaxed text-secondary">
                        You can control and manage cookies through your browser settings. Most browsers
                        allow you to refuse or delete cookies. However, if you disable cookies, some
                        features of our website may not work properly.
                    </p>
                    <p className="leading-relaxed text-secondary mt-3">
                        For more information on managing cookies, visit:
                    </p>
                    <ul className="list-disc list-inside text-secondary space-y-2 mt-2">
                        <li>
                            <a
                                href="https://support.google.com/chrome/answer/95647"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                Google Chrome
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                Mozilla Firefox
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                            >
                                Safari
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">5. Changes to This Policy</h2>
                    <p className="leading-relaxed text-secondary">
                        We may update this Cookie Policy from time to time. Any changes will be posted on
                        this page with an updated &quot;Last updated&quot; date.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
                    <p className="leading-relaxed text-secondary">
                        If you have any questions about our use of cookies, please contact us through
                        our{" "}
                        <a href="/contact" className="text-primary underline">
                            contact page
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
}
