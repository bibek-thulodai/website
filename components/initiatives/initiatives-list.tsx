"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, MapPin, Clock } from "lucide-react"
import { initiatives } from "@/data/initiatives-data"

export default function InitiativesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {initiatives.map((initiative) => (
        <Link href={`/our-initiatives/${initiative.id}`} key={initiative.id}>
          <Card className="group overflow-hidden border border-gray-200 hover:border-[#0a7d89] hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl h-full">
            <div className="h-52 bg-gradient-to-br from-[#0a7d89]/10 to-[#0a7d89]/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0a7d89]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <initiative.icon className="h-20 w-20 text-[#0a7d89] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">{initiative.category}</Badge>
                <Badge variant="outline" className="text-gray-500 border-gray-300">
                  {initiative.format}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#0a7d89] transition-colors">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <div className="pt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-[#0a7d89]" /> {initiative.location}
                  </span>
                  <span className="inline-flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-[#0a7d89]" /> {initiative.frequency}
                  </span>
                </div>
                <span className="inline-flex items-center font-medium text-[#0a7d89]">
                  View Details <ArrowUpRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
