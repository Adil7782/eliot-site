"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Lightbulb, HeadphonesIcon } from "lucide-react"
import { useEffect } from "react"

export function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Customer-Centric Solutions",
      description: "Tailored IoT solutions designed specifically for your factory needs",
    },
    {
      icon: Lightbulb,
      title: "Cutting-edge R&D and Innovation",
      description: "Advanced technology backed by continuous research and development",
    },
    {
      icon: CheckCircle,
      title: "Industry-Proven & Affordable",
      description: "Tested solutions that deliver results without breaking the budget",
    },
    {
      icon: HeadphonesIcon,
      title: "Superior Customer Service",
      description: "24/7 support to ensure your operations run smoothly",
    },
  ]

  const benefits = [
    "Overall Productivity",
    "Labor Quality",
    "Real-Time Decision Making",
    "Machine Utilization",
    "Process Accuracy",
    "Reduce Cost of Supervision",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            Why Choose <span className="gradient-text">ELIoT</span>?
          </h2>
          <p 
            className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Transform your garment factory with intelligent IoT solutions that drive efficiency, quality, and
            profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={400 + (index * 100)}
              data-aos-duration="600"
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)}
                  data-aos-duration="400"
                >
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-balance">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-balance">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
        >
          <h3 
            className="text-2xl font-bold text-center mb-8"
            data-aos="fade-in"
            data-aos-delay="900"
            data-aos-duration="600"
          >
            Key Benefits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
                data-aos="fade-right"
                data-aos-delay={1000 + (index * 100)}
                data-aos-duration="500"
              >
                <CheckCircle 
                  className="h-5 w-5 text-accent flex-shrink-0"
                  data-aos="bounce-in"
                  data-aos-delay={1100 + (index * 100)}
                  data-aos-duration="400"
                />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}