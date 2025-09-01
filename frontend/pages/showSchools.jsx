import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Eye, GraduationCap, Trash2, X, Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function ShowSchools() {
  const [schools, setSchools] = useState([])
  const [filteredSchools, setFilteredSchools] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [cities, setCities] = useState([])
  const [states, setStates] = useState([])
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // ✅ Define apiUrl once
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000").replace(/\/$/, "")

  useEffect(() => {
    fetchSchools()
  }, [])

  useEffect(() => {
    filterSchools()
  }, [searchTerm, selectedCity, selectedState, schools])

  const fetchSchools = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${apiUrl}/api/schools`)
      setSchools(response.data)

      // Extract unique cities and states for filters
      const uniqueCities = [...new Set(response.data.map(school => school.city))]
      const uniqueStates = [...new Set(response.data.map(school => school.state))]
      setCities(uniqueCities)
      setStates(uniqueStates)
    } catch (error) {
      console.error('Error fetching schools:', error)
      toast.error('Failed to fetch schools')
    } finally {
      setLoading(false)
    }
  }

  const filterSchools = () => {
    let filtered = schools

    if (searchTerm) {
      filtered = filtered.filter(school =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCity) {
      filtered = filtered.filter(school => school.city === selectedCity)
    }

    if (selectedState) {
      filtered = filtered.filter(school => school.state === selectedState)
    }

    setFilteredSchools(filtered)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCity('')
    setSelectedState('')
  }

  // ✅ Delete school using apiUrl
  const deleteSchool = async (schoolId, schoolName) => {
    if (window.confirm(`Are you sure you want to delete "${schoolName}"? This action cannot be undone.`)) {
      try {
        await axios.delete(`${apiUrl}/api/schools/${schoolId}`)
        toast.success(`"${schoolName}" deleted successfully`)
        fetchSchools() // Refresh the list
      } catch (error) {
        console.error('Error deleting school:', error)
        toast.error('Failed to delete school')
      }
    }
  }

  const openSchoolDetails = (school) => {
    setSelectedSchool(school)
    setShowModal(true)
  }

  const closeSchoolDetails = () => {
    setShowModal(false)
    setSelectedSchool(null)
  }

  // ✅ Fix image URLs
  const getImageUrl = (imageName) => {
    if (!imageName)
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBDMTEwLjQ1NyA2MCAxMTkgNjguNTQzIDExOSA3OEMxMTkgODcuNDU3IDExMC40NTcgOTYgMTAwIDk2Qzg5LjU0MyA5NiA4MSA4Ny40NTcgODEgNzhDOC4xIDY4LjU0MyA4MSA2MCAxMDAgNjBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0xMDAgMTE2QzExMC40NTcgMTE2IDExOSAxMDcuNDU3IDExOSA5OEMxMTkgODguNTQzIDExMC40NTcgODAgMTAwIDgwQzg5LjU0MyA4MCA4MSA4OC41NDMgODEgOThDOC4xIDEwNy40NTcgODEgMTE2IDEwMCAxMTZaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo='
    return `${apiUrl}/schoolImages/${imageName}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading schools...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <motion.header 
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore Schools
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing educational institutions with our beautiful e-commerce style layout
        </p>
      </motion.header>

      {/* Filters and Search */}
      {/* ... keep rest of your UI unchanged ... */}
    </div>
  )
}
