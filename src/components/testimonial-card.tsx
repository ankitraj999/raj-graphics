"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Sanjay's design work transformed our brand identity completely. His attention to detail and strategic approach to visual communication helped us connect with our audience in ways we never thought possible. The rebrand resulted in a 40% increase in brand recognition.",
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
      "Sanjay's packaging designs for our premium coffee line exceeded all expectations. He created a visual system that not only looks beautiful but tells our brand story effectively. Since the redesign, our products have seen a 35% increase in retail sales.",
    rating: 5,
  },
]

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-purple-100">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-600 text-center">{testimonials[currentIndex].position}</p>
              <p className="text-gray-600 text-center mb-4">{testimonials[currentIndex].company}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="text-5xl font-serif text-purple-200 mb-2">"</div>
              <p className="text-lg text-gray-700 mb-6">{testimonials[currentIndex].content}</p>
              <div className="text-5xl font-serif text-purple-200 text-right">"</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-gray-300 hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full p-0 ${
              currentIndex === index
                ? "bg-purple-500 border-purple-500"
                : "bg-gray-200 border-gray-200 hover:bg-gray-300"
            }`}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-gray-300 hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

