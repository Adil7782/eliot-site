import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Clock, Wrench, Package, UsersIcon } from "lucide-react"
import Image from "next/image"

export function EfficiencySection() {
  const improvements = [
    {
      icon: TrendingUp,
      title: "Real-Time Tracking & Alerts",
      impact: "Immediate response to issues",
      improvement: 15,
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Hourly Efficiency",
      impact: "Optimized production cycles",
      improvement: 20,
      color: "text-accent",
    },
    {
      icon: Wrench,
      title: "Breakdown Response",
      impact: "Faster maintenance resolution",
      improvement: 25,
      color: "text-chart-3",
    },
    {
      icon: Package,
      title: "Material Supply/Quality",
      impact: "Improved supply chain management",
      improvement: 18,
      color: "text-chart-4",
    },
    {
      icon: UsersIcon,
      title: "Skill Matrix",
      impact: "Enhanced operator performance",
      improvement: 22,
      color: "text-chart-5",
    },
  ]

  const valueAdditions = [
    "Improved Decision-Making",
    "Enhanced Operator Engagement",
    "Data-Driven Salary Structures",
    "Reduction in Rework and Waste",
    "Operational Stability",
  ]

  return (
    <section id="efficiency" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Estimated <span className="gradient-text">Efficiency Improvements</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Measurable impact on your factory operations with data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div data-aos="slide-right" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-6">Performance Improvements</h3>
            <div className="space-y-6">
              {improvements.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm  border-primary/30"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <CardContent className="p-6 ">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{item.impact}</p>
                        <div className="flex items-center space-x-3">
                          <Progress value={item.improvement} className="flex-1" />
                          <span className="text-lg font-bold text-primary">{item.improvement}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
<div data-aos="slide-left" data-aos-delay="400">
  <h3 className="text-2xl font-bold mb-6">Value Addition</h3>

  <div className="space-y-4 mb-8">
    {valueAdditions.map((value, index) => (
      <div
        key={index}
        className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
        data-aos="fade-in"
        data-aos-delay={600 + index * 50}
      >
        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
        <span className="text-foreground font-medium">{value}</span>
      </div>
    ))}
  </div>

  <Card
    className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30"
    data-aos="zoom-in"
    data-aos-delay="800"
  >
    <CardHeader>
      <CardTitle className="text-center text-2xl">Overall Impact</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <div className="text-5xl font-bold gradient-text mb-2">10-25%</div>
      <p className="text-lg text-foreground">improvement in overall line efficiency</p>
    </CardContent>
  </Card>

  <div className="mt-6 flex justify-center " data-aos="fade-up"
    data-aos-delay="900" data-aos-duration="1000">
    <div className="w-300 h-110 overflow-hidden rounded-xl border-2 border-accent shadow-lg">
      <Image
        src="/eliotDevice.jpg"
        alt="Eliot Device"
        width={240}
        height={240}
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
