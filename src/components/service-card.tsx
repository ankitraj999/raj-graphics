"use client"

import { motion } from "framer-motion"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: string
    delay: number
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/15 transition-colors duration-300"
    >
      <div className="text-4xl mb-4 text-white">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
      <p className="text-gray-300">{service.description}</p>
    </motion.div>
  )
}

