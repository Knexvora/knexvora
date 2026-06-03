"use client";

interface ServicesFilterBarProps {
    active: string;
    onChange: (cat: string) => void;
}

const FILTERS = ["All Modules", "Academic", "Operations", "Finance", "Compliance"];

export default function ServicesFilterBar({
    active,
    onChange,
}: ServicesFilterBarProps) {
    return (
        <div className="flex flex-wrap gap-stack-md border-b border-outline-variant/30 pb-4 mb-stack-lg">
            {FILTERS.map((f) => {
                const isActive = active === f;
                return (
                    <button
                        key={f}
                        onClick={() => onChange(f)}
                        className={`font-label-caps text-label-caps pb-4 px-2 transition-colors border-b-2 -mb-[18px] ${isActive
                                ? "text-primary border-primary"
                                : "text-secondary hover:text-primary border-transparent"
                            }`}
                    >
                        {f}
                    </button>
                );
            })}
        </div>
    );
}