"use client"

import { useEffect, useState } from "react"
import './neon-orbs.css'

interface NeonOrbsProps {
  title?: string
  subtitle?: string
  className?: string
}

export function NeonOrbs({ 
  title = "BEYOND LIMITS",
  subtitle = "THE FUTURE IS NOW",
  className = ""
}: NeonOrbsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-[#141414] transition-colors duration-500 ${className}`}>
      {/* Top-left orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
        style={{
          top: "-40%",
          left: "-20%",
          width: "80vw",
          height: "80vw",
          maxWidth: "800px",
          maxHeight: "800px",
        }}
      >
        <div className="w-full h-full rounded-full relative neon-orb-light transition-all duration-500">
          <div className="neon-beam-container neon-beam-spin-8">
            <div className="neon-beam-light" />
          </div>
        </div>
      </div>

      {/* Bottom-center orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          bottom: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100vw",
          maxWidth: "1000px",
          maxHeight: "1000px",
        }}
      >
        <div className="w-full h-full rounded-full relative neon-orb-light transition-all duration-500">
          <div className="neon-beam-container neon-beam-spin-10-reverse">
            <div className="neon-beam-light" />
          </div>
        </div>
      </div>

      {/* Top-right orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out delay-500 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{
          top: "-30%",
          right: "-25%",
          width: "70vw",
          height: "70vw",
          maxWidth: "700px",
          maxHeight: "700px",
        }}
      >
        <div className="w-full h-full rounded-full relative neon-orb-light transition-all duration-500">
          <div className="neon-beam-container neon-beam-spin-6">
            <div className="neon-beam-light" />
          </div>
        </div>
      </div>

      {/* Bottom-right orb */}
      <div
        className={`absolute transition-all duration-1000 ease-out delay-700 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          bottom: "-35%",
          right: "-15%",
          width: "75vw",
          height: "75vw",
          maxWidth: "750px",
          maxHeight: "750px",
        }}
      >
        <div className="w-full h-full rounded-full relative neon-orb-light transition-all duration-500">
          <div className="neon-beam-container neon-beam-spin-7-reverse">
            <div className="neon-beam-light" />
          </div>
        </div>
      </div>

      {/* Center text */}
      <div className="relative z-10 text-center text-purple-900 dark:text-white transition-colors duration-500">
        <h1 
          className={`text-4xl md:text-7xl font-extralight tracking-[0.2em] mb-4 transition-all duration-1000 ease-out ${
            mounted 
              ? "opacity-100 translate-y-0 blur-0" 
              : "opacity-0 translate-y-8 blur-sm"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {title.split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${800 + i * 50}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p 
          className={`text-lg md:text-xl font-light tracking-widest text-purple-400/60 dark:text-white/60 transition-all duration-1000 ease-out ${
            mounted 
              ? "opacity-100 translate-y-0 blur-0" 
              : "opacity-0 translate-y-4 blur-sm"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

