"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"
import { Building, GraduationCap, HeartHandshake, Rocket, ChevronDown, Sparkles } from "lucide-react"

const partnerCategories = [
  {
    id: "corporate",
    title: "Corporate Partners",
    icon: Building,
    color: "#0a7d89",
    partners: [
      {
        name: "Delight Group of Companies",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Strategic business partner supporting our initiatives across multiple sectors.",
      },
      {
        name: "Aviyanta Global Consults",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Providing consulting expertise for our international programs.",
      },
    ],
  },
  {
    id: "academic",
    title: "Academic Collaborators",
    icon: GraduationCap,
    color: "#02609E",
    partners: [
      {
        name: "ISO-certified Schools",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Network of quality educational institutions partnering on educational initiatives.",
      },
    ],
  },
  {
    id: "development",
    title: "Development Sector Allies",
    icon: HeartHandshake,
    color: "#013A87",
    partners: [
      {
        name: "100 Group",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Collaborative partner on community development and social impact projects.",
      },
      {
        name: "Language of Liberty Alliance",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Supporting our educational programs focused on leadership and civic engagement.",
      },
    ],
  },
  {
    id: "ecosystem",
    title: "Community & Startup Ecosystem Partners",
    icon: Rocket,
    color: "#017489",
    partners: [
      {
        name: "Drone Hub Nepal",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Technology partner specializing in drone applications for development.",
      },
      {
        name: "FountED",
        logo: "/placeholder.svg?height=80&width=200",
        description: "Educational innovation partner focused on accessible learning solutions.",
      },
    ],
  },
]

// Animated decorative elements
const FloatingParticle = ({ delay, duration, size, color, top, left, right }) => {
  return (
    <motion.div
      className={`absolute rounded-full z-0 opacity-0`}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        right: right,
        background: color,
      }}
      initial={{ opacity: 0, scale: 0, y: 0 }}
      animate={{
        opacity: [0, 0.7, 0],
        scale: [0, 1, 0.5],
        y: [-20, -100],
        x: [0, Math.random() * 50 - 25],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

const PartnersShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const titleControls = useAnimation()
  const particlesRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      titleControls.start("visible")
      if (!hasAnimated) {
        setTimeout(() => {
          setActiveCategory("corporate")
          setHasAnimated(true)
        }, 1500)
      }
    } else {
      controls.start("hidden")
      titleControls.start("hidden")
    }
  }, [isInView, controls, titleControls, hasAnimated])

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId)
  }

  // Generate particles
  const particles = []
  for (let i = 0; i < 15; i++) {
    particles.push({
      id: i,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
      size: 5 + Math.random() * 15,
      color: partnerCategories[i % partnerCategories.length].color + (Math.random() * 40 + 10).toFixed(0),
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
    })
  }

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#0a7d89]/10 to-[#02609E]/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#013A87]/10 to-[#017489]/5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="text-center mb-20"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="inline-block mb-3"
          >
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0a7d89]/10 to-[#02609E]/10 text-sm font-medium text-[#0a7d89] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                COLLABORATIVE EXCELLENCE
              </motion.span>
            </div>
          </motion.div>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Our Proud <span className="text-[#0a7d89]">Partners</span>
          </motion.h2>

          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: 96, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
            }}
            className="h-1 w-24 bg-gradient-to-r from-[#0a7d89] to-[#02609E] rounded-full mx-auto mb-6"
          ></motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg"
          >
            We collaborate with leading organizations across various sectors to create meaningful impact. Our
            partnerships are built on shared values and a commitment to positive change.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-4xl mx-auto"
        >
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mb-8"
            >
              <motion.div
                className={`flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCategory === category.id
                    ? "bg-white shadow-lg border-l-4"
                    : "bg-white/60 hover:bg-white hover:shadow-md border-l-4 border-transparent backdrop-blur-sm"
                }`}
                style={{
                  borderLeftColor: activeCategory === category.id ? category.color : "transparent",
                  boxShadow: activeCategory === category.id ? `0 10px 30px -15px ${category.color}40` : "",
                }}
                onClick={() => toggleCategory(category.id)}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <div className="flex items-center">
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5`}
                    style={{
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                    }}
                    animate={
                      activeCategory === category.id
                        ? {
                            scale: [1, 1.1, 1],
                            boxShadow: [`0 0 0 rgba(0,0,0,0)`, `0 0 20px ${category.color}60`, `0 0 0 rgba(0,0,0,0)`],
                          }
                        : {}
                    }
                    transition={
                      activeCategory === category.id
                        ? {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }
                        : {}
                    }
                  >
                    <category.icon className="w-7 h-7" style={{ color: category.color }} />
                  </motion.div>
                  <motion.h3
                    className={`text-xl font-semibold transition-all duration-300 ${
                      activeCategory === category.id ? "text-gray-900" : "text-gray-700"
                    }`}
                    animate={
                      activeCategory === category.id
                        ? {
                            scale: [1, 1.03, 1],
                            color: [category.color, "#333", category.color],
                          }
                        : {}
                    }
                    transition={
                      activeCategory === category.id
                        ? {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }
                        : {}
                    }
                  >
                    {category.title}
                  </motion.h3>
                </div>
                <motion.div
                  animate={
                    activeCategory === category.id
                      ? {
                          rotate: 180,
                          transition: { duration: 0.5 },
                        }
                      : {
                          rotate: 0,
                          transition: { duration: 0.5 },
                        }
                  }
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white rounded-2xl shadow-lg p-8 mt-3 border-t border-gray-100"
                      style={{ boxShadow: `0 20px 40px -20px ${category.color}30` }}
                    >
                      <div className="grid grid-cols-1 gap-8">
                        {category.partners.map((partner, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.15 }}
                            className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-200 relative overflow-hidden"
                            whileHover={{
                              y: -5,
                              boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)",
                              transition: { duration: 0.3 },
                            }}
                          >
                            {/* Animated background effect */}
                            <motion.div
                              className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-[#0a7d89]/5 to-transparent"
                              initial={{ opacity: 0, left: "-100%" }}
                              whileHover={{
                                opacity: 1,
                                left: "100%",
                                transition: { duration: 1.5, ease: "easeInOut" },
                              }}
                            />

                            <div className="w-full md:w-1/3 flex justify-center">
                              <motion.div
                                className="relative h-20 w-full max-w-[200px] bg-white p-4 rounded-lg shadow-sm"
                                whileHover={{
                                  scale: 1.05,
                                  boxShadow: "0 10px 25px -10px rgba(0,0,0,0.1)",
                                  transition: { duration: 0.3 },
                                }}
                              >
                                <Image
                                  src={partner.logo || "/placeholder.svg"}
                                  alt={partner.name}
                                  fill
                                  className="object-contain"
                                />
                              </motion.div>
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-left">
                              <motion.h4
                                className="text-xl font-semibold mb-2"
                                style={{
                                  background: `linear-gradient(90deg, ${category.color}, #333)`,
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                                whileHover={{ scale: 1.02 }}
                              >
                                {partner.name}
                              </motion.h4>
                              <motion.p
                                className="text-gray-600"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                              >
                                {partner.description}
                              </motion.p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Interested in partnering with us? We're always looking for organizations that share our vision of creating
            opportunities and empowering communities.
          </motion.p>
          <motion.a
            href="/contact"
            className="mt-8 inline-block px-10 py-4 bg-gradient-to-r from-[#0a7d89] to-[#02609E] text-white text-lg font-medium rounded-xl relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -10px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="relative z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              Become a Partner
            </motion.span>
            <motion.span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <motion.span
              className="absolute -inset-full top-0 block w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{ left: ["100%", "-100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersShowcase
