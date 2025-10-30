import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/hooks/use-theme"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "ELIoT Global | Smart IoT Solutions for Garment Factories",
    template: "%s | ELIoT Global",
  },
  description:
    "Enhancing Machine & Operator Performance with Real-Time Insights. Smart, Scalable IoT Solutions for Garment Factories.",
  generator: "Next.js + Vercel",
  keywords: [
    "IoT solutions",
    "garment factory automation",
    "smart manufacturing",
    "ELIoT",
    "real-time monitoring",
    "operator performance",
    "machine analytics",
    "industrial IoT",
    "textile industry",
  ],
  authors: [{ name: "Adil Saaly", url: "https://adil-saaly.vercel.app/" }],
  creator: "Adil Saaly",
  publisher: "Adil Saaly",

  openGraph: {
    title: "ELIoT - Smart IoT Solutions for Garment Factories",
    description:
      "Enhancing Machine & Operator Performance with Real-Time Insights. Smart, Scalable IoT Solutions for Garment Factories.",
    url: "https://www.eliot.global/",
    siteName: "ELIoT Global",
    images: [
      {
        url: "https://www.eliot.global/eliot-logo.png", // ✅ Replace with your real image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "ELIoT Smart IoT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ELIoT - Smart IoT Solutions for Garment Factories",
    description:
      "Enhancing Machine & Operator Performance with Real-Time Insights. Smart, Scalable IoT Solutions for Garment Factories.",
    images: ["https://www.eliot.global/eliot-logo.png"], // ✅ Replace if different
    creator: "@your_twitter_handle", // ✅ Replace with your Twitter handle
  },

  alternates: {
    canonical: "https://www.eliot.global/",
  },

  metadataBase: new URL("https://www.eliot.global"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ====== BASIC META ====== */}
        <meta name="theme-color" content="#0d1117" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* ====== FAVICONS ====== */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ====== GOOGLE VERIFICATION ====== */}
        {/* ✅ Replace with your Google site verification ID */}
        <meta
          name="google-site-verification"
          content="_oTcoaWYiz4hZ46z5wRMI3jX8O0ZgPJaBCU_XY5s5EU"
        />

        {/* ====== AOS ANIMATION CSS ====== */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        {/* ====== STRUCTURED DATA (JSON-LD) ====== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ELIoT Global",
                url: "https://www.eliot.global/",
                logo: "https://www.eliot.global/eliot-logo.png", // ✅ Replace with your real logo
                sameAs: [
                  "https://web.facebook.com/profile.php?id=61581883043251", // ✅ Replace
                  "https://www.linkedin.com/company/emmanuel-s-lanka-pvt-ltd/", // ✅ Replace
                  "https://www.youtube.com/@EMMANUELSLANKAPVTLTD", // ✅ Replace
                ],
                description:
                  "ELIoT provides smart IoT solutions to garment factories, improving efficiency through real-time operator and machine performance monitoring.",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "ELIoT Global",
                url: "https://www.eliot.global/",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.eliot.global/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </head>

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>

        {/* ====== AOS ANIMATION JS ====== */}
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
