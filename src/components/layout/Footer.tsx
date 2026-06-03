import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_PLATFORM_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_SUPPORT_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-lg pb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="relative shrink-0"
                style={{ width: "36px", height: "36px" }}
              >
                <Image
                  src="/images/logo.webp"
                  alt="KNEXVORA Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  style={{
                    mixBlendMode: "screen",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontWeight: "700",
                }}
                className="text-surface-container-lowest"
              >
                KNEXVORA
              </span>
            </Link>

            <p className="text-secondary-fixed-dim font-body-md max-w-xs">
              Empowering universities to operate with clarity, excellence,
              and confidence — through technology built exclusively for
              higher education.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h5 className="font-label-caps text-label-caps text-surface-bright mb-8 opacity-40">
              PLATFORM
            </h5>
            <ul className="space-y-4 font-body-md text-secondary-fixed-dim">
              {FOOTER_PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-on-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-label-caps text-label-caps text-surface-bright mb-8 opacity-40">
              COMPANY
            </h5>
            <ul className="space-y-4 font-body-md text-secondary-fixed-dim">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-on-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-label-caps text-label-caps text-surface-bright mb-8 opacity-40">
              SUPPORT
            </h5>
            <ul className="space-y-4 font-body-md text-secondary-fixed-dim">
              {FOOTER_SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-on-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-secondary-fixed-dim/60 font-body-md">
            <div>
              © 2026 KNEXVORA Technologies Pvt. Ltd. All rights reserved.
            </div>
            <div>Hyderabad, India</div>
          </div>
        </div>
      </div>
    </footer>
  );
}