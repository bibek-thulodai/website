import type { Metadata } from "next"
import ProjectsList from "@/components/projects/projects-list"
import HeroSection from "@/components/hero-section"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Partnership Projects & Events",
  description:
    "Environmental conservation campaigns and leadership initiatives in partnership with schools, local governments, and youth groups.",
}

export default function PartnershipProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection animation="fade-in">
        <HeroSection
          title="Partnership Projects & Events"
          subtitle="Environmental conservation campaigns and leadership initiatives in partnership with schools, local governments, and youth groups."
          backgroundColor="#121d3e"
        />
      </AnimatedSection>

      {/* About Our Partnerships Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
              About Our <span className="text-[#0a7d89]">Partnerships</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">
              Our partnership initiatives bring together diverse stakeholders to address pressing global challenges.
              Through collaborative efforts with schools, local governments, youth groups, and international
              organizations, we create sustainable solutions that drive meaningful change.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">
              Each partnership is built on shared values, mutual respect, and a commitment to creating positive impact.
              We leverage the unique strengths and resources of our partners to implement innovative projects that
              address environmental conservation, social welfare, leadership development, and good governance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#0a7d89]">
                <h4 className="font-bold text-gray-800 mb-2">Our Approach</h4>
                <p className="text-gray-600">Collaborative, inclusive, and impact-driven</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#0a7d89]">
                <h4 className="font-bold text-gray-800 mb-2">Our Focus</h4>
                <p className="text-gray-600">Sustainability, empowerment, and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-[#0a7d89]">Projects & Events</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of partnership initiatives that are making a difference across communities
            worldwide. Click on any project to learn more about its impact and implementation.
          </p>
        </div>
        <ProjectsList />
      </div>
    </div>
  )
}
