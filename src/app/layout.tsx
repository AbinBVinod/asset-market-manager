import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { type ReactNode } from 'react'
import "./globals.css";

import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";


const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assets",
  description: "Manager",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.className}>
        <Providers>{props.children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
