"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, ArrowUpRight, Sparkles, X } from "lucide-react"

export default function ReportsStackSection() {
  const [activeFilter, setActiveFilter] = useState("ELIoT Analytics")
  const [selectedImage, setSelectedImage] = useState<{
  id: string
  title: string
  category: string
  image: string
  description: string
  tech: string[]
} | null>(null)

  const filters = ["All","ELIoT Analytics", "RFID System Reports","ELIoT System Reports"]

  const projects = [
   
 {
    id: 23,
    title: "Hourly Production",
    category: "ELIoT Analytics",
    image: "/db-9.png",
    description: "This Heatmap shows the total production of each operations grouped into hour groups.",
    tech: ["IoT", "Automation", "Industrial"],
  },

  
  {
    id: 25,
    title: "Cycle Time Analysis vs Target SMV",
    category: "ELIoT Analytics",
    image: "/db-7.png",
    description: "This component visualizes hourly actual cycle times for a specific operation, comparing them against a target SMV. It helps track if the operation is meeting its efficiency goals hour by hour, with export options for reporting",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 26,
    title: "SMV vs Cycle Time",
    category: "ELIoT Analytics",
    image: "/db-6.png",
    description: "This component visualizes, for each machine, the target SMV, the actual average cycle time, and the efficiency percentage, helping you quickly see which machines are meeting or missing their cycle time targets.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 27,
    title: "Pitch Graph",
    category: "ELIoT Analytics",
    image: "/db-5.png",
    description: "This component visualizes, for each operation, the SMV and the calculated pitch time (ideal interval between units), helping you compare actual operation times to the ideal pace required to meet production targets.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 28,
    title: "Capacity Diagram",
    category: "ELIoT Analytics",
    image: "/db-4.png",
    description: "This component visualizes, for each operation or machine, the calculated production capacity per hour (considering SMV, bundle time, and personal allowance) and compares it to the target rate, helping you identify bottlenecks and improvement opportunities in the production process.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 29,
    title: "Top Performance Operators",
    category: "ELIoT Analytics",
    image: "/db-3.png",
    description: "This component visualizes and ranks operators by their efficiency for the selected day, showing who is performing best relative to available working time. It helps quickly identify top performers and those who may need support.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 30,
    title: "Operator Wise DHU",
    category: "ELIoT Analytics",
    image: "/db-2.png",
    description: "This component visualizes the DHU (defects per hundred units) for each operator, helping you quickly identify which operators have higher defect rates and may need support or retraining.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  // {
  //   id: 31,
  //   title: "DB",
  //   category: "ELIoT Analytics",
  //   image: "/db-1.png",
  //   description: "Advanced automated printing solution with IoT integration",
  //   tech: ["IoT", "Automation", "Industrial"],
  // },

 {
    id: 2,
    title: "Efficiency heatmaps",
    category: "ELIoT Analytics",
    image: "/db-10.png",
    description: "This component visualizes hourly efficiency for each operation , helping you monitor and compare real-time performance across operations and time slots.",
    tech: ["IoT", "Automation", "Industrial"],
  },

  {
    id: 52,
    title: "Day Style-size wise Production Tracking Report",
    category: "RFID System Reports",
    image: "/Day Style-size wise Production Tracking Report.png",
    description: "This report offers a granular daily production breakdown for a specific style, detailed by individual sizes. It tracks item  quantities through each production stage, enabling precise monitoring of workflow and inventory.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 33,
    title: "Factory-wise Daily Production Report",
    category: "RFID System Reports",
    image: "/Factory-wise Daily Production Report.png",
    description: " This daily report tracks the production flow from cutting to packing. It details the quantity of items moving through each stage (In/Out) and the current Work In Progress (WIP), helping to monitor workflow and identify bottlenecks",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 34,
    title: "Line End Report",
    category: "RFID System Reports",
    image: "/Line End Report.png",
    description: "This report provides a comprehensive quality analysis for a specific production line. It features a point-wise summary of  key QC stages and a detailed hourly breakdown that links specific defects to individual operators and operations, facilitating root cause analysis",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 35,
    title: "Line Wise Sewing Defect Quantity Report ",
    category: "RFID System Reports",
    image: "/Line Wise Sewing Defect Quantity Report .png",
    description: "This report analyzes sewing defects by production line and defect type. It quantifies each issue, calculates the overall  defect percentage, and highlights the top 5 defects per line to pinpoint key areas for quality improvement.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 36,
    title: "Line-wise Daily Production Report ",
    category: "RFID System Reports",
    image: "/Line-wise Daily Production Report.png",
    description: " This report provides a detailed daily production breakdown for a specific line. It tracks the flow of different styles from  cutting to packing, monitoring In/Out quantities and Work In Progress (WIP) at each stage.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 37,
    title: "Point Wise Report ( QC) ",
    category: "RFID System Reports",
    image: "/Point Wise Report ( QC).png",
    description: " This report provides a detailed hourly analysis of quality control inspections at a specific production checkpoint. It  tracks the types and quantities of defects found, calculates the DHU (Defects per Hundred Units) percentage, an summarizes the top defects, enabling real-time quality monitoring.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 38,
    title: "Point Wise Report (Non QC) ",
    category: "RFID System Reports",
    image: "/Point Wise Report (Non QC).png",
    description: "This report tracks materials scanned at a specific inward checkpoint and a breakdown of the hourly volume, essential for monitoring inventory flow.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 39,
    title: "Style size-wise production tracking detailed report ",
    category: "RFID System Reports",
    image: "/Style size-wise production tracking detailed report.png",
    description: "This report offers a detailed production reconciliation for a specific style, broken down by size. It compares the output at each stage—from cutting to shipping—against the original order quantity, highlighting any shortages or excesses to identify process losses",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 40,
    title: "Efficiency Report ",
    category: "RFID System Reports",
    image: "/Efficiency Report.png",
    description: "This report details the daily performance of each production line. It calculates the efficiency percentage based on production quantity, SMV, and manpower. A performance summary provides a consolidated overview of the unit's total output and average efficiency",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 41,
    title: "Style-wise Daily Production Report ",
    category: "RFID System Reports",
    image: "/Style-wise Daily Production Report.png",
    description: " This report summarizes the daily production flow on a style-by-style basis. It tracks quantities through each productionf stage (In/Out) and shows the current Work In Progress (WIP) for each style.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 42,
    title: "Operator Effective Time Report ",
    category: "ELIoT System Reports",
    image: "/Operator Effective Time Report.png",
    description: " This report tracks operator work hours, detailing their login/logout times. It clearly differentiates between 'Productive Time' and 'Non-Productive Time,' providing insights into attendance, work duration, and idle periods for each operator.",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 43,
    title: "AVG. EFFICIENCY REPORT - INDIVIDUAL OPERATOR ",
    category: "ELIoT System Reports",
    image: "/AVG. EFFICIENCY REPORT - INDIVIDUAL OPERATOR.png",
    description: " This report provides a detailed efficiency breakdown for each operator, listed by the specific operations they performed. It analyzes performance using metrics like production quantity and SMV to assess both individual operator  and specific operational effectiveness",
    tech: ["IoT", "Automation", "Industrial"],
  },
  {
    id: 44,
    title: "Operator DHU Report ",
    category: "ELIoT System Reports",
    image: "/Operator DHU Report.png",
    description: " This report ranks operators based on their quality performance, measured by their DHU (Defects per Hundred Units). It  helps identify which employees are producing the most defects, highlighting needs for training and quality improvement",
    tech: ["IoT", "Automation", "Industrial"],
  },
  

   
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const openImageModal = (project:any) => {
    setSelectedImage(project)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  return (
    <>
      <section
        id="dashboards"
        className="py-24 bg-white dark:bg-black relative overflow-hidden"
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 dark:from-gray-700/10 dark:to-gray-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-blue-600/10 dark:from-gray-800/10 dark:to-gray-700/10 rounded-full blur-3xl animate-pulse" />
          
          {/* Modern Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="modern-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#modern-grid)" className="text-primary dark:text-white"/>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern Header */}
          <div data-aos="fade-up" className="text-center mb-20">
            
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-600 dark:from-white dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
                Our Analytics & Reports
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our innovative solutions delivered to clients across various industries, 
              showcasing cutting-edge technology and engineering excellence.
            </p>
          </div>

          {/* Modern Filter Buttons */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
                    : "bg-white dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700 hover:bg-primary/5 dark:hover:bg-gray-700 hover:border-primary/30 dark:hover:border-gray-600 hover:text-primary dark:hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Modern Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 100} 
                className="group cursor-pointer"
                onClick={() => openImageModal(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-xl shadow-xl dark:shadow-2xl border border-slate-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-white/10">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 dark:from-gray-700/20 dark:to-gray-800/20 z-10" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Modern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-sm font-medium">Click to view</span>
                          <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-30">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-primary dark:text-white text-xs font-semibold rounded-full border border-primary/20 dark:border-gray-600/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 text-xs font-medium rounded-full border border-slate-200 dark:border-gray-600/50 hover:bg-primary/10 dark:hover:bg-gray-700/50 hover:border-primary/30 dark:hover:border-gray-500/30 hover:text-primary dark:hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 z-60 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal Content */}
          <div 
            className="max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 mb-3">
                  {selectedImage.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}