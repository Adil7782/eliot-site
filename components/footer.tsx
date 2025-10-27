"use client"

import Image from "next/image"

export default function Footer() {
  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#journey", label: "Journey" },
    { href: "#efficiency", label: "Efficiency" },
    { href: "#rfid", label: "RFID Solutions" },
    { href: "#reports", label: "Reports" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-4"><Image src={"/eliot-logo.png"} alt="" height={120} width={120} /> 
             <h3 className="text-xl font-bold text-primary ">Your Factory, Digitally Mastered </h3>
            </div> 
           
            <p className="text-muted-foreground text-sm">Smart Factory Solutions Since 2009</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© Copyright Emmanuel's Lanka. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
