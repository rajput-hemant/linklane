import React from "react";
import { Loader2, LucideIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

const Loader = React.forwardRef<LucideIcon, LucideProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
        <Loader2
          ref={ref}
          {...props}
          className={cn("h-12 w-12 animate-spin", className)}
        />
      </div>
    );
  }
);

Loader.displayName = "Loader";

export default Loader;
