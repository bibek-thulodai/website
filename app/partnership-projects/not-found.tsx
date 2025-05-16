import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#0a7d89] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been moved to a different location.
        </p>
        <Button asChild className="bg-[#0a7d89] hover:bg-[#0a7d89]/90">
          <Link href="/partnership-projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  )
}
