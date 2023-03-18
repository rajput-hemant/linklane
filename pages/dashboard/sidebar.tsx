import React from "react";

import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}

const Sidebar = ({ children, className }: SidebarProps) => {
  return (
    <div className={cn("hidden h-[93vh] w-96 md:flex", className)}>
      <div
        className={
          "mx-2 mt-5 flex min-h-[89vh] w-64 flex-col rounded border dark:border-slate-700 lg:w-80"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
