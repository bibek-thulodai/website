"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OpportunitiesHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#013A87] to-[#017489]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-white/10 blur-3xl"
        ></motion.div>
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-white/10 blur-3xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ opacity, scale, y }} className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Discover Life-Changing Opportunities</h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Explore a world of possibilities with our curated selection of jobs, internships, scholarships, and more to
            advance your career and personal growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#013A87] hover:bg-white/90 hover:text-[#013A87] text-lg px-8">
              Browse Opportunities
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8">
              Post an Opportunity
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="h-10 w-10 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
