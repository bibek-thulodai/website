"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Tag, Building, FileText, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function PostOpportunityForm() {
  const [formState, setFormState] = useState({
    title: "",
    organization: "",
    category: "",
    location: "",
    deadline: "",
    description: "",
    tags: "",
    email: "",
    phone: "",
  })

  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, margin: "-100px" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formState.title || !formState.organization || !formState.category || !formState.email) {
      setStatus("error")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")

      // Reset form after success
      setFormState({
        title: "",
        organization: "",
        category: "",
        location: "",
        deadline: "",
        description: "",
        tags: "",
        email: "",
        phone: "",
      })

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <section ref={formRef} className="py-16 relative overflow-hidden bg-gradient-to-br from-[#013A87] to-[#017489]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Post an Opportunity</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Have an opportunity to share? Fill out the form below to submit your opportunity for review. Once
              approved, it will be listed on our platform for our community to discover.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Opportunity Title*
                </Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                  <Input
                    id="title"
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    placeholder="e.g. Project Coordinator"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    disabled={status === "loading" || status === "success"}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className="text-white">
                  Organization Name*
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                  <Input
                    id="organization"
                    name="organization"
                    value={formState.organization}
                    onChange={handleChange}
                    placeholder="e.g. Creating Opportunities International"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    disabled={status === "loading" || status === "success"}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-white">
                  Category*
                </Label>
                <Select
                  value={formState.category}
                  onValueChange={(value) => handleSelectChange("category", value)}
                  disabled={status === "loading" || status === "success"}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jobs">Job</SelectItem>
                    <SelectItem value="internships">Internship</SelectItem>
                    <SelectItem value="scholarships">Scholarship</SelectItem>
                    <SelectItem value="competitions">Competition</SelectItem>
                    <SelectItem value="fellowships">Fellowship</SelectItem>
                    <SelectItem value="workshops">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-white">
                  Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                  <Input
                    id="location"
                    name="location"
                    value={formState.location}
                    onChange={handleChange}
                    placeholder="e.g. Kathmandu, Nepal or Remote"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    disabled={status === "loading" || status === "success"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className="text-white">
                  Application Deadline
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formState.deadline}
                    onChange={handleChange}
                    className="pl-10 bg-white/10 border-white/20 text-white"
                    disabled={status === "loading" || status === "success"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-white">
                  Tags/Keywords
                </Label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                  <Input
                    id="tags"
                    name="tags"
                    value={formState.tags}
                    onChange={handleChange}
                    placeholder="e.g. Full-time, Education, Remote"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    disabled={status === "loading" || status === "success"}
                  />
                </div>
                <p className="text-white/60 text-xs">Separate tags with commas</p>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Provide details about the opportunity..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Contact Email*
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="contact@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  disabled={status === "loading" || status === "success"}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Contact Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+1 (123) 456-7890"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-white hover:bg-white/90 text-[#017489] hover:text-[#006955] font-medium py-6"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#017489]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : status === "success" ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Opportunity Submitted!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Submit Opportunity
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm flex items-center justify-center text-red-300"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Please fill in all required fields
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm flex items-center justify-center text-green-300"
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Thank you for submitting an opportunity! Our team will review it shortly.
                  </motion.div>
                )}
              </div>

              <div className="md:col-span-2 text-center">
                <p className="text-white/60 text-xs">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. Fields marked with *
                  are required.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
