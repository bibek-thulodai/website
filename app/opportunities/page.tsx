"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, Users, BookOpen, Lightbulb } from "lucide-react"
import OpportunitiesHero from "@/components/opportunities/OpportunitiesHero"
import OpportunityCard from "@/components/opportunities/OpportunityCard"
import RegisterModal from "@/components/opportunities/RegisterModal"
import PostOpportunityForm from "@/components/opportunities/PostOpportunityForm"
import SectionHeading from "@/components/shared/SectionHeading"

export default function OpportunitiesPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)

  const handleOpenRegisterModal = (opportunity) => {
    setSelectedOpportunity(opportunity)
    setIsRegisterModalOpen(true)
  }

  // Sample opportunities data
  const opportunities = {
    jobs: [
      {
        id: "job1",
        title: "Project Coordinator",
        organization: "Creating Opportunities International",
        location: "Kathmandu, Nepal",
        deadline: "June 30, 2023",
        description:
          "We are looking for a Project Coordinator to oversee our educational initiatives in rural communities.",
        tags: ["Full-time", "Education", "Project Management"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "job2",
        title: "Communications Specialist",
        organization: "Global Youth Network",
        location: "Remote",
        deadline: "July 15, 2023",
        description: "Join our team to develop and implement communication strategies for youth empowerment programs.",
        tags: ["Full-time", "Communications", "Social Media"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "job3",
        title: "Program Manager",
        organization: "Education First Foundation",
        location: "Pokhara, Nepal",
        deadline: "July 5, 2023",
        description: "Manage educational programs aimed at providing quality education to underprivileged children.",
        tags: ["Full-time", "Education", "Management"],
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    internships: [
      {
        id: "intern1",
        title: "Research Intern",
        organization: "Creating Opportunities International",
        location: "Kathmandu, Nepal",
        deadline: "June 25, 2023",
        description: "Assist in researching educational opportunities and preparing reports for our global database.",
        tags: ["3 months", "Research", "Education"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "intern2",
        title: "Marketing Intern",
        organization: "Youth Development Center",
        location: "Remote",
        deadline: "July 10, 2023",
        description: "Help develop marketing materials and social media content for youth programs.",
        tags: ["6 months", "Marketing", "Social Media"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "intern3",
        title: "Program Development Intern",
        organization: "Global Education Initiative",
        location: "Hybrid",
        deadline: "July 20, 2023",
        description: "Assist in developing educational programs and curriculum for international students.",
        tags: ["4 months", "Education", "Curriculum Development"],
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    scholarships: [
      {
        id: "scholar1",
        title: "Global Leadership Scholarship",
        organization: "Creating Opportunities International",
        location: "Multiple Countries",
        deadline: "August 15, 2023",
        description:
          "Full scholarship for undergraduate studies in fields related to sustainable development and leadership.",
        tags: ["Undergraduate", "Leadership", "Full Funding"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "scholar2",
        title: "Women in STEM Scholarship",
        organization: "Tech for Change Foundation",
        location: "United States",
        deadline: "September 1, 2023",
        description: "Scholarship for women pursuing degrees in Science, Technology, Engineering, and Mathematics.",
        tags: ["Graduate", "STEM", "Women"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "scholar3",
        title: "Community Development Fellowship",
        organization: "Social Impact Network",
        location: "South Asia",
        deadline: "July 30, 2023",
        description: "Scholarship for students interested in community development and social entrepreneurship.",
        tags: ["Undergraduate", "Social Impact", "Partial Funding"],
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    competitions: [
      {
        id: "comp1",
        title: "Youth Innovation Challenge",
        organization: "Creating Opportunities International",
        location: "Global",
        deadline: "August 10, 2023",
        description: "Submit innovative solutions to address educational challenges in underserved communities.",
        tags: ["Innovation", "Education", "Cash Prize"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "comp2",
        title: "Social Entrepreneurship Competition",
        organization: "Impact Ventures",
        location: "Asia Pacific",
        deadline: "September 5, 2023",
        description: "Pitch your social enterprise idea for a chance to win funding and mentorship.",
        tags: ["Entrepreneurship", "Social Impact", "Mentorship"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "comp3",
        title: "Climate Action Hackathon",
        organization: "Green Future Alliance",
        location: "Virtual",
        deadline: "July 25, 2023",
        description: "Develop technological solutions to address climate change challenges.",
        tags: ["Technology", "Climate", "Teamwork"],
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    fellowships: [
      {
        id: "fellow1",
        title: "Youth Leadership Fellowship",
        organization: "Creating Opportunities International",
        location: "Nepal",
        deadline: "August 20, 2023",
        description: "One-year fellowship program for emerging leaders committed to community development.",
        tags: ["Leadership", "Community Development", "1 Year"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "fellow2",
        title: "Global Education Fellowship",
        organization: "Education Without Borders",
        location: "Multiple Countries",
        deadline: "September 10, 2023",
        description: "Fellowship for educators interested in implementing innovative teaching methodologies.",
        tags: ["Education", "Innovation", "2 Years"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "fellow3",
        title: "Digital Rights Fellowship",
        organization: "Internet Freedom Foundation",
        location: "Remote",
        deadline: "July 30, 2023",
        description: "Fellowship for advocates working on digital rights and internet freedom issues.",
        tags: ["Digital Rights", "Advocacy", "6 Months"],
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
    workshops: [
      {
        id: "workshop1",
        title: "Career Development Workshop",
        organization: "Creating Opportunities International",
        location: "Kathmandu, Nepal",
        deadline: "June 28, 2023",
        description: "Two-day workshop on resume building, interview skills, and career planning.",
        tags: ["Career", "Skills Development", "2 Days"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "workshop2",
        title: "Grant Writing Masterclass",
        organization: "Funding Access Network",
        location: "Virtual",
        deadline: "July 15, 2023",
        description: "Learn effective grant writing techniques from experienced professionals.",
        tags: ["Fundraising", "Writing", "1 Day"],
        logo: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "workshop3",
        title: "Digital Marketing for NGOs",
        organization: "Social Media for Change",
        location: "Pokhara, Nepal",
        deadline: "July 5, 2023",
        description: "Workshop on leveraging digital marketing strategies for non-profit organizations.",
        tags: ["Digital Marketing", "NGOs", "3 Days"],
        logo: "/placeholder.svg?height=60&width=60",
      },
    ],
  }

  const tabIcons = {
    jobs: <Briefcase className="h-4 w-4 mr-2" />,
    internships: <GraduationCap className="h-4 w-4 mr-2" />,
    scholarships: <Award className="h-4 w-4 mr-2" />,
    competitions: <Users className="h-4 w-4 mr-2" />,
    fellowships: <BookOpen className="h-4 w-4 mr-2" />,
    workshops: <Lightbulb className="h-4 w-4 mr-2" />,
  }

  return (
    <main className="min-h-screen">
      <OpportunitiesHero />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Explore Opportunities"
            subtitle="Discover a wide range of opportunities to advance your education, career, and personal growth"
            alignment="center"
          />

          <Tabs defaultValue="jobs" className="max-w-6xl mx-auto">
            <TabsList className="mb-8 w-full flex flex-wrap justify-center bg-transparent">
              {Object.keys(opportunities).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-3 rounded-full m-1"
                >
                  {tabIcons[category]}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700">
                    {opportunities[category].length}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(opportunities).map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities[category].map((opportunity) => (
                    <OpportunityCard
                      key={opportunity.id}
                      opportunity={opportunity}
                      onApply={() => handleOpenRegisterModal(opportunity)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Post Opportunity Form */}
      <PostOpportunityForm />

      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          opportunity={selectedOpportunity}
        />
      )}
    </main>
  )
}
