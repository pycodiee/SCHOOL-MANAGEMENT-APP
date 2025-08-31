import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Code, Play, ArrowRight, CheckCircle, Download, ExternalLink, Search } from 'lucide-react'
import Link from 'next/link'

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BookOpen className="w-24 h-24 mx-auto text-blue-600 mb-6" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Documentation
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to know about using our School Management platform effectively.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section 
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Getting Started",
                description: "Quick setup guide for new users",
                icon: Play,
                color: "blue",
                href: "#getting-started"
              },
              {
                title: "API Reference",
                description: "Complete API documentation",
                icon: Code,
                color: "green",
                href: "#api"
              },
              {
                title: "Tutorials",
                description: "Step-by-step guides",
                icon: BookOpen,
                color: "purple",
                href: "#tutorials"
              }
            ].map((item, index) => {
              const Icon = item.icon
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600"
              }
              
              return (
                <motion.div
                  key={index}
                  className="glass rounded-2xl p-8 text-center card-hover cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className={`w-16 h-16 ${colorClasses[item.color]} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Getting Started Section */}
      <motion.section 
        id="getting-started"
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Getting Started</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to get your school management system up and running
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Account Setup",
                description: "Create your account and verify your email address",
                details: "Sign up with your school email and complete the verification process. You'll receive a welcome email with your login credentials."
              },
              {
                step: "2",
                title: "School Information",
                description: "Add your school's basic information and details",
                details: "Fill in your school name, address, contact information, and upload your school logo. This information will be used throughout the system."
              },
              {
                step: "3",
                title: "User Management",
                description: "Invite staff members and set up roles",
                details: "Create user accounts for your staff members and assign appropriate roles and permissions based on their responsibilities."
              },
              {
                step: "4",
                title: "Data Import",
                description: "Import existing student and staff data",
                details: "Use our CSV import tools to bulk upload your existing student and staff information, or add them manually one by one."
              },
              {
                step: "5",
                title: "Customization",
                description: "Customize the system to match your needs",
                details: "Configure academic terms, grading scales, attendance policies, and other settings to match your school's specific requirements."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                    <p className="text-gray-600 leading-relaxed">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* API Reference Section */}
      <motion.section 
        id="api"
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">API Reference</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Integrate our platform with your existing systems using our RESTful API
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass rounded-2xl p-8 bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Authentication</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-white/90 text-sm font-mono">POST /api/auth/login</p>
                  <p className="text-white/70 text-sm mt-2">Authenticate with email and password</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-white/90 text-sm font-mono">POST /api/auth/refresh</p>
                  <p className="text-white/70 text-sm mt-2">Refresh access token</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 bg-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Schools API</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-white/90 text-sm font-mono">GET /api/schools</p>
                  <p className="text-white/70 text-sm mt-2">Retrieve all schools</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-white/90 text-sm font-mono">POST /api/schools</p>
                  <p className="text-white/70 text-sm mt-2">Create new school</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/api-docs">
              <motion.button 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full API Docs
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Tutorials Section */}
      <motion.section 
        id="tutorials"
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Video Tutorials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from our comprehensive video tutorials and step-by-step guides
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started Guide",
                duration: "15 min",
                description: "Complete walkthrough of the platform setup",
                thumbnail: "/tutorials/getting-started.jpg",
                category: "Beginner"
              },
              {
                title: "User Management",
                duration: "12 min",
                description: "Learn how to manage users and permissions",
                thumbnail: "/tutorials/user-management.jpg",
                category: "Intermediate"
              },
              {
                title: "Data Import & Export",
                duration: "20 min",
                description: "Bulk import and export your school data",
                thumbnail: "/tutorials/data-import.jpg",
                category: "Advanced"
              },
              {
                title: "Reporting & Analytics",
                duration: "18 min",
                description: "Create custom reports and analyze data",
                thumbnail: "/tutorials/reporting.jpg",
                category: "Intermediate"
              },
              {
                title: "API Integration",
                duration: "25 min",
                description: "Integrate with external systems",
                thumbnail: "/tutorials/api-integration.jpg",
                category: "Advanced"
              },
              {
                title: "Mobile App Usage",
                duration: "10 min",
                description: "Use our mobile app effectively",
                thumbnail: "/tutorials/mobile-app.jpg",
                category: "Beginner"
              }
            ].map((tutorial, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600">{tutorial.category}</span>
                    <span className="text-sm text-gray-500">{tutorial.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{tutorial.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{tutorial.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Watch Tutorial
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Resources Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Additional Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download guides, templates, and other helpful resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "User Manual", icon: BookOpen, color: "blue" },
              { name: "API Guide", icon: Code, color: "green" },
              { name: "Data Templates", icon: Download, color: "purple" },
              { name: "Best Practices", icon: CheckCircle, color: "orange" }
            ].map((resource, index) => {
              const Icon = resource.icon
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600"
              }
              
              return (
                <motion.div
                  key={index}
                  className="glass rounded-2xl p-6 text-center card-hover cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-16 h-16 ${colorClasses[resource.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.name}</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Download PDF
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Need More Help?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="btn-animate bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/community">
                <motion.button 
                  className="btn-animate bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-white hover:shadow-xl transition-all border border-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
