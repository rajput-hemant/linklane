import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-lg text-sm font-medium hover:brightness-110 shadow-md transition-colors disabled:opacity-50 disabled:pointer-events-none outline-none data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-grey-500",
  {
    variants: {
      variant: {
        default: "bg-black dark:bg-white text-white dark:text-black",
        destructive:
          "bg-red-500 dark:bg-red-500 dark:text-white text-white dark:hover:text-white hover:bg-red-500 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 text-black dark:text-white hover:bg-slate-100 dark:border-slate-500",
        subtle:
          "bg-blue-500 text-white dark:bg-blue-500 dark:text-white dark:focus:bg-blue-500",
        ghost:
          "bg-transparent dark:bg-transparent shadow-none text-slate-700 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
