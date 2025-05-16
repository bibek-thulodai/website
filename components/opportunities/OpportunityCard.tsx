"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function OpportunityCard({ opportunity, onApply }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
            <Image
              src={opportunity.logo || "/placeholder.svg"}
              alt={opportunity.organization}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{opportunity.title}</h3>
            <p className="text-sm text-gray-600">{opportunity.organization}</p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-primary/70" />
            <span>{opportunity.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2 text-primary/70" />
            <span>Deadline: {opportunity.deadline}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{opportunity.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
              {tag}
            </Badge>
          ))}
        </div>

        <Button onClick={() => onApply(opportunity)} className="w-full bg-primary hover:bg-primary/90">
          Apply Now
        </Button>
      </div>
    </motion.div>
  )
}
