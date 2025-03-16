import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, Clock, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sanjay Singh</h1>
              <p className="text-xl text-gray-600 mb-8">
                With 25 years of experience in graphic design, I've dedicated my career to creating visual solutions
                that not only look exceptional but drive real results for businesses.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Sanjay Singh"
                  alt="Sanjay Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">25+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Creative Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                My passion for design began at an early age, drawing and sketching whenever I could. This creative spark
                led me to pursue formal education in graphic design, where I honed my skills and developed a deep
                understanding of design principles.
              </p>
              <p>
                After graduating, I started my professional journey at a boutique design agency, where I had the
                opportunity to work with diverse clients across various industries. This experience was invaluable,
                teaching me not only technical skills but also how to translate client needs into effective visual
                solutions.
              </p>
              <p>
                Over the years, I've had the privilege of working with brands of all sizes, from startups to established
                corporations. Each project has been a unique challenge, pushing me to innovate and refine my craft. My
                approach combines creativity with strategic thinking, ensuring that every design not only captures
                attention but also communicates the right message to the right audience.
              </p>
              <p>
                Today, with 25 years of experience behind me, I continue to be passionate about creating designs that
                make a difference. I believe that great design has the power to transform businesses, and I'm committed
                to helping my clients achieve their goals through thoughtful, impactful visual communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Briefcase className="h-8 w-8 text-primary" />, number: "500+", label: "Projects Completed" },
              { icon: <Users className="h-8 w-8 text-primary" />, number: "200+", label: "Happy Clients" },
              { icon: <Award className="h-8 w-8 text-primary" />, number: "15+", label: "Design Awards" },
              { icon: <Clock className="h-8 w-8 text-primary" />, number: "25+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Design & Marketing Philosophy</h2>
            <p className="text-xl text-gray-600 mb-12">
              I believe that great design is more than just aesthetics—it's about solving problems and creating
              meaningful connections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Purpose-Driven Design",
                description:
                  "Every element in my designs serves a purpose, working together to achieve specific business objectives and connect with the target audience.",
              },
              {
                title: "Strategic Creativity",
                description:
                  "I blend creative thinking with strategic insights, ensuring that designs not only look great but also deliver measurable results for clients.",
              },
              {
                title: "Collaborative Approach",
                description:
                  "I believe the best results come from close collaboration with clients, understanding their vision and translating it into compelling visual solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to elevate your brand with strategic design solutions? I'd love to hear about your project.
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

