import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects as projectsData } from "@/components/projects/projects-list"
import ProjectDetailPageClient from "./ProjectDetailPageClient"

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Partnership Projects`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id)
  if (!project) return notFound()
  return <ProjectDetailPageClient project={project} />
}
