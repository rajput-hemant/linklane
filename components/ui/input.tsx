import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "dark:bg-grey-500 flex h-10 w-full rounded-md border py-2 px-3 text-sm shadow outline-slate-700 transition-colors duration-300 placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-white dark:shadow-md dark:placeholder:text-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
