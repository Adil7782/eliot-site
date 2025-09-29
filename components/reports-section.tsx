import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, BarChart3, PieChart, TrendingUp, Users, Clock } from "lucide-react"

export function ReportsSection() {
  const rfidReports = [
    { name: "Point Wise Reports", icon: BarChart3, description: "Location-based analytics" },
    { name: "Efficiency Reports", icon: TrendingUp, description: "Performance metrics" },
    { name: "Daily Production", icon: PieChart, description: "Daily output analysis" },
    { name: "Style-wise Reports", icon: FileText, description: "Product category insights" },
  ]

  const eliotReports = [
    { name: "Operator Effective Time", icon: Clock, description: "Time utilization analysis" },
    { name: "Summary Efficiency", icon: BarChart3, description: "Overall performance overview" },
    { name: "Detailed Operator", icon: Users, description: "Individual operator metrics" },
    { name: "Operator DHU", icon: TrendingUp, description: "Quality performance tracking" },
  ]

  return (
    <section id="reports" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Comprehensive <span className="gradient-text">Reports</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Detailed analytics and reporting capabilities for informed decision making
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* RFID System Reports */}
          <div data-aos="slide-right" data-aos-delay="200">
            <div className="mb-8">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">RFID System</Badge>
              <h3 className="text-2xl font-bold mb-4">RFID System Reports</h3>
              <p className="text-muted-foreground text-balance">
                Comprehensive tracking and analysis of RFID-enabled inventory and production processes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rfidReports.map((report, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <report.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">{report.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground text-balance">{report.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ELIoT System Reports */}
          <div data-aos="slide-left" data-aos-delay="400">
            <div className="mb-8">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">ELIoT System</Badge>
              <h3 className="text-2xl font-bold mb-4">ELIoT System Reports</h3>
              <p className="text-muted-foreground text-balance">
                Detailed operator performance and efficiency analytics for optimized factory operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eliotReports.map((report, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <report.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-sm">{report.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground text-balance">{report.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  )
}
