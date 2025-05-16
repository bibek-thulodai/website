import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Prajwal Bhattarai",
      position: "Senior Strategic Advisor & CEO",
      image: "/assets/prajwal.jpeg",
      social: {
        facebook: "https://www.facebook.com/prajwal7bhattarai",
        twitter: "https://x.com/AcademicPrajwal?fbclid=IwAR0Qm_GYpYHS1KohRUWH_lo31I46S326Zv-JxHTCgyiaPXLjX4ACdKsz4Ms",
        linkedin: "https://www.linkedin.com/in/prajwalbhattarai7/",
      },
    },
    {
      name: "Sujit k. Chaudhary",
      position: "CEO & Managing Director",
      image: "/assets/sujit.jpg",
      social: {
        facebook: "https://www.facebook.com/sujit.chaudhary.14661",
        twitter:
          "https://x.com/AcademicPrajwal?fbclid=IwY2xjawKDuwdleHRuA2FlbQIxMABicmlkETE3TjFjQkVYTmtKVnRYUkd6AR7Wy-Z8-ocoRuJmoN1qMJEPnUStLvhxxYrsC2iGNJlgWnJe5xMyI8M1g1oh3g_aem_-b4W89uu3Biad0fxnRMeDg",
        linkedin: "https://www.linkedin.com/in/prajwalbhattarai7/",
      },
    },
    {
      name: "Prasanna Dhungel",
      position: "Head of IT",
      image: "/assets/prassanna.jpg",
      social: {
        facebook: "https://www.facebook.com/prasanna.dhungel.5",
        twitter: "https://x.com/PrasannaDhungel",
        linkedin: "https://www.linkedin.com/in/prasanna-dhungel-923285178/",
      },
    },
    {
      name: "Bibek Yonzon",
      position: "Legal Counselors",
      image: "/assets/bibek.jpg",
      social: {
        facebook: "https://www.facebook.com/bibek.yonzon.2025",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/bibek-yonjan-25ab021a7/",
      },
    },
    {
      name: "Ashmit Kumar Jha",
      position: "Research Officer / Program Coordinator",
      image: "/assets/assmit.jpg",
      social: {
        facebook: "https://www.facebook.com/ashmitayushjha",
        twitter: "https://x.com/jha_ashmit",
        linkedin: "https://www.linkedin.com/in/ashmit-kr-jha-aayush-a16385259/",
      },
    },
    {
      name: "Ritika Shah",
      position: "Communication Officer",
      image: "/assets/ritika.jpg",
      social: {
        facebook: "https://www.facebook.com/ritikaxshah",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Aayush Chaudhary",
      position: "Program Coordinator",
      image: "/assets/aayush.jpg",
      social: {
        facebook: "https://www.facebook.com/zen.ith.5623",
        twitter:
          "https://x.com/aayush001?fbclid=IwY2xjawKDvY9leHRuA2FlbQIxMABicmlkETE3TjFjQkVYTmtKVnRYUkd6AR7NCy0yQv8O1fLbkzjvHEujJvIaKVs6MljQCjXb7Va5SliAiYlVJMnyv45lJg_aem_bdFeWgApvgBcOlFHuKgdew",
        linkedin: "https://www.linkedin.com/in/aayush-chaudhary-7b5959213/",
      },
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"></div>

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-pulse-slow"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <span className="flex items-center">
              <Users size={14} className="mr-1" />
              Our Leadership
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#121d3e] mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Meet the dedicated professionals who work tirelessly to create opportunities and transform lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Social icons overlay */}
                  <div className="absolute inset-0 z-20 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="p-4 w-full flex justify-center space-x-3 mb-4">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white p-2.5 rounded-full transition-colors duration-300 transform hover:scale-110"
                        aria-label={`${member.name}'s Facebook`}
                      >
                        <Facebook size={16} className="text-primary" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white p-2.5 rounded-full transition-colors duration-300 transform hover:scale-110"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter size={16} className="text-primary" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white p-2.5 rounded-full transition-colors duration-300 transform hover:scale-110"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={16} className="text-primary" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center bg-white relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>

                  <h3 className="font-bold text-lg text-[#121d3e] mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#0e9aa7] font-medium mb-0">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join our team button */}
        <div className="mt-16 text-center">
          <Button
            asChild
            className="bg-white border border-primary/20 text-primary hover:bg-primary/5 shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <Link href="/contact" className="px-8 py-2.5 flex items-center">
              <span>Join Our Team</span>
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
