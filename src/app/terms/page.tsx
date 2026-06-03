import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Read KNEXVORA's Terms and Conditions governing the use of our website and services.",
    alternates: {
        canonical: "https://www.knexvora.com/terms",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function TermsPage() {
    const lastUpdated = "June 2025";

    return (
        <div className="max-w-3xl mx-auto px-6 py-24 text-on-background">
            <h1 className="text-4xl font-bold mb-4">Terms &amp; Conditions</h1>
            <p className="text-sm text-secondary mb-12">Last updated: {lastUpdated}</p>

            <section className="space-y-10">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                    <p className="leading-relaxed text-secondary">
                        By accessing or using the KNEXVORA website (<strong>www.knexvora.com</strong>),
                        you agree to be bound by these Terms and Conditions. If you do not agree to these
                        terms, please do not use our website or services.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">2. Use of the Website</h2>
                    <p className="leading-relaxed text-secondary mb-3">
                        You agree to use this website only for lawful purposes. You must not:
                    </p>
                    <ul className="list-disc list-inside text-secondary space-y-2">
                        <li>Use the site in any way that violates applicable laws or regulations</li>
                        <li>Attempt to gain unauthorised access to any part of the website</li>
                        <li>Transmit any unsolicited or unauthorised advertising material</li>
                        <li>Reproduce, duplicate, or copy our content without written permission</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
                    <p className="leading-relaxed text-secondary">
                        All content on this website, including text, graphics, logos, and software, is
                        the property of KNEXVORA and is protected by applicable intellectual property
                        laws. Unauthorised use of any content is strictly prohibited.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">4. Disclaimer of Warranties</h2>
                    <p className="leading-relaxed text-secondary">
                        The website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis
                        without any warranties of any kind, either express or implied. KNEXVORA does not
                        warrant that the website will be uninterrupted, error-free, or free of viruses
                        or other harmful components.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
                    <p className="leading-relaxed text-secondary">
                        To the fullest extent permitted by law, KNEXVORA shall not be liable for any
                        indirect, incidental, special, consequential, or punitive damages arising out of
                        your use of or inability to use this website or services.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">6. Third-Party Links</h2>
                    <p className="leading-relaxed text-secondary">
                        Our website may contain links to third-party websites. These links are provided
                        for your convenience only. KNEXVORA has no control over the content of those
                        sites and accepts no responsibility for them.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">7. Privacy</h2>
                    <p className="leading-relaxed text-secondary">
                        Your use of this website is also governed by our{" "}
                        <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>,
                        which is incorporated into these Terms by reference.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">8. Governing Law</h2>
                    <p className="leading-relaxed text-secondary">
                        These Terms and Conditions shall be governed by and construed in accordance with
                        applicable laws. Any disputes arising under these terms shall be subject to the
                        exclusive jurisdiction of the relevant courts.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
                    <p className="leading-relaxed text-secondary">
                        KNEXVORA reserves the right to modify these Terms and Conditions at any time.
                        Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your
                        continued use of the website after any changes constitutes your acceptance of the
                        new terms.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
                    <p className="leading-relaxed text-secondary">
                        If you have any questions about these Terms, please contact us through our{" "}
                        <a href="/contact" className="text-primary underline">contact page</a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
