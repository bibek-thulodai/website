import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/components/projects/projects-data"
import ProjectDetailPageClient from "./ProjectDetailPageClient"

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const project = projects.find((p) => String(p.id) === String(awaitedParams.id));

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

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  const project = projects.find((p) => String(p.id) === String(awaitedParams.id))
  if (!project) return notFound()
  return <ProjectDetailPageClient project={project} />
}
