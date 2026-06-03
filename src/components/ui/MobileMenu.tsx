"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="md:hidden relative">
            <button
                onClick={() => setOpen(!open)}
                className="text-primary p-2"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined">
                    {open ? "close" : "menu"}
                </span>
            </button>

            {open && (
                <div className="absolute top-full right-0 w-screen -mr-4 bg-surface border-b border-outline-variant/30 shadow-lg z-50">
                    <nav className="flex flex-col px-margin-mobile py-6 gap-6 max-w-container-max mx-auto">
                        {/* Logo inside mobile menu */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 mb-2"
                            onClick={() => setOpen(false)}
                        >
                            <div className="relative w-8 h-8 shrink-0">
                                <Image
                                    src="/images/logo.webp"
                                    alt="KNEXVORA Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span
                                style={{
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: "20px",
                                    fontWeight: "700",
                                }}
                                className="text-primary"
                            >
                                KNEXVORA
                            </span>
                        </Link>

                        {/* Divider */}
                        <div className="border-t border-outline-variant/30" />

                        {/* Nav links */}
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "font-label-caps text-label-caps transition-colors",
                                        isActive
                                            ? "text-primary font-bold"
                                            : "text-secondary"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* CTA */}
                        <Link
                            href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                            target="_blank"
                            className="bg-primary text-on-primary px-6 py-3 rounded font-label-caps text-label-caps text-center hover:opacity-80 transition-opacity"
                            onClick={() => setOpen(false)}
                        >
                            Request Demo
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}