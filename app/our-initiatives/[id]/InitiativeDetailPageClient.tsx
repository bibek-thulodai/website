"use client"

import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  MapPin,
  Target,
  Users2,
  BarChart3,
  Building,
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function InitiativeDetailPageClient({ initiative }: { initiative: any }) {
  if (!initiative) {
    return null // fallback UI or error
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#121d3e] text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-r from-[#0a7d89]/30 to-[#0a7d89]/10 blur-xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-gradient-to-l from-[#0a7d89]/20 to-[#0a7d89]/5 blur-xl"></div>
          <div className="absolute top-[40%] right-[20%] w-24 h-24 rounded-full bg-gradient-to-b from-[#0a7d89]/20 to-transparent blur-lg"></div>

          {/* Mesh Grid */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <Link
            href="/our-initiatives"
            className="inline-flex items-center text-[#0a7d89]/90 hover:text-[#0a7d89] mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Initiatives
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0a7d89]/20 text-[#0a7d89] text-sm font-medium mb-4">
                {initiative.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
                {initiative.title}
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#0a7d89]"></span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-xl">{initiative.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-none flex items-center gap-1 px-3 py-1"
                >
                  <Globe className="h-3.5 w-3.5" /> {initiative.location}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-none flex items-center gap-1 px-3 py-1"
                >
                  <Clock className="h-3.5 w-3.5" /> {initiative.frequency}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-none flex items-center gap-1 px-3 py-1"
                >
                  <Building className="h-3.5 w-3.5" /> {initiative.format}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-[#0a7d89] hover:bg-[#0a7d89]/90 text-white"
                  onClick={() => {
                    const contactSection = document.getElementById("get-involved")
                    contactSection?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get Involved
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0a7d89]/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0a7d89]/20 rounded-lg"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={initiative.featuredImage || "/placeholder.svg?height=600&width=1200"}
                  alt={initiative.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatedSection animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <Building className="h-6 w-6 mr-3 text-[#0a7d89]" />
                  About the Initiative
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{initiative.fullDescription}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <Target className="h-6 w-6 mr-3 text-[#0a7d89]" />
                  Objectives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {initiative.objectives.map((objective: string, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0a7d89]">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#0a7d89]/10 text-[#0a7d89] font-bold mr-3">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-3 text-[#0a7d89]" />
                  Key Achievements
                </h2>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <ul className="space-y-4">
                    {initiative.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#0a7d89] text-white text-xs mr-3 mt-0.5">
                          ✓
                        </div>
                        <p className="text-gray-700">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Conditional Sections based on initiative type */}
            {initiative.hasTabs && initiative.editions && (
              <AnimatedSection animation="fadeIn">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Past Editions</h2>
                  <Tabs defaultValue={initiative.editions[0].id} className="w-full">
                    <TabsList className="grid grid-cols-2 mb-6 w-full max-w-md">
                      {initiative.editions.map((edition: any) => (
                        <TabsTrigger key={edition.id} value={edition.id} className="text-sm">
                          {edition.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {initiative.editions.map((edition: any) => (
                      <TabsContent key={edition.id} value={edition.id} className="mt-0">
                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                          <div className="p-6 border-b border-gray-200 bg-gray-50">
                            <h3 className="text-xl font-bold text-gray-800">{edition.title}</h3>
                            <p className="text-gray-600">{edition.date}</p>
                          </div>

                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div>
                                {edition.speakers && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Featured Speakers</h4>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                      {edition.speakers.map((speaker: string, index: number) => (
                                        <li key={index}>{speaker}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {edition.topics && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Key Topics</h4>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                      {edition.topics.map((topic: string, index: number) => (
                                        <li key={index}>{topic}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {edition.locations && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Locations</h4>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                      {edition.locations.map((location: string, index: number) => (
                                        <li key={index}>{location}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {edition.skills && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Skills Covered</h4>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                      {edition.skills.map((skill: string, index: number) => (
                                        <li key={index}>{skill}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <div className="mb-6">
                                  <h4 className="font-semibold text-[#0a7d89] mb-2">Highlights</h4>
                                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    {edition.highlights.map((highlight: string, index: number) => (
                                      <li key={index}>{highlight}</li>
                                    ))}
                                  </ul>
                                </div>

                                {edition.fellows && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Fellows</h4>
                                    <p className="text-gray-700">{edition.fellows}</p>
                                  </div>
                                )}

                                {edition.mentors && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Mentors</h4>
                                    <p className="text-gray-700">{edition.mentors}</p>
                                  </div>
                                )}

                                {edition.projects && (
                                  <div className="mb-6">
                                    <h4 className="font-semibold text-[#0a7d89] mb-2">Projects</h4>
                                    <p className="text-gray-700">{edition.projects}</p>
                                  </div>
                                )}

                                <div>
                                  <h4 className="font-semibold text-[#0a7d89] mb-2">Participants</h4>
                                  <p className="text-gray-700">{edition.participants}</p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                {edition.gallery.map((image: string, index: number) => (
                                  <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                                    <Image
                                      src={image || "/placeholder.svg"}
                                      alt={`${initiative.title} ${edition.title} image ${index + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </AnimatedSection>
            )}

            {initiative.bootcampModules && (
              <AnimatedSection animation="fadeIn">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Bootcamp Modules</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {initiative.bootcampModules.map((module: any, index: number) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="h-2 bg-[#0a7d89]"></div>
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                          <p className="text-gray-600">{module.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {initiative.conclaveComponents && (
              <AnimatedSection animation="fadeIn">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Conclave Components</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initiative.conclaveComponents.map((component: any, index: number) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="h-2 bg-[#0a7d89]"></div>
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-bold mb-2">{component.title}</h3>
                          <p className="text-gray-600">{component.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {initiative.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${initiative.title} image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {initiative.testimonials?.map((testimonial: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl relative">
                      <div className="absolute top-4 right-4 text-4xl text-[#0a7d89]/20">"</div>
                      <p className="text-gray-700 mb-4 italic relative z-10">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-[#0a7d89]/20 flex items-center justify-center text-[#0a7d89] font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-800">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeLeft">
              <div className="bg-[#0a7d89]/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-[#0a7d89]" /> Impact
                </h3>
                <p className="text-gray-700">{initiative.impact}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <div className="bg-[#0a7d89]/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Users2 className="h-5 w-5 mr-2 text-[#0a7d89]" /> Partners
                </h3>
                <p className="text-gray-700">{initiative.partners}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <div className="border border-[#0a7d89]/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Upcoming Events</h3>
                <div className="space-y-4">
                  {initiative.upcomingEvents?.map((event: any, index: number) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-[#0a7d89]">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      <div className="mt-2">
                        <Badge className={event.registration === "Open" ? "bg-green-500" : "bg-amber-500"}>
                          {event.registration}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeLeft">
              <div
                id="get-involved"
                className="bg-gradient-to-br from-[#121d3e] to-[#0a7d89] p-6 rounded-xl text-white"
              >
                <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                <p className="mb-6">
                  Interested in participating in or supporting this initiative? Contact us to learn about upcoming
                  opportunities.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-white text-[#0a7d89] hover:bg-white/90">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/20">
                    <Link href="/opportunities">View Opportunities</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
