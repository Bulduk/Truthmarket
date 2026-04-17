import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#8a2be2] text-white hover:bg-[#8a2be2]/90 shadow-[0_0_15px_rgba(138,43,226,0.3)]",
        destructive: "bg-red-600 text-white hover:bg-red-600/90",
        outline: "border border-[rgba(138,43,226,0.5)] text-[#8a2be2] hover:bg-[#8a2be2]/10",
        secondary: "bg-[rgba(30,58,138,0.3)] text-white hover:bg-[rgba(30,58,138,0.5)] border border-[#1e3a8a]",
        ghost: "hover:bg-[rgba(255,255,255,0.05)] text-white",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "glass hover:bg-[rgba(255,255,255,0.1)] text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
