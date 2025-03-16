import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With 25 years of experience, I've mastered a wide range of design skills and tools to deliver exceptional
            results for every project.
          </p>
        </div>
      </section>

      {/* Core Design Competencies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Design Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {[
                  "2D Graphic Design Excellence",
                  "Layout Composition & Visual Hierarchy",
                  "Typography & Font Pairing",
                  "Color Theory & Application",
                  "Visual Storytelling",
                  "Brand Identity Development",
                  "Print Design Mastery",
                  "Digital Design Optimization",
                  "Creative Problem-Solving",
                  "Brand Positioning Strategy",
                ].map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Design Skills"
                  alt="Design Skills Visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Software & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Adobe Photoshop",
                expertise: "Expert",
                description:
                  "Advanced photo editing, image manipulation, and creating engaging visuals for both print and digital media.",
                percentage: 95,
              },
              {
                name: "Adobe Illustrator",
                expertise: "Expert",
                description:
                  "Creating vector graphics, custom illustrations, logos, and brand identity elements with precision and scalability.",
                percentage: 90,
              },
              {
                name: "Corel Draw",
                expertise: "Expert",
                description:
                  "Professional layout design, vector illustration, and intricate graphic tasks for various design projects.",
                percentage: 95,
              },
              {
                name: "Adobe InDesign",
                expertise: "Advanced",
                description:
                  "Creating multi-page layouts, brochures, magazines, and other print materials with professional typography.",
                percentage: 85,
              },
              {
                name: "Adobe After Effects",
                expertise: "Intermediate",
                description:
                  "Creating motion graphics and visual effects for digital presentations and social media content.",
                percentage: 75,
              },
              {
                name: "Figma",
                expertise: "Advanced",
                description:
                  "Collaborative interface design, prototyping, and creating responsive layouts for digital platforms.",
                percentage: 80,
              },
            ].map((tool, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-gray-500 mr-2">{tool.expertise}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: `${tool.percentage}%` }}></div>
                  </div>
                  <span className="text-sm font-medium ml-2">{tool.percentage}%</span>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques & Marketing Strategies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Techniques & Marketing Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Marketing Strategies"
                  alt="Marketing Strategies Visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Digital Illustration</h3>
                  <p className="text-gray-600">
                    Creating custom illustrations that capture brand personality and resonate with target audiences
                    across various touchpoints.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Branding Development</h3>
                  <p className="text-gray-600">
                    Building comprehensive brand systems that maintain consistency while allowing flexibility across
                    different applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Market Research Integration</h3>
                  <p className="text-gray-600">
                    Applying audience insights and market research to create designs that effectively communicate with
                    the intended demographic.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Conversion-Focused Design</h3>
                  <p className="text-gray-600">
                    Crafting designs that not only look appealing but strategically guide users toward desired actions
                    and business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Design Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "I begin by understanding your business, target audience, and objectives. This research phase is crucial for creating designs that not only look great but achieve your goals.",
                },
                {
                  number: "02",
                  title: "Concept Development",
                  description:
                    "Based on the discovery insights, I develop initial concepts that align with your brand and objectives, exploring different creative directions.",
                },
                {
                  number: "03",
                  title: "Design Execution",
                  description:
                    "After concept approval, I refine and execute the chosen direction with meticulous attention to detail, ensuring every element serves a purpose.",
                },
                {
                  number: "04",
                  title: "Refinement",
                  description:
                    "I collaborate closely with you to refine the designs, making adjustments based on feedback while maintaining the strategic objectives.",
                },
                {
                  number: "05",
                  title: "Delivery & Implementation",
                  description:
                    "The final designs are delivered in all required formats, with guidance on implementation to ensure consistency across all touchpoints.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

