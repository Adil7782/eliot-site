"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, ArrowUpRight, Sparkles, X } from "lucide-react"

export default function DashboardsSection() {
  const [activeFilter, setActiveFilter] = useState("Sections")
  const [selectedImage, setSelectedImage] = useState<{
  id: string
  title: string
  category: string
  image: string
  description: string
  tech: string[]
} | null>(null)

  const filters = ["All","Sections","QC Points" ,"Floor"]

  const projects = [
    {
      id: 1,
      title: "Cutting section",
      category: "Sections",
      image: "/cutting-in.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
      {
      id: 11,
      title: "Front section - IN",
      category: "Sections",
      image: "/front-in.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
     {
      id: 13,
      title: "Front section - QC",
      category: "QC Points",
      image: "/front-qc.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
  
    {
      id: 12,
      title: "Back section - IN",
      category: "Sections",
      image: "/back-in.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
   
    {
      id: 14,
      title: "Back section - QC",
      category: "QC Points",
      image: "/back-qc.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 15,
      title: "Product Assembly Section",
      category: "Sections",
      image: "/product-assembly.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 16,
      title: "Assembly QC",
      category: "QC Points",
      image: "/assembly-qc.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 17,
      title: "Finishing section",
      category: "Sections",
      image: "/finishing-section.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 18,
      title: "Sewing Line",
      category: "Floor",
      image: "/sewing-line.png",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 19,
      title: "Sewing Line",
      category: "Floor",
      image: "/floor-2.jpg",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
   
    {
      id: 20,
      title: "Sewing Line",
      category: "Floor",
      image: "/floor-3.jpg",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 21,
      title: "Sewing Line",
      category: "Floor",
      image: "/floor-4.jpg",
      description: "Advanced automated printing solution with IoT integration",
      tech: ["IoT", "Automation", "Industrial"],
    },
    {
      id: 22,
      title: "Sewing Line",
      category: "Floor",
      image: "/floor-5.jpg",
      description: "Advanced automated printing solution with IoT integration",
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
        id="journey"
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
                Our Journey
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