import { motion } from 'framer-motion'
import { BookOpen, Plus, Eye, GraduationCap, Shield, BarChart3, Users, Zap, ArrowRight, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Main Heading */}
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
            <GraduationCap className="w-24 h-24 mx-auto text-blue-600 mb-6" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            School Management
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A comprehensive platform for managing school information with beautiful, 
            responsive design and powerful features. Streamline your educational institution's operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/addSchool">
              <motion.button 
                className="btn-animate bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/showSchools">
              <motion.button 
                className="btn-animate bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-white hover:shadow-xl transition-all border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                Explore Schools
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Schools Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers cutting-edge features designed to revolutionize school management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="glass rounded-2xl p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Easy Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive interface for managing school data with drag-and-drop functionality
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="glass rounded-2xl p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Analytics & Reports</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive insights and detailed reports for data-driven decisions
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="glass rounded-2xl p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with 99.9% uptime and data encryption
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="glass rounded-2xl p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized performance with instant loading and real-time updates
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              className="glass rounded-2xl p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Multi-User Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Role-based access control with unlimited user management
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div 
              className="glass rounded-2xl p-8 text-center card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock customer support with dedicated success managers
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Users Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Principal, St. Mary's High",
                text: "This platform has transformed how we manage our school. The interface is intuitive and the features are exactly what we needed.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Administrator, DPS",
                text: "The analytics and reporting features have given us insights we never had before. Highly recommended for any educational institution.",
                rating: 5
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Director, KV Bangalore",
                text: "Outstanding platform with excellent support. It has streamlined our entire administrative process significantly.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of educational institutions already using our platform to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/addSchool">
                <motion.button 
                  className="btn-animate bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/features">
                <motion.button 
                  className="btn-animate bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-white hover:shadow-xl transition-all border border-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-5 h-5" />
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="text-center py-12 text-gray-600 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">&copy; 2024 School Management System. Built with Next.js and MySQL.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="/documentation" className="hover:text-blue-600 transition-colors">Documentation</Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
