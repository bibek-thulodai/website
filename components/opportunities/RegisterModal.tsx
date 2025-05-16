"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2 } from "lucide-react"
import Image from "next/image"

export default function RegisterModal({ isOpen, onClose, opportunity }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  })

  const [status, setStatus] = useState("idle") // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")

      // Reset and close after success
      setTimeout(() => {
        setStatus("idle")
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
          coverLetter: "",
        })
        onClose()
      }, 2000)
    }, 1500)
  }

  if (!opportunity) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {status === "success" ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl mb-2">Application Submitted!</DialogTitle>
            <DialogDescription className="mb-6">
              Your application for <span className="font-medium">{opportunity.title}</span> has been successfully
              submitted. We will contact you soon with further details.
            </DialogDescription>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 mr-3">
                  <Image
                    src={opportunity.logo || "/placeholder.svg"}
                    alt={opportunity.organization}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <DialogTitle>{opportunity.title}</DialogTitle>
                  <DialogDescription>{opportunity.organization}</DialogDescription>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-sm mb-2">Opportunity Details</h4>
                <p className="text-sm mb-2">
                  <span className="font-medium">Location:</span> {opportunity.location}
                </p>
                <p className="text-sm mb-2">
                  <span className="font-medium">Deadline:</span> {opportunity.deadline}
                </p>
                <p className="text-sm">{opportunity.description}</p>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  disabled={status === "loading"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  disabled={status === "loading"}
                  className="cursor-pointer"
                />
                <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter / Additional Information</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you're interested in this opportunity..."
                  rows={4}
                  disabled={status === "loading"}
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onClose} disabled={status === "loading"}>
                  Cancel
                </Button>
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
