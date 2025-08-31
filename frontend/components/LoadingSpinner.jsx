import { motion } from 'framer-motion'

export default function LoadingSpinner({ size = 'md', text = 'Loading...' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${sizeClasses[size]} border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4`}></div>
      {text && (
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  )
}
