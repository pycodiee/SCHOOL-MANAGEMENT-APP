import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { ArrowLeft, Upload, School, MapPin, Phone, Mail, Save } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function AddSchool() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm()

  const email = watch('email_id')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB')
        return
      }
      
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file')
        return
      }

      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (data) => {
    if (!selectedImage) {
      toast.error('Please select an image')
      return
    }

    if (!validateEmail(data.email_id)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('address', data.address)
      formData.append('city', data.city)
      formData.append('state', data.state)
      formData.append('contact', data.contact)
      formData.append('email_id', data.email_id)
      formData.append('image', selectedImage)

      const response = await axios.post('http://localhost:5000/api/schools', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      toast.success('School added successfully!')
      reset()
      setSelectedImage(null)
      setImagePreview(null)
      
      // Redirect to show schools page after a short delay
      setTimeout(() => {
        router.push('/showSchools')
      }, 1500)

    } catch (error) {
      console.error('Error adding school:', error)
      toast.error(error.response?.data?.error || 'Failed to add school')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <School className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Add New School
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Register a new school with comprehensive information and beautiful imagery
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="glass rounded-2xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* School Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School Name *
              </label>
              <input
                type="text"
                {...register('name', { required: 'School name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus transition-all"
                placeholder="Enter school name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  {...register('address', { required: 'Address is required' })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus transition-all"
                  placeholder="Enter complete address"
                />
              </div>
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            {/* City and State */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  {...register('city', { required: 'City is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus transition-all"
                  placeholder="Enter city"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  {...register('state', { required: 'State is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus transition-all"
                  placeholder="Enter state"
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                )}
              </div>
            </div>

            {/* Contact and Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    {...register('contact', { 
                      required: 'Contact number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit contact number'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus transition-all"
                    placeholder="Enter 10-digit number"
                  />
                </div>
                {errors.contact && (
                  <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    {...register('email_id', { 
                      required: 'Email is required',
                      validate: value => validateEmail(value) || 'Please enter a valid email'
                    })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent input-focus transition-all"
                    placeholder="Enter email address"
                  />
                </div>
                {errors.email_id && (
                  <p className="mt-1 text-sm text-red-600">{errors.email_id.message}</p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School Image *
              </label>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">
                      Click to upload image (Max 5MB)
                    </span>
                  </label>
                </div>
                
                {imagePreview && (
                  <motion.div
                    className="relative inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null)
                        setImagePreview(null)
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-animate w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Adding School...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" />
                  Add School
                </div>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
