import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/hooks/use-theme"

import "./globals.css"

export const metadata: Metadata = {
  title: "ELIoT - Smart IoT Solutions for Garment Factories",
  description:
    "Enhancing Machine & Operator Performance with Real-Time Insights. Smart, Scalable IoT Solutions for Garment Factories.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark">
        
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            AOS.init({
              duration: 800,
              easing: 'ease-in-out',
              once: true,
              offset: 100
            });
          `,
          }}
        />
      </body>
    </html>
  )
}
