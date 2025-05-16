import type { Metadata } from "next"
import { initiatives } from "@/data/initiatives-data"
import InitiativeDetailPageClient from "./InitiativeDetailPageClient"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const initiative = initiatives.find((i) => i.id === params.id)

  if (!initiative) {
    return {
      title: "Initiative Not Found",
      description: "The requested initiative could not be found.",
    }
  }

  return {
    title: initiative.title.replace(/^[🎤📚🎯💡🏛️]\s/u, ""),
    description: initiative.description,
  }
}

export default function InitiativeDetailPage({ params }: Props) {
  return <InitiativeDetailPageClient params={params} />
}
