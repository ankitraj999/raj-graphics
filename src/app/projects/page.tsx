import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "TechCorp Brand Redesign",
      category: "Branding & Identity",
      description:
        "Complete brand overhaul for a technology company, including logo design, color palette, typography, and brand guidelines.",
      image: "/placeholder.svg?height=600&width=800&text=TechCorp",
    },
    {
      id: 2,
      title: "Eco Packaging Design",
      category: "Packaging",
      description:
        "Sustainable packaging design for an eco-friendly product line, focusing on recyclable materials and minimal environmental impact.",
      image: "/placeholder.svg?height=600&width=800&text=Eco Packaging",
    },
    {
      id: 3,
      title: "Luxury Magazine Layout",
      category: "Print Design",
      description:
        "Editorial design for a high-end lifestyle magazine, featuring custom typography and sophisticated layout design.",
      image: "/placeholder.svg?height=600&width=800&text=Magazine Layout",
    },
    {
      id: 4,
      title: "Food Delivery App UI",
      category: "Digital Design",
      description:
        "User interface design for a food delivery application, focusing on user experience and visual appeal.",
      image: "/placeholder.svg?height=600&width=800&text=App UI",
    },
    {
      id: 5,
      title: "Annual Report Design",
      category: "Print Design",
      description:
        "Comprehensive annual report design for a financial institution, transforming complex data into visually engaging content.",
      image: "/placeholder.svg?height=600&width=800&text=Annual Report",
    },
    {
      id: 6,
      title: "Artisan Coffee Branding",
      category: "Branding & Identity",
      description: "Brand identity for an artisan coffee roaster, including logo, packaging, and marketing materials.",
      image: "/placeholder.svg?height=600&width=800&text=Coffee Branding",
    },
  ]

  // Categories for filtering
  const categories = ["All", "Branding & Identity", "Print Design", "Packaging", "Digital Design"]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a selection of my work spanning brand identity, print design, packaging, and digital projects.
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} className="mb-2">
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Case Study</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Case Study"
                  alt="Featured Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-sm text-primary font-medium mb-2">Branding & Identity</div>
              <h3 className="text-2xl font-bold mb-4">TechCorp Brand Transformation</h3>
              <div className="prose max-w-none">
                <p>
                  TechCorp approached me with a challenge: their brand no longer reflected their innovative technology
                  solutions. They needed a complete brand overhaul that would position them as industry leaders while
                  maintaining recognition from existing clients.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-2">The Challenge</h4>
                <p>
                  The existing brand lacked consistency across touchpoints and failed to communicate the company's core
                  values of innovation, reliability, and forward-thinking.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-2">The Solution</h4>
                <p>
                  I developed a comprehensive brand identity system that included a modernized logo, a refined color
                  palette, custom typography, and a flexible visual language that could adapt across various
                  applications.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-2">The Results</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>42% increase in brand recognition in market research</li>
                  <li>35% improvement in perceived value among potential clients</li>
                  <li>28% increase in website engagement following rebrand</li>
                </ul>
              </div>
              <Button asChild className="mt-6">
                <Link href="/projects/1">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's collaborate to create designs that elevate your brand and connect with your audience.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

