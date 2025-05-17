"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, CheckCircle2, ArrowRight, Leaf, Utensils, Globe, Award, Users, Scale, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/components/projects/projects-data"
import { AnimatedSection } from "@/components/ui/animated-section"

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Utensils,
  Globe,
  Award,
  Users,
  Scale,
  Target,
}

export default function ProjectDetailPageClient({ project }: { project: (typeof projects)[0] }) {
  // Find related projects (same category, excluding current project)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 2)

  // If we don't have enough related projects in the same category, add some from other categories
  if (relatedProjects.length < 2) {
    const otherProjects = projects
      .filter((p) => p.category !== project.category && p.id !== project.id)
      .slice(0, 2 - relatedProjects.length)
    relatedProjects.push(...otherProjects)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#121d3e] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#121d3e] to-transparent"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#0a7d89]/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#0a7d89]/5 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/partnership-projects"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Projects
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90 text-white px-3 py-1">{project.category}</Badge>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" /> {project.year}
              </span>
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> {project.location}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatedSection animation="fade-up">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Project</h2>
                <p className="text-gray-700">{project.fullDescription}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} image ${index + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.objectives.map((objective, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#0a7d89]">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a7d89]/10 text-[#0a7d89]">
                            {index + 1}
                          </div>
                        </div>
                        <p className="text-gray-700">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h2>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <ul className="space-y-4">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[#0a7d89] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {relatedProjects.length > 0 && (
              <AnimatedSection animation="fade-up" delay={0.4}>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedProjects.map((relatedProject) => {
                      const IconComponent = iconMap[relatedProject.icon];
                      return (
                        <Link key={relatedProject.id} href={`/partnership-projects/${relatedProject.id}`}>
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-gray-200 hover:border-[#0a7d89]">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{relatedProject.category}</Badge>
                                {IconComponent && (
                                  <IconComponent className="h-8 w-8 text-[#0a7d89]" />
                                )}
                              </div>
                              <h3 className="text-lg font-bold mb-2">{relatedProject.title}</h3>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                              <div className="flex items-center text-[#0a7d89] text-sm font-medium">
                                View Project <ArrowRight className="ml-1 h-4 w-4" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-in">
              <div className="bg-[#0a7d89]/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Impact</h3>
                <p className="text-gray-700">{project.impact}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={0.1}>
              <div className="bg-[#0a7d89]/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Partners</h3>
                <p className="text-gray-700">{project.partners}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={0.2}>
              <div className="border border-dashed border-[#0a7d89]/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Involved</h3>
                <p className="text-gray-700 mb-6">
                  Interested in supporting or participating in this project? Contact our partnerships team for more
                  information.
                </p>
                <Button asChild className="w-full bg-[#0a7d89] hover:bg-[#0a7d89]/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={0.3}>
              <div className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Share This Project</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    LinkedIn
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
