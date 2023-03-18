import { ThemeProvider } from "next-themes";

import SiteHeader from "@/components/navbar/site-header";
import { Toaster } from "./ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SiteHeader />
        <main>{children}</main>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
