import { motion } from 'framer-motion'
import { GraduationCap, BarChart3, Shield, Users, Zap, BookOpen, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
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
            Features
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the powerful tools and capabilities that make our platform the choice for modern educational institutions.
          </motion.p>
        </div>
      </motion.section>

      {/* School Management Section */}
      <motion.section 
        id="management"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">School Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools for managing every aspect of your educational institution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Student Records",
                description: "Complete student information management with academic history, attendance, and performance tracking",
                color: "blue"
              },
              {
                icon: Users,
                title: "Staff Management",
                description: "Comprehensive staff directory with role-based access control and performance monitoring",
                color: "green"
              },
              {
                icon: GraduationCap,
                title: "Academic Programs",
                description: "Manage curriculum, courses, and academic programs with flexible scheduling options",
                color: "purple"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Advanced analytics and reporting for data-driven decision making",
                color: "orange"
              },
              {
                icon: Shield,
                title: "Security & Privacy",
                description: "Enterprise-grade security with role-based permissions and data encryption",
                color: "red"
              },
              {
                icon: Zap,
                title: "Real-time Updates",
                description: "Instant notifications and real-time synchronization across all devices",
                color: "teal"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600",
                red: "bg-red-100 text-red-600",
                teal: "bg-teal-100 text-teal-600"
              }
              
              return (
                <motion.div
                  key={index}
                  className="glass rounded-2xl p-8 text-center card-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-16 h-16 ${colorClasses[feature.color]} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Analytics & Reports Section */}
      <motion.section 
        id="analytics"
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
            <h2 className="text-4xl font-bold text-white mb-6">Analytics & Reports</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transform data into actionable insights with our comprehensive analytics suite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Data-Driven Decisions</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Our advanced analytics platform provides real-time insights into student performance, 
                attendance patterns, and institutional effectiveness. Make informed decisions with 
                comprehensive dashboards and customizable reports.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">Real-time performance tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">Custom report generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">Predictive analytics</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 bg-white/10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80">Reports Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-white/80">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80">Real-time Monitoring</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Security Features Section */}
      <motion.section 
        id="security"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Security Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security to protect your institution's sensitive data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Data Protection</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Regular security audits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">GDPR compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Secure data centers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Access Control</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Role-based permissions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Multi-factor authentication</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Session management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Audit logging</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Simple Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your institution's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                period: "/month",
                description: "Perfect for small schools",
                features: ["Up to 500 students", "Basic reporting", "Email support", "Standard security"],
                popular: false
              },
              {
                name: "Professional",
                price: "$199",
                period: "/month",
                description: "Ideal for growing institutions",
                features: ["Up to 2000 students", "Advanced analytics", "Priority support", "Enhanced security", "Custom integrations"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large institutions",
                features: ["Unlimited students", "Full analytics suite", "24/7 support", "Maximum security", "Custom development"],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`glass rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/addSchool">
                  <motion.button 
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of schools already using our platform to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/addSchool">
                <motion.button 
                  className="btn-animate bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/documentation">
                <motion.button 
                  className="btn-animate bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-white hover:shadow-xl transition-all border border-gray-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Documentation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
