import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Initiative Not Found</h1>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        We couldn't find the initiative you're looking for. It may have been moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">
          <Link href="/our-initiatives">View All Initiatives</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
