import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury variants
        luxury: "bg-walnut text-primary-foreground hover:bg-walnut-light tracking-widest uppercase text-xs font-sans font-normal border-0",
        "luxury-outline": "border border-walnut text-walnut hover:bg-walnut hover:text-primary-foreground tracking-widest uppercase text-xs font-sans font-normal transition-all duration-500",
        "luxury-gold": "bg-gold text-gold-foreground hover:bg-gold/90 tracking-widest uppercase text-xs font-sans font-normal",
        "luxury-ghost": "text-foreground hover:text-walnut tracking-widest uppercase text-xs font-sans font-normal",
        hero: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 tracking-widest uppercase text-xs font-sans font-normal",
        "hero-outline": "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary tracking-widest uppercase text-xs font-sans font-normal transition-all duration-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Luxury sizes
        luxury: "h-12 px-8 py-3",
        "luxury-lg": "h-14 px-12 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
