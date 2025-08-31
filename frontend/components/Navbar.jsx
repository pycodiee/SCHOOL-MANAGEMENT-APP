import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, Home, Plus, Eye, User, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const router = useRouter()

  const navItems = [
    { name: 'About', href: '/about', icon: User },
    { name: 'Features', href: '/features', icon: BookOpen },
    { name: 'Documentation', href: '/documentation', icon: Eye },
  ]

  const isActive = (href) => router.pathname === href

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  School Management
                </h1>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive(item.href)
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                  
                  {/* Hover Dropdown */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-2">
                          {item.name === 'About' && (
                            <>
                              <Link href="/about#overview">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Overview
                                </div>
                              </Link>
                              <Link href="/about#team">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Our Team
                                </div>
                              </Link>
                              <Link href="/about#mission">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Mission & Vision
                                </div>
                              </Link>
                            </>
                          )}
                          {item.name === 'Features' && (
                            <>
                              <Link href="/features#management">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  School Management
                                </div>
                              </Link>
                              <Link href="/features#analytics">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Analytics & Reports
                                </div>
                              </Link>
                              <Link href="/features#security">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Security Features
                                </div>
                              </Link>
                            </>
                          )}
                          {item.name === 'Documentation' && (
                            <>
                              <Link href="/documentation#getting-started">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Getting Started
                                </div>
                              </Link>
                              <Link href="/documentation#api">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  API Reference
                                </div>
                              </Link>
                              <Link href="/documentation#tutorials">
                                <div className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                  Tutorials
                                </div>
                              </Link>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/addSchool">
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-4 h-4" />
                <span className="font-medium">Add School</span>
              </motion.button>
            </Link>
            
            <Link href="/showSchools">
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4" />
                <span className="font-medium">View Schools</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-lg">{item.name}</span>
                    </motion.div>
                  </Link>
                )
              })}
              
              {/* Mobile User Profile */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 px-4 py-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Admin User</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
