"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
  {
    name: "Our Work",
    href: "#",
    submenu: [
      { name: "Gallery", href: "/gallery" },
      { name: "Blog", href: "/blog" },
      { name: "Merchandise", href: "/merchandise" },
      { name: "Opportunities Hub", href: "/opportunities" },
      { name: "Long Projects", href: "/long-projects" },
      { name: "Our Initiatives", href: "/our-initiatives" },
      { name: "Partnership Projects", href: "/partnership-projects" },
    ],
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Use useEffect to handle client-side operations
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent hydration errors by not rendering until mounted
  if (!mounted) {
    return (
      <header className="fixed w-full z-50 bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="h-10 w-[200px]"></div>
            <div className="h-10 w-[200px]"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=200"
                alt="Creating Opportunities International"
                width={200}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) =>
              !item.submenu ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#017489]",
                    pathname === item.href
                      ? scrolled
                        ? "text-[#017489] font-semibold"
                        : "text-white font-semibold"
                      : scrolled
                        ? "text-gray-700"
                        : "text-white",
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-[#017489]",
                      scrolled ? "text-gray-700" : "text-white",
                    )}
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link href={subItem.href} className={cn(pathname === subItem.href ? "bg-[#e6f7fa]" : "")}>
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn(
                scrolled
                  ? "border-[#017489] text-[#017489] hover:bg-[#017489] hover:text-white"
                  : "border-white text-[#017489] hover:bg-white hover:text-[#017489]",
              )}
            >
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button asChild size="sm" className="bg-[#017489] hover:bg-[#01667a] text-white">
              <Link href="/client-portal">Client Portal</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn(scrolled ? "text-gray-700" : "text-white")}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {!item.submenu ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-base font-medium",
                        pathname === item.href ? "text-[#017489]" : "text-gray-700",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <div className="text-base font-medium text-gray-700 mb-2">{item.name}</div>
                      <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "block py-1 text-sm",
                              pathname === subItem.href ? "text-[#017489]" : "text-gray-600",
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                className="w-full border-[#017489] text-[#017489] hover:bg-[#017489] hover:text-white"
              >
                <Link href="/book-appointment" onClick={() => setIsOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
              <Button asChild className="w-full bg-[#017489] hover:bg-[#01667a] text-white">
                <Link href="/client-portal" onClick={() => setIsOpen(false)}>
                  Client Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
