"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";
import ServicesFilterBar from "./ServicesFilterBar";

export default function ServicesGrid() {
    const [activeFilter, setActiveFilter] = useState("All Modules");

    const filtered = SERVICES.filter((s) => {
        if (activeFilter === "All Modules") return true;
        return s.category === activeFilter.toLowerCase();
    });

    return (
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
            <ServicesFilterBar active={activeFilter} onChange={setActiveFilter} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filtered.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={i} />
                ))}
            </div>
        </section>
    );
}