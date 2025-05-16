"use client"

import { useState } from "react"
import {
  Building2,
  GraduationCap,
  Code,
  HeartHandshake,
  CalendarDays,
  Rocket,
  CheckCircle,
  Users,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ServicesHero from "@/components/services/ServicesHero"
import StylishCTA from "@/components/shared/StylishCTA"
import Image from "next/image"

type Service = {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  detailedOffering: string[];
  forWho: string[];
  keyBenefits: string[];
  image: string;
};

type ModalProps = {
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const services: Service[] = [
  {
    id: "corporate",
    title: "Corporate Services",
    description:
      "Strategic and administrative solutions to support corporate clients with streamlined operations, capacity building and impactful CSR initiatives.",
    icon: Building2,
    color: "#017489",
    detailedOffering: [
      "HR & Talent Management",
      "ISO Education Consultation",
      "Corporate Social Responsibility Program Design",
      "Policy & Strategic Planning Consultation",
      "Vendor & Logistics Management",
    ],
    forWho: ["Corporations, SMEs, NGOs", "CSR and HR departments"],
    keyBenefits: [
      "End-to-end corporate support",
      "Increased compliance and operational efficiency",
      "Tailored strategic alignment",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "education",
    title: "Educational Services",
    description:
      "We empower educational institutions with resources, tools and consultancy to enhance academic quality, operations and global positioning.",
    icon: GraduationCap,
    color: "#006955",
    detailedOffering: [
      "Academic Calendar Development",
      "School Reform Toolkit Implementation",
      "CPD UK-Aligned Trainings",
      "School Website & Social Media Bundles",
      "International School Accreditation Support",
    ],
    forWho: ["Private/Public Schools, Colleges", "School Networks & Franchises"],
    keyBenefits: ["Better academic planning", "Competitive positioning", "Higher student/parent satisfaction"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "tech",
    title: "Tech & Outsourcing",
    description:
      "We offer tech-based services and outsourcing support to help you scale faster and smarter with reliable, expert-backed execution.",
    icon: Code,
    color: "#02609E",
    detailedOffering: [
      "IT Project Outsourcing (Web, App, CRM)",
      "Document Digitization & Security",
      "Proposal Writing & Grant Design",
      "CRM Setup & Maintenance",
      "UI/UX & Technical Audit",
    ],
    forWho: ["Startups, Development Projects, Educational Institutions"],
    keyBenefits: ["Reliable, cost-effective solutions", "Access to skilled tech teams", "Custom and scalable output"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "csr",
    title: "CSR & Startup Programs",
    description:
      "Bridge your corporate social responsibility with innovation by supporting vetted, high-impact startups aligned with the SDGs.",
    icon: HeartHandshake,
    color: "#013A87",
    detailedOffering: [
      "CSR Program Design for Startups",
      "Startup Scouting, Matching & Incubation",
      "Grant & Mentorship Management",
      "Impact Reporting & Communication",
    ],
    forWho: ["Corporate CSR Teams", "Development Agencies", "Social Impact Investors"],
    keyBenefits: ["Tangible, measurable CSR impact", "Enhanced brand reputation", "Youth innovation empowerment"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "events",
    title: "Event & Training Management",
    description:
      "Delivering end-to-end event and training solutions, from corporate workshops to large-scale educational and community events.",
    icon: CalendarDays,
    color: "#017489",
    detailedOffering: [
      "Event Planning & Coordination",
      "Corporate & Youth Bootcamps",
      "Training Module Design",
      "Speaker & Venue Management",
      "Conference & Expo Support",
    ],
    forWho: ["Companies, Institutions, INGOs", "Fellowship & Leadership Programs"],
    keyBenefits: ["Zero-hassle execution", "Creative, tailored learning experiences", "Strong branding and outreach"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "opportunities",
    title: "Application & Opportunity Support",
    description:
      "Helping youth and professionals unlock global opportunities through curated guidance, mentoring and application assistance.",
    icon: Rocket,
    color: "#006955",
    detailedOffering: [
      "Opportunity Matching (Fellowships, Scholarships, Conferences)",
      "Application Mentorship & Draft Reviews",
      "SOP/LOI Writing & Proofreading",
      "Opportunity Talks & Webinars",
      "Exclusive Opportunity Subscription Packages",
    ],
    forWho: ["Students, Early-career Professionals, Emerging Leaders"],
    keyBenefits: [
      "Better acceptance rates",
      "Access to verified global opportunities",
      "Continuous development support",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

function PlaceOrderModal({ service, open, onOpenChange }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#02609E] text-xl">Place Order for {service.title}</DialogTitle>
          <DialogDescription>
            Fill out this form to place your order for {service.title.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" className="col-span-3" placeholder="Your full name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" className="col-span-3" placeholder="Your email address" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">Phone</Label>
            <Input id="phone" className="col-span-3" placeholder="Your phone number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="organization" className="text-right">Organization</Label>
            <Input id="organization" className="col-span-3" placeholder="Your company or organization" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#017489] hover:bg-[#006955]">Submit Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ServiceDetailsModal({ service, open, onOpenChange }: ModalProps) {
  const [orderOpen, setOrderOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50 to-[#e6f0fa]">
        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3 relative">
            <Image src={service.image} alt={service.title} width={320} height={220} className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none object-cover w-full h-48 md:h-full border-b md:border-b-0 md:border-r border-blue-100" />
            <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold text-[#02609E] shadow-md flex items-center gap-2">
              {service.icon && <service.icon className="h-4 w-4" />} {service.title}
            </div>
          </div>
          <div className="flex-1 p-6 md:p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold mb-2 tracking-tight text-[#02609E] drop-shadow-sm">
                {service.title}
              </DialogTitle>
              <DialogDescription className="mb-4 text-base text-gray-700 font-medium">
                {service.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-[#02609E] flex items-center text-base">
                <CheckCircle className="h-4 w-4 mr-2" style={{ color: service.color }} /> Detailed Offering
              </h4>
              <ul className="space-y-1 pl-6">
                {service.detailedOffering.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-gray-700 list-disc">{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-[#02609E] flex items-center text-base">
                <Users className="h-4 w-4 mr-2" style={{ color: service.color }} /> Who It's For
              </h4>
              <ul className="space-y-1 pl-6">
                {service.forWho.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-gray-700 list-disc">{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-[#02609E] flex items-center text-base">
                <Award className="h-4 w-4 mr-2" style={{ color: service.color }} /> Key Benefits
              </h4>
              <ul className="space-y-1 pl-6">
                {service.keyBenefits.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-gray-700 list-disc">{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="bg-gradient-to-r from-[#017489] to-[#02609E] hover:from-[#02609E] hover:to-[#017489] text-white px-8 py-3 rounded-lg shadow-lg font-bold text-lg transition-all duration-200" onClick={() => setOrderOpen(true)}>
                Place Order
              </Button>
            </div>
            <PlaceOrderModal service={service} open={orderOpen} onOpenChange={setOrderOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

type ServiceCardProps = {
  service: Service;
  onViewDetails: () => void;
};

function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 flex flex-col">
      <Image src={service.image} alt={service.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2" style={{ color: service.color }}>{service.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        <Button className="bg-[#017489] hover:bg-[#006955] text-white mt-auto" onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />
      {/* Services List */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#02609E] mb-4">Our Professional Services</h2>
            <p className="text-gray-600">
              At Creating Opportunities International, we offer a diverse range of professional services designed to
              empower individuals, educational institutions, and businesses. Each service is crafted to deliver
              exceptional value and meaningful results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={() => {
                  setSelectedService(service)
                  setDetailsOpen(true)
                }}
              />
            ))}
          </div>
          {selectedService && (
            <ServiceDetailsModal
              service={selectedService}
              open={detailsOpen}
              onOpenChange={setDetailsOpen}
            />
          )}
        </div>
      </section>
      {/* Stylish CTA Section */}
      <StylishCTA
        title="Ready to Create New Opportunities?"
        description="Let's work together to achieve your goals and create lasting impact. Our team is ready to support your journey with tailored solutions and expert guidance."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Request a Consultation"
        showContactForm={true}
        variant="primary"
      />
    </main>
  )
}
