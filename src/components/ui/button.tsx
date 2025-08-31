import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary/50 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline font-semibold",
        premium: "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground hover:shadow-accent-glow transform hover:scale-105",
        cta: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-glow transform hover:scale-105 font-bold",
        glass: "bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20",
      },
      size: {
        default: "h-11 px-5 py-2.5 min-h-[44px]",
        sm: "h-9 rounded-md px-3 min-h-[36px]",
        lg: "h-12 rounded-md px-8 min-h-[48px] text-base font-semibold",
        xl: "h-14 rounded-md px-10 text-lg font-semibold min-h-[56px]",
        icon: "h-10 w-10 min-h-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
