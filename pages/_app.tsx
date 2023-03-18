import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import { Layout } from "@/components/layout";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>

      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
