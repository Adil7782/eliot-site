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
      default: 'ELIoT Global| Smart IoT Solutions for Garment Factories',
      template: '%s | ELIoT Global',
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
    authors: [{ name: "Adil Saaly", url: "https://web.facebook.com/adil.saaly" }],
    creator: "Adil Saaly",
    publisher: "Emmanuel’s Lanka (PVT) Ltd",

    // For social sharing
    openGraph: {
      title: "ELIoT - Smart IoT Solutions for Garment Factories",
      description:
        "Enhancing Machine & Operator Performance with Real-Time Insights. Smart, Scalable IoT Solutions for Garment Factories.",
      url: "https://www.eliot.global/",
      siteName: "ELIoT",
      images: [
        {
          url: "https://www.eliot.global/eliot-logo.png", // Replace with your real image path
          width: 1200,
          height: 630,
          alt: "ELIoT Smart IoT Solutions",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    // For Twitter Cards
    twitter: {
      card: "summary_large_image",
      title: "ELIoT - Smart IoT Solutions for Garment Factories",
      description:
        "Enhancing Machine & Operator Performance with Real-Time Insights. Smart, Scalable IoT Solutions for Garment Factories.",
      images: ["https://www.eliot.global/eliot-logo.png"],
      creator: "@eliot_smart", // Replace with your actual handle if available
    },

    // Canonical URL
    alternates: {
      canonical: "https://www.eliot.global/",
    },

    // Optional metadata for better SEO control
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
          {/* AOS animation CSS */}
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
          {/* Favicon and Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#0d1117" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="google-site-verification" content="_oTcoaWYiz4hZ46z5wRMI3jX8O0ZgPJaBCU_XY5s5EU" />

          {/* JSON-LD Structured Data for rich results */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ELIoT",
                url: "https://www.eliot.global",
                logo: "https://www.eliot.global/logo.png",
                sameAs: [
                  "https://web.facebook.com/profile.php?id=61581883043251",
                  "https://web.facebook.com/profile.php?id=61581883043251/",
                ],
                description:
                  "ELIoT provides smart IoT solutions to garment factories, improving efficiency through real-time operator and machine performance monitoring.",
              }),
            }}
          />
        </head>
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
          <ThemeProvider defaultTheme="dark">
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </ThemeProvider>

          {/* AOS Scripts */}
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
