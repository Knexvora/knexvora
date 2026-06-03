import { cn } from "@/lib/utils";

interface SectionLabelProps {
    children: React.ReactNode;
    className?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionLabel({
    children,
    className,
    centered = false,
    light = false,
}: SectionLabelProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 mb-6",
                centered && "justify-center w-full",
                className
            )}
        >
            <div
                className={cn(
                    "h-[1.5px] w-6",
                    light ? "bg-white/40" : "bg-primary"
                )}
            />
            <span
                className={cn(
                    "font-label-caps text-label-caps uppercase tracking-[0.2em]",
                    light ? "text-white/60" : "text-primary"
                )}
            >
                {children}
            </span>
            {centered && (
                <div className={cn("h-[1.5px] w-6", light ? "bg-white/40" : "bg-primary")} />
            )}
        </div>
    );
}