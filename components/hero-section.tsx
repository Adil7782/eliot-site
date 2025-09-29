"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Cpu,
  Factory,
  TrendingUp,
  Activity,
  Database,
  Cloud,
  Server,UserCheck,
  Rocket,
  Lightbulb
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// Client-side only component for real-time data
const RealTimeStats = () => {
  const [currentStats, setCurrentStats] = useState({
    productionRate: 1247,
    efficiency: 94.2,
    activeSensors: 156,
    dataPoints: 12543,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats((prev) => ({
        productionRate:
          prev.productionRate + Math.floor(Math.random() * 10 - 5),
        efficiency: Math.max(
          85,
          Math.min(99, prev.efficiency + (Math.random() - 0.5))
        ),
        activeSensors: prev.activeSensors,
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 100),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div className="grid grid-cols-2 gap-4 mb-6"></div>;
};

const Hero: React.FC = () => {


  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950 transition-colors duration-300 overflow-hidden">
      {/* Static Grid Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="h-full w-full bg-grid-pattern bg-[size:50px_50px]"></div>
      </div>

      {/* Floating geometric elements with AOS */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-blue-300 dark:border-blue-600 rounded-full animate-pulse"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 border border-indigo-300 dark:border-indigo-600 rotate-45 animate-spin-slow"
          data-aos="zoom-in"
          data-aos-delay="400"
        ></div>
        <div
          className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-60 animate-bounce"
          data-aos="zoom-in"
          data-aos-delay="600"
        ></div>

        {/* Animated floating elements */}
        <div
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-400 rounded-full opacity-70 animate-float"
          data-aos="fade-down"
          data-aos-delay="800"
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-purple-400 rounded-lg opacity-50 animate-float-reverse"
          data-aos="fade-up"
          data-aos-delay="1000"
        ></div>
      </div>

     

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Zap className="h-4 w-4 mr-2" />
                Industry 4.0 Ready
              </div>

              <h1
                className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                ELI<span className="text-blue-600 dark:text-blue-400">o</span>T
              </h1>

              <h2
                className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Smart IoT for Modern Factories
              </h2>

              <p
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Transform your garment factory with{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  real-time production tracking
                </span>
                , efficiency monitoring, and  analytics.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a href="#about">
              <div className=""><button className="group flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button></div>
              </a>
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-semibold transition-all duration-200">
                <span>Watch Demo</span>
                {  (
                  <div className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </button>
            </div>

            {/* Feature Pills */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-transform duration-200">
                <BarChart3 className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Real-time Analytics
                </span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-transform duration-200">
                <UserCheck className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Enhanced Operator Engagement 
                </span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-transform duration-200">
                <Rocket className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Boosts Performance
                </span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-transform duration-200">
                <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                 Improved Decision-Making 
                </span>
              </div>
            </div>

            {/* Real-time Stats */}
            <div data-aos="fade-up" data-aos-delay="800">
              {true ? (
                <RealTimeStats />
              ) : (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                    <Factory className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      1,247
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Units/Hour
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400 mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      94.2%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Efficiency
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Placeholder for Image */}
          <div className="relative">
            <div
              className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700 min-h-[400px] flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="250"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    View production details from our portals <span className="text-blue-600">REAL TIME</span>
                  </CardItem>
                 
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src="/rfid-portal.png"
                      alt="ELIoT RFID Portal Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover pt-2 transition-transform duration-300 hover:scale-105"
                      priority
                    />

                    
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    
                  </div>
                </CardBody>
              </CardContainer>
              {/* Image container */}

              {/* Floating indicators with AOS */}
              <div
                className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="800"
              ></div>
              <div
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="1000"
              ></div>
              <div
                className="absolute -top-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="1200"
              ></div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Bottom Statistics with AOS */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Lines Connected", delay: 200 },
            { value: "99.9%", label: "Uptime Guaranteed", delay: 400 },
            { value: "24/7", label: "Alerting System  ", delay: 600 },
            { value: "<50ms", label: "Response Time", delay: 800 },
          ].map((stat, index) => (
            <div
              key={index}
              className="space-y-2 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={stat.delay}
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200 font-mono">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add these styles to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(20px) rotate(45deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
