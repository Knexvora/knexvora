"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="hero-pattern text-on-primary relative overflow-hidden min-h-screen flex flex-col items-center justify-center py-24">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 flex flex-col items-center text-center w-full"
                >
                    {/* Label Row */}
                    <div className="inline-flex items-center gap-3 mb-10 opacity-80">
                        <div className="w-12 h-[1px] bg-white" />
                        <span
                            style={{
                                fontFamily: "'Hanken Grotesk', sans-serif",
                                fontSize: "12px",
                                lineHeight: "16px",
                                letterSpacing: "0.15em",
                                fontWeight: "700",
                            }}
                            className="uppercase"
                        >
                            UNIVERSITY MANAGEMENT SYSTEM
                        </span>
                        <div className="w-12 h-[1px] bg-white" />
                    </div>

                    {/* Main Headline — Two lines, centered */}
                    <h1
                        className="mb-6 w-full max-w-5xl mx-auto"
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "clamp(44px, 7vw, 88px)",
                            lineHeight: "1.08",
                            fontWeight: "700",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        The Platform Universities
                        <br />
                        <span
                            style={{
                                fontFamily: "'Source Serif 4', serif",
                                fontSize: "clamp(44px, 7vw, 88px)",
                                lineHeight: "1.08",
                                fontWeight: "700",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Have Always Truly Deserved
                        </span>
                    </h1>

                    {/* Sub Headline — second elaborated sentence */}
                    <p
                        className="mb-8 max-w-3xl mx-auto"
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "clamp(20px, 2.5vw, 28px)",
                            lineHeight: "1.4",
                            fontWeight: "300",
                            fontStyle: "italic",
                            opacity: 0.75,
                        }}
                    >
                        Purpose-built for higher education. Designed to unify, simplify,
                        and elevate every dimension of institutional life.
                    </p>

                    {/* Divider line */}
                    <div className="w-16 h-[1px] bg-white/30 mb-8" />

                    {/* Paragraph */}
                    <p
                        className="text-primary-fixed-dim mb-10 max-w-2xl leading-relaxed"
                        style={{
                            fontFamily: "'Hanken Grotesk', sans-serif",
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: "400",
                        }}
                    >
                        KNEXVORA unifies every dimension of your institution —
                        admissions, academics, finance, HR, and compliance — into one
                        platform built exclusively for higher education.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mb-20">
                        <Link
                            href="/services"
                            className="bg-white text-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-surface-bright transition-colors duration-300"
                        >
                            EXPLORE PLATFORM
                        </Link>
                        <Link
                            href={process.env.NEXT_PUBLIC_CAL_LINK || "/contact"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/30 text-white font-label-caps text-label-caps px-8 py-4 rounded hover:bg-white/10 transition-colors duration-300"
                        >
                            BOOK A DEMO
                        </Link>
                    </div>

                    {/* Stats Row — stacks vertically on mobile, horizontal on sm+ */}
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full">

                        {/* Stat 1 */}
                        <div className="px-6 sm:px-8 md:px-12 py-4 sm:py-0 text-center sm:text-left">
                            <div
                                className="mb-1"
                                style={{
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    fontWeight: "600",
                                }}
                            >
                                Higher Ed
                            </div>
                            <div
                                className="uppercase opacity-60"
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "10px",
                                    fontWeight: "700",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Focused
                            </div>
                        </div>

                        {/* Divider: horizontal on mobile, vertical on sm+ */}
                        <div className="h-[1px] w-10 sm:h-12 sm:w-[1px] bg-white/20" />

                        {/* Stat 2 */}
                        <div className="px-6 sm:px-8 md:px-12 py-4 sm:py-0 text-center sm:text-left">
                            <div
                                className="mb-1"
                                style={{
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    fontWeight: "600",
                                }}
                            >
                                End-to-End
                            </div>
                            <div
                                className="uppercase opacity-60"
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "10px",
                                    fontWeight: "700",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Integrated
                            </div>
                        </div>

                        {/* Divider: horizontal on mobile, vertical on sm+ */}
                        <div className="h-[1px] w-10 sm:h-12 sm:w-[1px] bg-white/20" />

                        {/* Stat 3 */}
                        <div className="px-6 sm:px-8 md:px-12 py-4 sm:py-0 text-center sm:text-left">
                            <div
                                className="mb-1"
                                style={{
                                    fontFamily: "'Source Serif 4', serif",
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    fontWeight: "600",
                                }}
                            >
                                90 Days
                            </div>
                            <div
                                className="uppercase opacity-60"
                                style={{
                                    fontFamily: "'Hanken Grotesk', sans-serif",
                                    fontSize: "10px",
                                    fontWeight: "700",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Avg. Deploy
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}