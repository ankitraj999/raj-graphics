"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import { Variants } from "framer-motion";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const heroRef = useRef<HTMLDivElement>(null)

  // Custom cursor effect
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants:Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference",
      opacity: 0.8,
    },
  }

  const enterText = () => setCursorVariant("text")
  const leaveText = () => setCursorVariant("default")

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollPosition = window.scrollY
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Artisan Coffee Branding",
      category: "Brand Identity",
      image: "/placeholder.svg?height=600&width=800&text=Coffee+Branding",
      color: "from-amber-500 to-orange-700",
    },
    {
      id: 2,
      title: "Eco Packaging Design",
      category: "Packaging",
      image: "/placeholder.svg?height=600&width=800&text=Eco+Packaging",
      color: "from-emerald-500 to-teal-700",
    },
    {
      id: 3,
      title: "Tech Company Rebrand",
      category: "Brand Identity",
      image: "/placeholder.svg?height=600&width=800&text=Tech+Rebrand",
      color: "from-blue-500 to-indigo-700",
    },
  ]

  // Services data
  const services = [
    {
      title: "Brand Identity",
      description:
        "Creating distinctive visual identities that capture your brand's essence and connect with your audience.",
      icon: "✦",
      delay: 0.1,
    },
    {
      title: "Print Design",
      description:
        "Crafting impactful print materials from brochures and catalogs to packaging that leaves a lasting impression.",
      icon: "◈",
      delay: 0.2,
    },
    {
      title: "Digital Design",
      description: "Designing engaging digital assets for websites, social media, and digital marketing campaigns.",
      icon: "◎",
      delay: 0.3,
    },
  ]

  return (
    <>
      {/* Custom cursor (hidden on mobile) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white z-50 pointer-events-none hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0" />

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Parallax text element */}
        <div
          ref={heroRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-opacity-5 text-[20vw] font-bold z-0 select-none"
        >
          DESIGN
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              onMouseEnter={enterText}
              onMouseLeave={leaveText}
            >
              <span className="block">Sanjay Singh</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-light block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                25 Years of Creative Excellence in Graphic Design
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
            >
              Transforming visions into visual stories that captivate audiences and elevate brands to new heights
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="text-base bg-white text-gray-900 hover:bg-white/90">
                <Link href="/projects">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-70" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-100 to-transparent rounded-tr-full opacity-70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafting Visual Stories Since 1998</h2>
              <p className="text-lg text-gray-700 mb-6">
                With 25 years of experience in graphic design, I've dedicated my career to creating visual solutions
                that not only look exceptional but drive real results for businesses across industries.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                My approach combines creative thinking with strategic insights, ensuring that every design element
                serves a purpose and contributes to your brand's success.
              </p>
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Sanjay+Singh"
                  alt="Sanjay Singh"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-full z-0" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200 rounded-full z-0" />

              {/* Experience badge */}
              <div className="absolute -bottom-6 left-10 bg-white p-4 rounded-lg shadow-xl z-20">
                <p className="font-bold text-2xl">25+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my most impactful work across various industries and design disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="border-gray-300">
              <Link href="/projects">
                Explore All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3)_0%,transparent_40%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(64,185,231,0.3)_0%,transparent_40%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Strategic design solutions tailored to elevate your brand and engage your audience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,rgba(240,240,250,1)_100%)] z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what clients have to say about their experience working with me
            </p>
          </motion.div>

          <TestimonialCard />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="border-gray-300">
              <Link href="/testimonials">
                Read More Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 z-0" />
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's collaborate to create designs that not only look exceptional but drive real results for your
              business.
            </p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-white/90 text-lg px-8">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

