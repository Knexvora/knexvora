"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { ContactFormData } from "@/types";

const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Valid email required"),
    phone: z.string().min(1, "Phone is required"),
    institution: z.string().min(1, "Institution name is required"),
    role: z.string().min(1, "Role is required"),
    message: z.string().min(10, "Please provide more detail"),
});

const ROLES = [
    "Vice Chancellor / Director",
    "Registrar / IT Head",
    "Faculty Administrator",
    "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            institution: "",
            role: "Vice Chancellor / Director",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset();
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const inputClass =
        "w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/40 focus:ring-1 focus:ring-white/40 focus:bg-white/15 outline-none transition-all";

    return (
        <div className="lg:col-span-7">
            <div className="bg-primary-container p-8 md:p-12 rounded-lg text-on-primary shadow-xl">
                <h2 className="font-headline-md text-headline-md text-white mb-2">
                    Request a conversation
                </h2>
                <p className="text-on-primary-container mb-8 opacity-80">
                    We&apos;ll match you with the right person based on your
                    institution&apos;s needs.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                                First name
                            </label>
                            <input
                                {...register("firstName")}
                                className={inputClass}
                                placeholder="Priya"
                                type="text"
                            />
                            {errors.firstName && (
                                <p className="text-[11px] text-red-300">{errors.firstName.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                                Last name
                            </label>
                            <input
                                {...register("lastName")}
                                className={inputClass}
                                placeholder="Sharma"
                                type="text"
                            />
                            {errors.lastName && (
                                <p className="text-[11px] text-red-300">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                                Work email
                            </label>
                            <input
                                {...register("email")}
                                className={inputClass}
                                placeholder="priya@institution.edu"
                                type="email"
                            />
                            {errors.email && (
                                <p className="text-[11px] text-red-300">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                                Phone number
                            </label>
                            <input
                                {...register("phone")}
                                className={inputClass}
                                placeholder="+91 98765 43210"
                                type="tel"
                            />
                            {errors.phone && (
                                <p className="text-[11px] text-red-300">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Institution */}
                    <div className="space-y-2">
                        <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                            Institution name
                        </label>
                        <input
                            {...register("institution")}
                            className={inputClass}
                            placeholder="e.g. Sri Venkateswara University"
                            type="text"
                        />
                        {errors.institution && (
                            <p className="text-[11px] text-red-300">{errors.institution.message}</p>
                        )}
                    </div>

                    {/* Role */}
                    <div className="space-y-2">
                        <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                            Your role
                        </label>
                        <select
                            {...register("role")}
                            className={`${inputClass} appearance-none cursor-pointer`}
                        >
                            {ROLES.map((r) => (
                                <option key={r} value={r} className="text-primary">
                                    {r}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="font-label-caps text-label-caps text-primary-fixed block uppercase">
                            What would you like to discuss?
                        </label>
                        <textarea
                            {...register("message")}
                            className={`${inputClass} resize-none`}
                            placeholder="Tell us briefly about your institution and what you're looking to solve..."
                            rows={4}
                        />
                        {errors.message && (
                            <p className="text-[11px] text-red-300">{errors.message.message}</p>
                        )}
                    </div>

                    <p className="text-[12px] text-primary-fixed-dim leading-relaxed">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="underline hover:text-white">
                            Privacy Policy
                        </a>
                        . We do not share your information with third parties.
                    </p>

                    {/* Success / Error Banner */}
                    {status === "success" && (
                        <div className="rounded-lg border border-green-400/40 bg-green-500/10 px-5 py-4">
                            <p className="text-green-300 font-semibold text-sm">
                                ✅ Enquiry sent successfully!
                            </p>
                            <p className="text-green-200/80 text-xs mt-1 leading-relaxed">
                                Thank you for reaching out. A confirmation email has been sent to your inbox, and our team will get back to you within one business day.
                            </p>
                        </div>
                    )}
                    {status === "error" && (
                        <div className="rounded-lg border border-red-400/40 bg-red-500/10 px-5 py-4">
                            <p className="text-red-300 font-semibold text-sm">
                                ❌ Something went wrong.
                            </p>
                            <p className="text-red-200/80 text-xs mt-1 leading-relaxed">
                                Please try again or email us directly at{" "}
                                <a href="mailto:knexvora.support@gmail.com" className="underline">knexvora.support@gmail.com</a>.
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className="w-full py-4 border border-white/40 hover:bg-white hover:text-primary transition-all font-bold text-label-caps rounded disabled:opacity-60"
                    >
                        {status === "loading"
                            ? "SENDING..."
                            : status === "success"
                                ? "ENQUIRY SENT ✓"
                                : status === "error"
                                    ? "FAILED — TRY AGAIN"
                                    : "SEND ENQUIRY"}
                    </button>
                </form>
            </div>
        </div>
    );
}