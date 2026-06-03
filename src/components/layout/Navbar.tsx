"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 transition-shadow duration-300",
                scrolled && "shadow-md"
            )}
        >
            <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">

                {/* Logo + Brand Name */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Logo image */}
                    <div className="relative w-9 h-9 shrink-0">
                        <Image
                            src="/images/logo.webp"
                            alt="KNEXVORA Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Brand name — same size as before */}
                    <span
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "24px",
                            lineHeight: "32px",
                            fontWeight: "700",
                            letterSpacing: "-0.01em",
                        }}
                        className="text-primary"
                    >
                        KNEXVORA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-stack-lg">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "font-label-caps text-label-caps transition-colors duration-200",
                                    isActive
                                        ? "text-primary font-bold border-b-2 border-primary pb-1"
                                        : "text-secondary hover:text-primary"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA + Mobile */}
                <div className="flex items-center gap-4">
                    <Link
                        href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded font-label-caps text-label-caps hover:opacity-80 transition-opacity duration-300"
                    >
                        Request Demo
                    </Link>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}