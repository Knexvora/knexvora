import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "font-label-caps text-label-caps transition-all duration-300 inline-flex items-center justify-center gap-2",
                    {
                        "bg-primary text-on-primary hover:opacity-80": variant === "primary",
                        "border border-primary text-primary hover:bg-surface-ice": variant === "outline",
                        "text-primary hover:bg-surface-ice": variant === "ghost",
                        "bg-white text-primary hover:bg-surface-bright": variant === "white",
                    },
                    {
                        "px-4 py-2 text-[11px]": size === "sm",
                        "px-6 py-2.5": size === "md",
                        "px-8 py-4": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;