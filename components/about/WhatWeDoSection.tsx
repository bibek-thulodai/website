import { Users, Leaf, Lightbulb, Globe, Compass, Handshake } from "lucide-react"

export default function WhatWeDoSection() {
  const items = [
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Community Projects",
      desc: "Designing and implementing initiatives that address local needs with global relevance.",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Youth Empowerment Events",
      desc: "Bootcamps, summits and training programs to unlock leadership and skills.",
      color: "from-green-600/10 to-green-600/5",
    },
    {
      icon: <Compass className="w-8 h-8 text-accent" />,
      title: "Volunteering & Civic Engagement",
      desc: "Mobilizing youth and professionals to serve meaningfully, both online and on-ground.",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "International Collaborations",
      desc: "Partnering with global institutions to drive sustainable, community-led solutions.",
      color: "from-secondary/10 to-secondary/5",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-header" />,
      title: "Social Innovation Labs",
      desc: "Incubating ideas from the grassroots to solve pressing challenges.",
      color: "from-header/10 to-header/5",
    },
  ]
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/10 h-full p-8 flex flex-col items-center text-center group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
