"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills & Tools" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen || pathname !== "/" ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-xl md:text-2xl font-bold transition-colors",
              isScrolled || isOpen || pathname !== "/" ? "text-gray-900" : "text-white",
            )}
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              RAJ Graphics
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? isScrolled || pathname !== "/"
                      ? "text-purple-600 bg-purple-50"
                      : "text-white bg-white/20"
                    : isScrolled || pathname !== "/"
                      ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                      : "text-white/90 hover:text-white hover:bg-white/20",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn("md:hidden p-2 rounded-md", isScrolled || pathname !== "/" ? "text-gray-900" : "text-white")}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium",
                      pathname === link.href
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50",
                    )}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact" onClick={closeMenu}>
                    Get in Touch
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

