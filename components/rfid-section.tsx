import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Cog, Eye, AlertTriangle, RotateCcw } from "lucide-react"
import Image from "next/image"

export function RfidSection() {
  const features = [
    {
      icon: Zap,
      title: "Fast Recognition Speed",
      description: ">100 items/3s processing capability",
      highlight: true,
    },
    {
      icon: Cog,
      title: "Professional Motion Control",
      description: "Zero missed reads with advanced control systems",
       highlight: true,
    },
    {
      icon: Shield,
      title: "Electromagnetic Shielding",
      description: "Strict shielding for interference-free operation",
 
  highlight: true,   },
    {
      icon: Eye,
      title: "Industrial Control Software",
      description: "Professional-grade software for reliable operation",
 
  highlight: true,   },
    {
      icon: AlertTriangle,
      title: "Safety Features",
      description: "Anti-pinch/collision detection with emergency stop",
       highlight: true,
    },
    {
      icon: RotateCcw,
      title: "360° Rotating Display",
      description: "Flexible viewing angles for optimal visibility",
 
  highlight: true,   },
  ]

  return (
    <section id="rfid" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            <span className="gradient-text">RFID Smart Tunnel</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Fast, Accurate Product Identification with ELTR#3040 Conveyor Belt RFID Tunnel Machine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
  {/* RFID Machine Visualization */}
  <div
    className="relative"
    data-aos="slide-right"
    data-aos-delay="200"
  >
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden shadow-lg rounded-xl">
      <CardContent className="p-8">
        <div className="relative bg-gradient-to-br from-muted/50 to-muted/20 rounded-xl p-8 min-h-[320px] flex items-center justify-center">
          <div className="text-center space-y-6">
            {/* Device Box */}
            <div className="w-150 h-100 mx-auto bg-primary/10 rounded-lg border-2 border-primary/30 flex items-center justify-center overflow-hidden">
  <Image
    src="/rfid-tunnel.png"
    alt="RFID Tunnel"
    width={440}
    height={160}
    className="object-contain animate-float"
  />
</div>

  <div className="text-2xl font-bold mb-4">RFID TUNNEL</div>
            {/* Animated indicators */}
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-300" />
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-700" />
            </div>

            {/* Status Display */}
            {/* <div className="bg-card/80 rounded-lg p-4 border border-border/50">
              <div className="text-sm text-muted-foreground">Real-time Display</div>
              <div className="text-xl font-bold text-primary">Items Scanned: 247</div>
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* Key Features */}
  <div data-aos="slide-left" data-aos-delay="400">
    <div className="mb-8">
      <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
        ELTR#3040 Model
      </Badge>
      <h3 className="text-2xl font-bold mb-4">Advanced RFID Technology</h3>
      <p className="text-muted-foreground text-balance">
        Professional conveyor belt RFID tunnel machine designed for
        high-speed, accurate product identification in industrial environments.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <Card
          key={index}
          className={`bg-card/50 backdrop-blur-sm border-border/50 transition hover:shadow-md ${
            feature.highlight ? "ring-2 ring-primary/30" : ""
          }`}
          data-aos="fade-up"
          data-aos-delay={600 + index * 50}
        >
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground text-balance">
                  {feature.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>


        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100x</div>
              <div className="text-sm text-muted-foreground">Inventory counting efficiency</div>
            </CardContent>
          </Card>
          <Card
            className="bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Items per 3 seconds</div>
            </CardContent>
          </Card>
          <Card
            className="bg-gradient-to-br from-chart-3/20 to-chart-3/10 border-chart-3/30"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-chart-3 mb-2">0%</div>
              <div className="text-sm text-muted-foreground">Missed reads</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
