"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  const ref = useRef(null)

  const [scrollYProgress, setScrollYProgress] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [y, setY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const element = ref.current
      const elementTop = element.getBoundingClientRect().top
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(Math.max(0, -elementTop / (elementHeight - windowHeight)), 1)
      setScrollYProgress(progress)

      // Calculate opacity and y values
      setOpacity(1 - progress * 2) // Fade out faster (0.5 -> 0)
      setY(progress * 200) // 0 to 200px
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize values

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const words = "ABOUT US".split("")

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
       
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div style={{ opacity }} className="max-w-4xl">
          {/* Animated title */}
          <div className="overflow-hidden mb-6">
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-6xl md:text-8xl font-bold text-white flex">
                {words.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? <span>&nbsp;</span> : letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
          >
            WE EMPOWER YOUR GOALS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4"
          >
            <div className="h-1 w-20 bg-white rounded"></div>
            <div className="h-1 w-10 bg-white/50 rounded"></div>
            <div className="h-1 w-5 bg-white/30 rounded"></div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-40 h-40 border-2 border-white/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-10 w-20 h-20 border border-white/30"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Removed the bottom fade effect as requested */}
    </section>
  )
}
