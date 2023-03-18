import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-white font-sans text-black antialiased dark:bg-[rgb(26_26_26)] dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
