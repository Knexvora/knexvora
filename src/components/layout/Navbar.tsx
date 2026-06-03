"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu whenever the route changes (user navigated)
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <header
                className={cn(
                    "bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 transition-shadow duration-300",
                    scrolled && "shadow-md"
                )}
            >
                {/* Main bar */}
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">

                    {/* Logo + Brand */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
                        <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
                            <Image
                                src="/images/logo.webp"
                                alt="KNEXVORA Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span
                            style={{
                                fontFamily: "'Source Serif 4', serif",
                                fontWeight: "700",
                                letterSpacing: "-0.01em",
                            }}
                            className="text-primary text-[18px] sm:text-[22px] md:text-[24px] leading-tight"
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
                                        "font-label-caps text-label-caps transition-colors duration-200 whitespace-nowrap",
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

                    {/* Right side: CTA + hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded font-label-caps text-label-caps hover:opacity-80 transition-opacity duration-300 whitespace-nowrap"
                        >
                            Request Demo
                        </Link>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-primary p-1.5 -mr-1.5 rounded focus:outline-none"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            <span className="material-symbols-outlined select-none" style={{ fontSize: "26px" }}>
                                {menuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown — anchored to bottom of header, full width */}
                <div
                    className={cn(
                        "md:hidden absolute left-0 right-0 top-full bg-surface border-b border-outline-variant/30 shadow-xl z-50",
                        "transition-all duration-200 ease-in-out overflow-hidden",
                        menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    )}
                >
                    <nav className="flex flex-col px-margin-mobile py-5 gap-1 max-w-container-max mx-auto">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "font-label-caps text-label-caps py-3 border-b border-outline-variant/20 transition-colors",
                                        isActive
                                            ? "text-primary font-bold"
                                            : "text-secondary hover:text-primary"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <div className="pt-4 pb-2">
                            <Link
                                href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-primary text-on-primary px-6 py-3.5 rounded font-label-caps text-label-caps text-center hover:opacity-80 transition-opacity"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Overlay — closes menu on tap outside */}
            {menuOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black/20"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}