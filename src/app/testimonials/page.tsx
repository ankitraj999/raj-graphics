import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Sanjay's design work transformed our brand identity completely. His attention to detail and strategic approach to visual communication helped us connect with our audience in ways we never thought possible. The rebrand resulted in a 40% increase in brand recognition and significantly improved our market position.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Working with Sanjay was a game-changer for our startup. He took the time to understand our vision and translated it into a visual identity that perfectly captures our company's essence. His designs have helped us stand out in a crowded market and attract our ideal clients.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Creative Director",
      company: "Artisan Coffee Co.",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Sanjay's packaging designs for our premium coffee line exceeded all expectations. He created a visual system that not only looks beautiful but tells our brand story effectively. Since the redesign, our products have seen a 35% increase in retail sales and received industry recognition.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Publication Manager",
      company: "Luxury Lifestyle Magazine",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "We've worked with many designers over the years, but Sanjay's editorial layouts are truly exceptional. His understanding of typography and visual hierarchy transformed our publication. Readers have commented on the improved readability and overall aesthetic, and our newsstand sales have increased by 25%.",
      rating: 4,
    },
    {
      id: 5,
      name: "Lisa Patel",
      position: "Brand Manager",
      company: "Eco Products",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Sanjay created sustainable packaging designs that perfectly aligned with our brand values while standing out on retail shelves. His thoughtful approach to design helped us communicate our commitment to environmental responsibility while maintaining visual appeal. The redesign has been instrumental in our expansion to new markets.",
      rating: 5,
    },
    {
      id: 6,
      name: "Robert Wilson",
      position: "Director of Communications",
      company: "Financial Services Inc.",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "Our annual report has never looked better! Sanjay transformed complex financial data into visually engaging content that our stakeholders actually enjoy reading. His design elevated our corporate communications and helped us present our company's story in a compelling way.",
      rating: 5,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me and the results we've
            achieved together.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[0].image || "/placeholder.svg"}
                    alt={testimonials[0].name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">{testimonials[0].name}</h3>
                <p className="text-gray-600 text-center">{testimonials[0].position}</p>
                <p className="text-gray-600 text-center mb-4">{testimonials[0].company}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[0].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="text-4xl font-serif text-gray-300 mb-2">"</div>
                <p className="text-lg italic text-gray-700 mb-6">{testimonials[0].content}</p>
                <div className="text-4xl font-serif text-gray-300 text-right">"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">More Client Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=Client ${index + 1}`}
                    alt={`Client ${index + 1}`}
                    width={100}
                    height={100}
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join My Satisfied Clients</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to experience the difference strategic design can make for your brand?
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

