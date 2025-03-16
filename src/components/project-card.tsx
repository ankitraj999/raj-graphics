"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    color: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn("object-cover transition-transform duration-700", isHovered ? "scale-110" : "scale-100")}
        />

        {/* Gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-500",
            project.color,
            isHovered ? "opacity-80" : "opacity-0",
          )}
        />
      </div>

      {/* Project info */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm font-medium mb-2 opacity-90">{project.category}</p>
          <h3 className="text-xl font-bold mb-4">{project.title}</h3>
          <Link href={`/projects/${project.id}`} className="inline-flex items-center text-white font-medium group">
            View Project
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

