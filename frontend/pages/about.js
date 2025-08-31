import { motion } from 'framer-motion'
import { GraduationCap, Users, Target, Award, Heart, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
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
            <GraduationCap className="w-24 h-24 mx-auto text-blue-600 mb-6" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're passionate about revolutionizing school management through innovative technology and user-centered design.
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        id="overview"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to transform educational administration, we've been at the forefront of school management innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Empowering Education</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our platform was born from the recognition that educational institutions need more than just basic management tools. 
                They need a comprehensive solution that understands the unique challenges of running schools in the modern world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We've worked closely with educators, administrators, and IT professionals to create a system that truly serves 
                the needs of educational communities while maintaining the highest standards of security and reliability.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Trusted by 500+ Schools</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Community-Driven</h4>
                    <p className="text-gray-600">Built with feedback from real educators</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Global Reach</h4>
                    <p className="text-gray-600">Serving schools across the world</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Passion for Education</h4>
                    <p className="text-gray-600">Committed to educational excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        id="mission"
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
            <h2 className="text-4xl font-bold text-white mb-6">Mission & Vision</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our commitment to transforming education through technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide educational institutions with innovative, reliable, and user-friendly management solutions 
                that empower administrators, teachers, and students to focus on what matters most: learning and growth.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become the global standard for educational management technology, creating a world where 
                every school can operate efficiently and every student can thrive in an optimized learning environment.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        id="team"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind our mission to revolutionize school management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "CEO & Founder",
                bio: "Former school principal with 15+ years in education technology",
                image: "/team/sarah.jpg"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                bio: "Tech veteran with expertise in scalable educational platforms",
                image: "/team/michael.jpg"
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Head of Education",
                bio: "Curriculum specialist and former university professor",
                image: "/team/emily.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of the educational revolution. Let's work together to create better learning environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/features">
                <motion.button 
                  className="btn-animate bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Features
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/documentation">
                <motion.button 
                  className="btn-animate bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-white hover:shadow-xl transition-all border border-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Documentation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
