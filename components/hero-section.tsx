"use client"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundColor?: string
}

export default function HeroSection({ title, subtitle, backgroundColor = "#121d3e" }: HeroSectionProps) {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor }}>
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Animated mesh grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), 
                           radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#0a7d89] via-purple-500 to-[#0a7d89] opacity-75 blur"></div>
            <div className="relative px-6 py-2 rounded-lg bg-[#121d3e] border border-white/10">
              <span className="text-white/90 font-medium tracking-wider text-sm">CREATING LASTING IMPACT</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          <span className="relative">
            {title}
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0a7d89] to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0a7d89] to-[#0a7d89]/80 text-white font-medium transition-all hover:shadow-lg hover:shadow-[#0a7d89]/20 hover:-translate-y-1"
          >
            Explore Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-light mb-2">Scroll to discover</span>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/20"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/20"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/20"></div>
    </div>
  )
}
