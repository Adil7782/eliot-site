import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Bell, Clock, Shield, Users, FileText } from "lucide-react"
import Image from "next/image"
import { CometCard } from "./ui/comet-card"

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Production Monitoring",
      description: "Auto-counting, targets, efficiency tracking, and real-time alerts",
      badges: ["Real-time", "Automated", "Accurate"],
    },
    {
      icon: Bell,
      title: "Alerting System",
      description: "SMS notifications, mechanic/supervisor alerts, smart light indicators",
      badges: ["SMS", "Visual", "Instant"],
    },
    {
      icon: Clock,
      title: "Off-Standard/Loss Time Monitoring",
      description: "Track and analyze downtime to optimize operational efficiency",
      badges: ["Downtime", "Analysis", "Optimization"],
    },
    {
      icon: Shield,
      title: "Quality Management",
      description: "DHU tracking, QC monitoring, and quality assurance systems",
      badges: ["DHU", "QC", "Quality"],
    },
    {
      icon: Users,
      title: "Operator Performance Management",
      description: "Skill matrix, learning curve analysis, performance-based salary data",
      badges: ["Skills", "Performance", "Analytics"],
    },
    {
      icon: FileText,
      title: "Data and Reporting",
      description: "Comprehensive reports and analytics for informed decision making",
      badges: ["Reports", "Analytics", "Insights"],
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            <span className="gradient-text">ELIoT System</span> Overview
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Comprehensive IoT solutions with real-time dashboard and analytics
          </p>
        </div>
        <div
  className="mt-6 flex justify-center"
  data-aos="fade-up"
  data-aos-delay="900"
  data-aos-duration="1000"
>
  {/* <div className="w-[900px] h-[510px] overflow-hidden rounded-xl border-2 border-accent shadow-lg relative">
   
  </div> */}
 <CometCard className="mx-auto my-10 md:my-20 w-full max-w-[900px]">
  <button
    type="button"
    className="w-full cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4"
    aria-label="View invite F7RA"
    style={{
      transformStyle: "preserve-3d",
      transform: "none",
      opacity: 1,
    }}
  >
    {/* Image Container with Aspect Ratio */}
    <div className="relative w-full aspect-[16/9] mb-2 md:mb-4"> {/* 16:9 aspect ratio */}
      <Image
        src="/dashboard.png"
        alt="Eliot Device"
        fill
        className="object-contain rounded-lg"
        sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, 900px"
        priority
      />
    </div>
    
    {/* Footer */}
    <div className="flex flex-shrink-0 items-center justify-between p-2 md:p-4 font-mono text-white border-t border-gray-700">
      <div className="text-xs md:text-sm">Real Time Dashboard</div>
    </div>
  </button>
</CometCard>
</div>


        {/* Dashboard Mockup */}
        <div className="mb-12" data-aos="zoom-in" data-aos-delay="200">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-5xl mx-auto">
            <CardHeader>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-primary/10 rounded-lg p-4 text-center" data-aos="fade-in" data-aos-delay="400">
                  <div className="text-3xl font-bold text-primary mb-2">87.1%</div>
                  <div className="text-sm text-muted-foreground">Overall Efficiency</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center" data-aos="fade-in" data-aos-delay="500">
                  <div className="text-3xl font-bold text-accent mb-2">434/2026</div>
                  <div className="text-sm text-muted-foreground">Actual vs Target (pcs)</div>
                </div>
                <div className="bg-chart-3/10 rounded-lg p-4 text-center" data-aos="fade-in" data-aos-delay="600">
                  <div className="text-3xl font-bold text-chart-3 mb-2">0</div>
                  <div className="text-sm text-muted-foreground">Rejects</div>
                </div>
                <div className="bg-chart-4/10 rounded-lg p-4 text-center" data-aos="fade-in" data-aos-delay="700">
                  <div className="text-3xl font-bold text-chart-4 mb-2">11.31%</div>
                  <div className="text-sm text-muted-foreground">Line DHU </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 text-balance">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         
      </div>
    </section>
  )
}
