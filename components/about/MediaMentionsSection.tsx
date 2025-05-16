"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function MediaMentionsSection() {
  const mediaMentions = [
    {
      title: "Harmony Rising: Unveiling Nepal's Path to Peace and Prosperity\"",
      publication: "Nepal Times",
      date: "March 15, 2023",
      excerpt:
        "Creating Opportunities International has launched a new initiative aimed at connecting young professionals with international career opportunities...",
      link: "https://www.tilottamacitynews.com/2022-07-31-083611",
      logo: "/placeholder.svg?height=110&width=170",
    },
    {
      title: "Hunger walk draws attention to climate change, food insecurity",
      publication: "Kathmandu Post",
      date: "January 10, 2023",
      excerpt:
        "Creating Opportunities International has been recognized for its significant impact in creating educational and career pathways for Nepali youth...",
      link: "https://nepalsamaya.com/lumbini/2022-07-24-171007",
      logo: "/placeholder.svg?height=110&width=170",
    },
    {
      title: "Project Shikshya by RONB & 100's Group, Sower Action Nepal, HK & Creating Opportunity.",
      publication: "Business Nepal",
      date: "November 5, 2022",
      excerpt:
        "In an exclusive interview, the CEO of Creating Opportunities International discusses the organization's vision, achievements, and future plans...",
      link: "https://www.facebook.com/photo/?fbid=651328333695733&set=a.614071344088099",
      logo: "/placeholder.svg?height=110&width=170",
    },
    {
      title: "Entrance exam for +2 Scholarship by RONB & 100's Group",
      publication: "Global Development News",
      date: "September 20, 2022",
      excerpt:
        "Creating Opportunities International has been awarded the prestigious Social Impact Award for its innovative approach to opportunity creation and access...",
      link: "https://www.facebook.com/photo/?fbid=833137454871613&set=a.730927318425961",
      logo: "/placeholder.svg?height=110&width=170",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>

      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="absolute top-20 left-10 w-16 h-16 border border-primary/20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-accent/20 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">In The News</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#121d3e] mb-4"
          >
            Media Mentions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto"
          >
            News and articles featuring Creating Opportunities International and our impact across communities.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {mediaMentions.map((mention, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="p-6">
                      <div className="flex items-start gap-5">
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-white p-2 shadow-sm">
                          <Image
                            src={mention.logo || "/placeholder.svg"}
                            alt={mention.publication}
                            width={170}
                            height={110}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Calendar size={14} className="mr-1 text-primary/70" />
                              {mention.date}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <span className="text-sm font-medium text-accent">{mention.publication}</span>
                          </div>

                          <h3 className="font-bold text-lg text-[#121d3e] mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                            {mention.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{mention.excerpt}</p>

                          <a
                            href={mention.link}
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Full Article
                            <ArrowRight
                              size={14}
                              className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            View All Media Coverage
            <ArrowRight size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
