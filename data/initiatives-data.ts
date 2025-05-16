import { Mic, BookOpen, Target, Lightbulb, Users } from "lucide-react"

export const initiatives = [
  {
    id: "opportunity-talk",
    title: "🎤 Opportunity Talk",
    description:
      "A recurring online/in-person series featuring change-makers, entrepreneurs, and global leaders sharing insights on seizing and creating opportunities.",
    icon: Mic,
    category: "Knowledge Sharing",
    format: "Recurring Series",
    location: "Online & In-person",
    frequency: "Monthly",
    hasTabs: true,
    editions: [
      {
        id: "first-edition",
        title: "First Edition",
        date: "March 2023",
        speakers: ["Jane Doe, Social Entrepreneur", "John Smith, Tech Innovator", "Maria Garcia, Policy Expert"],
        topics: ["Social Innovation", "Digital Transformation", "Policy Advocacy"],
        participants: "250+ attendees from 15 countries",
        highlights: [
          "Panel discussion on 'Creating Opportunities in Challenging Times'",
          "Interactive Q&A session with audience",
          "Networking session connecting participants with speakers",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "second-edition",
        title: "Second Edition",
        date: "June 2023",
        speakers: [
          "David Chen, Impact Investor",
          "Sarah Johnson, Education Innovator",
          "Michael Kim, Climate Activist",
        ],
        topics: ["Impact Investment", "Education Innovation", "Climate Action"],
        participants: "300+ attendees from 20 countries",
        highlights: [
          "Keynote on 'Funding Opportunities for Social Enterprises'",
          "Lightning talks by emerging leaders",
          "Virtual expo of innovative projects",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
    fullDescription:
      "Opportunity Talk is a dynamic platform that brings together change-makers, entrepreneurs, and global leaders to share their insights, experiences, and wisdom on creating and seizing opportunities. Through engaging conversations, presentations, and interactive sessions, participants gain valuable knowledge, inspiration, and practical strategies they can apply to their own journeys. The series features diverse speakers from various sectors, ensuring a rich tapestry of perspectives and approaches to opportunity creation and utilization.",
    impact:
      "20+ talks conducted, 3,000+ participants engaged, 85% of participants report applying insights to their work",
    partners: "Global Entrepreneurship Network, Innovation Hub, Leadership Academy",
    objectives: [
      "Provide access to insights from successful change-makers and leaders",
      "Inspire action through real-world success stories and lessons",
      "Create a platform for knowledge exchange and networking",
      "Democratize access to valuable insights regardless of geographic location",
    ],
    achievements: [
      "Established a loyal community of regular participants",
      "Created a digital library of talks accessible to global audiences",
      "Facilitated numerous connections leading to collaborations and mentorships",
      "Expanded from online-only to hybrid format reaching diverse audiences",
    ],
    featuredImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "Opportunity Talk opened my eyes to possibilities I never considered before. The insights shared by speakers directly influenced my decision to start my social enterprise.",
        author: "Maya Patel",
        role: "Founder, EcoSolutions",
      },
      {
        quote:
          "As a speaker, I was impressed by the engagement and thoughtful questions from participants. The platform truly facilitates meaningful knowledge exchange.",
        author: "Dr. James Wilson",
        role: "Education Innovation Expert",
      },
    ],
    upcomingEvents: [
      {
        title: "Opportunity Talk: Tech for Good",
        date: "August 15, 2023",
        location: "Virtual",
        registration: "Open",
      },
      {
        title: "Opportunity Talk: Social Entrepreneurship in Practice",
        date: "September 20, 2023",
        location: "Hybrid - Kathmandu & Virtual",
        registration: "Coming Soon",
      },
    ],
  },
  {
    id: "project-aawasar",
    title: "📚 Project Aawasar",
    description:
      "A grassroots initiative that takes skill-building, mentorship, and leadership training to rural and underserved areas.",
    icon: BookOpen,
    category: "Skill Development",
    format: "Grassroots Program",
    location: "Rural Areas",
    frequency: "Ongoing",
    hasTabs: true,
    editions: [
      {
        id: "first-edition",
        title: "First Edition",
        date: "2022-2023",
        locations: ["Dhading District", "Kavre District", "Sindhupalchok District"],
        skills: ["Digital Literacy", "Financial Management", "Leadership Development", "Communication Skills"],
        participants: "500+ youth from 15 villages",
        highlights: [
          "Mobile skill labs bringing technology to remote villages",
          "Train-the-trainer program creating local skill champions",
          "Community projects addressing local challenges",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "second-edition",
        title: "Second Edition",
        date: "2023-2024",
        locations: ["Dolakha District", "Ramechhap District", "Okhaldhunga District"],
        skills: [
          "Entrepreneurship",
          "Sustainable Agriculture",
          "Digital Marketing",
          "Project Management",
          "Civic Leadership",
        ],
        participants: "750+ youth from 20 villages",
        highlights: [
          "Entrepreneurship incubation program for rural youth",
          "Agricultural innovation workshops for farmers",
          "Youth-led community development initiatives",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
    fullDescription:
      "Project Aawasar is a comprehensive grassroots initiative designed to bridge the opportunity gap between urban and rural areas by bringing essential skill-building, mentorship, and leadership training directly to underserved communities. The program employs a mobile training approach, setting up temporary skill labs in villages and remote areas where access to quality education and skill development opportunities is limited. Through a combination of hands-on workshops, mentorship sessions, and community projects, participants develop practical skills while addressing local challenges.",
    impact:
      "1,250+ youth trained across 35 villages, 80+ community projects implemented, 40% of participants report increased income",
    partners: "Rural Development Foundation, Digital Empowerment Initiative, Local Government Bodies",
    objectives: [
      "Bridge the urban-rural opportunity divide through accessible skill development",
      "Empower rural youth with market-relevant skills and leadership capabilities",
      "Foster community-driven development through local projects",
      "Create a network of rural change-makers and entrepreneurs",
    ],
    achievements: [
      "Established mobile skill labs reaching the most remote communities",
      "Created a curriculum specifically designed for rural contexts and needs",
      "Developed a network of local trainers ensuring program sustainability",
      "Facilitated the launch of 30+ rural micro-enterprises",
    ],
    featuredImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "Before Project Aawasar came to our village, I had no computer skills. Now I help my community access digital services and even started a small business providing digital support.",
        author: "Ramesh Tamang",
        role: "Project Participant, Sindhupalchok",
      },
      {
        quote:
          "The program's approach of training local trainers ensures that knowledge stays in our community long after the project team leaves.",
        author: "Sunita Gurung",
        role: "Community Leader, Kavre",
      },
    ],
    upcomingEvents: [
      {
        title: "Digital Skills Workshop",
        date: "July 10-15, 2023",
        location: "Dolakha District",
        registration: "Open",
      },
      {
        title: "Agricultural Innovation Training",
        date: "August 5-10, 2023",
        location: "Ramechhap District",
        registration: "Open",
      },
    ],
  },
  {
    id: "opportunity-bootcamp",
    title: "🎯 Opportunity Bootcamp",
    description:
      "Intensive workshops designed to train youth on resume writing, personal branding, project pitching, and opportunity access.",
    icon: Target,
    category: "Career Development",
    format: "Intensive Workshop",
    location: "Multiple Locations",
    frequency: "Quarterly",
    hasTabs: false,
    fullDescription:
      "Opportunity Bootcamp offers intensive, hands-on workshops designed to equip youth with the essential skills needed to access and create professional opportunities. Each bootcamp focuses on practical skills including resume writing, personal branding, project pitching, interview preparation, and opportunity identification. The program employs a learning-by-doing approach, with participants working on real-world projects and receiving personalized feedback from industry professionals. The bootcamps create a supportive yet challenging environment where participants can develop their skills, expand their networks, and gain the confidence needed to pursue their career goals.",
    impact: "2,000+ youth trained, 75% report improved job prospects, 40% secured internships or jobs within 3 months",
    partners: "Career Development Institute, Professional Mentors Network, Corporate Partners",
    objectives: [
      "Develop essential career readiness skills among youth",
      "Bridge the gap between education and employment requirements",
      "Build confidence through practical application and feedback",
      "Connect participants with professional opportunities and networks",
    ],
    achievements: [
      "Developed a comprehensive curriculum covering all aspects of opportunity access",
      "Created a digital resource library accessible to all participants",
      "Established partnerships with employers for internship and job placements",
      "Implemented a mentorship program connecting participants with professionals",
    ],
    bootcampModules: [
      {
        title: "Personal Branding",
        description:
          "Developing a compelling personal brand, creating professional online profiles, and crafting your unique value proposition.",
      },
      {
        title: "Resume Mastery",
        description:
          "Creating impactful resumes, tailoring applications to specific opportunities, and highlighting relevant skills and experiences.",
      },
      {
        title: "Pitch Perfect",
        description:
          "Developing and delivering compelling project and personal pitches, communicating value effectively, and engaging different audiences.",
      },
      {
        title: "Opportunity Navigation",
        description:
          "Identifying and evaluating opportunities, developing application strategies, and leveraging networks for access.",
      },
    ],
    featuredImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "The bootcamp transformed my approach to job hunting. Within a month of applying the techniques I learned, I secured three interviews and landed my dream job.",
        author: "Anish Sharma",
        role: "Bootcamp Graduate",
      },
      {
        quote:
          "As an employer, I've noticed a significant difference in applications from Opportunity Bootcamp graduates. They stand out with their clear communication and professional presentation.",
        author: "Priya Joshi",
        role: "HR Director, Tech Innovations",
      },
    ],
    upcomingEvents: [
      {
        title: "Resume & Personal Branding Bootcamp",
        date: "July 20-22, 2023",
        location: "Kathmandu",
        registration: "Open",
      },
      {
        title: "Interview Skills & Networking Bootcamp",
        date: "August 25-27, 2023",
        location: "Pokhara",
        registration: "Coming Soon",
      },
    ],
  },
  {
    id: "innovate-x",
    title: "💡 Innovate X",
    description:
      "A virtual fellowship empowering South Asian undergraduate students with entrepreneurial training, mentorship, and networking.",
    icon: Lightbulb,
    category: "Entrepreneurship",
    format: "Virtual Fellowship",
    location: "South Asia",
    frequency: "Annual Cohort",
    hasTabs: true,
    editions: [
      {
        id: "first-edition",
        title: "First Edition",
        date: "2022",
        fellows: "50 undergraduate students from 5 South Asian countries",
        mentors: "25 experienced entrepreneurs and industry experts",
        projects: "20 innovative ventures launched across various sectors",
        highlights: [
          "12-week intensive entrepreneurship curriculum",
          "One-on-one mentorship with successful entrepreneurs",
          "Virtual Demo Day with potential investors and partners",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
      {
        id: "second-edition",
        title: "Second Edition",
        date: "2023",
        fellows: "75 undergraduate students from 7 South Asian countries",
        mentors: "35 experienced entrepreneurs and industry experts",
        projects: "30 innovative ventures launched across various sectors",
        highlights: [
          "Expanded curriculum with sector-specific tracks",
          "Masterclasses by global innovation leaders",
          "Seed funding competition for top ventures",
        ],
        gallery: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
      },
    ],
    fullDescription:
      "Innovate X is a comprehensive virtual fellowship program designed to empower undergraduate students across South Asia with the knowledge, skills, and networks needed to become successful entrepreneurs and innovators. The program combines structured learning modules, personalized mentorship, peer collaboration, and networking opportunities to create a holistic entrepreneurial development experience. Fellows work on developing their own venture ideas throughout the program, receiving guidance and feedback from experienced mentors and ultimately pitching their concepts to potential supporters and investors.",
    impact:
      "125+ fellows trained across 7 countries, 50+ ventures launched, $500,000+ in funding secured by fellow ventures",
    partners: "South Asian Entrepreneurship Network, Global Innovation Fund, Regional Universities",
    objectives: [
      "Develop entrepreneurial mindsets and skills among South Asian youth",
      "Provide access to quality mentorship and networks across borders",
      "Support the development of innovative solutions to regional challenges",
      "Create a community of young entrepreneurs across South Asia",
    ],
    achievements: [
      "Created a cross-border entrepreneurial community in South Asia",
      "Developed a comprehensive virtual entrepreneurship curriculum",
      "Established a mentor network of 60+ experienced entrepreneurs",
      "Facilitated funding and partnership opportunities for fellow ventures",
    ],
    featuredImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "Innovate X gave me not just knowledge and skills, but also the confidence to pursue my venture idea. The mentorship was invaluable in helping me refine my business model.",
        author: "Aisha Rahman",
        role: "2022 Fellow, Bangladesh",
      },
      {
        quote:
          "The cross-border connections I made through Innovate X have been instrumental in scaling my venture across multiple South Asian markets.",
        author: "Vikram Mehta",
        role: "2022 Fellow, India",
      },
    ],
    upcomingEvents: [
      {
        title: "Innovate X 2023 Applications",
        date: "Opens August 1, 2023",
        location: "Virtual",
        registration: "Coming Soon",
      },
      {
        title: "Innovate X Demo Day 2023",
        date: "November 15, 2023",
        location: "Virtual",
        registration: "By Invitation",
      },
    ],
  },
  {
    id: "opportunity-conclave",
    title: "🏛️ Opportunity Conclave",
    description:
      "A flagship annual event bringing together educators, youth leaders, innovators, and organizations to discuss actionable solutions for global challenges.",
    icon: Users,
    category: "Global Forum",
    format: "Annual Conference",
    location: "Rotating Locations",
    frequency: "Annual",
    hasTabs: false,
    fullDescription:
      "The Opportunity Conclave is our flagship annual event that serves as a convergence point for diverse stakeholders committed to creating and expanding opportunities for all. The conclave brings together educators, youth leaders, innovators, policymakers, and organizations from around the world to discuss challenges, share insights, and develop actionable solutions to pressing global issues. Through keynote speeches, panel discussions, workshops, and networking sessions, the conclave fosters cross-sector collaboration and catalyzes initiatives that continue long after the event concludes.",
    impact:
      "5 successful conclaves held, 2,500+ participants from 40+ countries, 30+ collaborative initiatives launched",
    partners: "United Nations Agencies, International NGOs, Corporate Partners, Academic Institutions",
    objectives: [
      "Create a platform for meaningful dialogue on opportunity creation and access",
      "Facilitate cross-sector and cross-border collaborations",
      "Showcase innovative approaches and solutions from around the world",
      "Develop actionable roadmaps for addressing key challenges",
    ],
    achievements: [
      "Established the conclave as a premier global forum on opportunity creation",
      "Created a diverse community of change-makers across sectors and borders",
      "Facilitated the launch of numerous collaborative initiatives",
      "Published annual reports influencing policy and practice",
    ],
    conclaveComponents: [
      {
        title: "Keynote Addresses",
        description: "Thought-provoking speeches by global leaders and visionaries setting the tone for the conclave.",
      },
      {
        title: "Panel Discussions",
        description:
          "In-depth conversations on key themes featuring diverse perspectives from experts and practitioners.",
      },
      {
        title: "Interactive Workshops",
        description: "Hands-on sessions developing practical skills and approaches to opportunity creation.",
      },
      {
        title: "Innovation Showcase",
        description: "Exhibition of innovative solutions and approaches from around the world.",
      },
      {
        title: "Networking Sessions",
        description: "Structured and unstructured opportunities to build meaningful connections and collaborations.",
      },
    ],
    featuredImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "The Opportunity Conclave is unlike any other event I've attended. The diversity of perspectives and the focus on actionable solutions make it truly impactful.",
        author: "Dr. Elena Rodriguez",
        role: "Education Policy Expert",
      },
      {
        quote:
          "Our organization found three implementation partners at last year's conclave. The connections made there have significantly accelerated our impact.",
        author: "Thomas Ochieng",
        role: "Executive Director, Community Empowerment Initiative",
      },
    ],
    upcomingEvents: [
      {
        title: "Opportunity Conclave 2023",
        date: "October 10-12, 2023",
        location: "Bangkok, Thailand",
        registration: "Open",
      },
      {
        title: "Pre-Conclave Webinar Series",
        date: "September 1-30, 2023",
        location: "Virtual",
        registration: "Open",
      },
    ],
  },
]
