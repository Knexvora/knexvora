"use client";

import { ServiceItem } from "@/types";

interface ServiceCardProps {
    service: ServiceItem;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div className="group bg-surface-container-lowest p-stack-lg border border-outline-variant/30 hover:border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-4 right-6 font-stats-number text-primary/5 text-6xl select-none">
                {String(index + 1).padStart(2, "0")}
            </span>
            <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-on-primary mb-6 rounded-lg">
                <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                {service.title}
            </h3>
            <p className="text-secondary font-body-md mb-6 leading-relaxed">
                {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-surface-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-[10px]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}