import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, MapPin, Eye, Plus, GraduationCap, Filter, Trash2, X, Phone, Mail, Calendar } from 'lucide-react'
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

  useEffect(() => {
    fetchSchools()
  }, [])

  useEffect(() => {
    filterSchools()
  }, [searchTerm, selectedCity, selectedState, schools])

  const fetchSchools = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/schools`)
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

  const deleteSchool = async (schoolId, schoolName) => {
    if (window.confirm(`Are you sure you want to delete "${schoolName}"? This action cannot be undone.`)) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/schools/${schoolId}`)
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

  const getImageUrl = (imageName) => {
    if (!imageName) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBDMTEwLjQ1NyA2MCAxMTkgNjguNTQzIDExOSA3OEMxMTkgODcuNDU3IDExMC40NTcgOTYgMTAwIDk2Qzg5LjU0MyA5NiA4MSA4Ny40NTcgODEgNzhDOC4xIDY4LjU0MyA4MSA2MCAxMDAgNjBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0xMDAgMTE2QzExMC40NTcgMTE2IDExOSAxMDcuNDU3IDExOSA5OEMxMTkgODguNTQzIDExMC40NTcgODAgMTAwIDgwQzg5LjU0MyA4MCA4MSA4OC41NDMgODEgOThDOC4xIDEwNy40NTcgODEgMTE2IDEwMCAxMTZaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo='
    return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/schoolImages/${imageName}`
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
      <motion.div
        className="max-w-7xl mx-auto px-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="glass rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search schools by name, address, or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus transition-all"
                />
              </div>
            </div>

            {/* City Filter */}
            <div className="w-full lg:w-48">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus transition-all"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div className="w-full lg:w-48">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus transition-all"
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors"
            >
              Clear
            </button>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-green-600">{filteredSchools.length}</span> of{' '}
              <span className="font-semibold text-gray-800">{schools.length}</span> schools
            </p>
          </div>
        </div>
      </motion.div>

      {/* Schools Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {filteredSchools.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No schools found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search criteria or add a new school</p>
            <Link href="/addSchool">
              <motion.button
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add New School
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredSchools.map((school, index) => (
                <motion.div
                  key={school.id}
                  className="glass rounded-2xl overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  layout
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                                         <img
                       src={getImageUrl(school.image)}
                       alt={school.name}
                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                       onError={(e) => {
                         // Show a placeholder when image fails to load
                         e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBDMTEwLjQ1NyA2MCAxMTkgNjguNTQzIDExOSA3OEMxMTkgODcuNDU3IDExMC40NTcgOTYgMTAwIDk2Qzg5LjU0MyA5NiA4MSA4Ny40NTcgODEgNzhDOC4xIDY4LjU0MyA4MSA2MCAxMDAgNjBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0xMDAgMTE2QzExMC40NTcgMTE2IDExOSAxMDcuNDU3IDExOSA5OEMxMTkgODguNTQzIDExMC40NTcgODAgMTAwIDgwQzg5LjU0MyA4MCA4MSA4OC41NDMgODEgOThDOC4xIDEwNy40NTcgODEgMTE2IDEwMCAxMTZaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo='
                       }}
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {school.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {school.address}, {school.city}, {school.state}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                                             <motion.button
                         className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         onClick={() => openSchoolDetails(school)}
                       >
                        <div className="flex items-center justify-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </div>
                      </motion.button>
                      
                      <motion.button
                        className="px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => deleteSchool(school.id, school.name)}
                        title="Delete School"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
                 )}
       </div>

       {/* School Details Modal */}
       <AnimatePresence>
         {showModal && selectedSchool && (
           <motion.div
             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={closeSchoolDetails}
           >
             <motion.div
               className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               onClick={(e) => e.stopPropagation()}
             >
               {/* Header */}
               <div className="relative">
                 {/* Image */}
                 <div className="relative h-64 overflow-hidden rounded-t-2xl">
                   <img
                     src={getImageUrl(selectedSchool.image)}
                     alt={selectedSchool.name}
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNjBDMTEwLjQ1NyA2MCAxMTkgNjguNTQzIDExOSA3OEMxMTkgODcuNDU3IDExMC40NTcgOTYgMTAwIDk2Qzg5LjU0MyA5NiA4MSA4Ny40NTcgODEgNzhDOC4xIDY4LjU0MyA4MSA2MCAxMDAgNjBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0xMDAgMTE2QzExMC40NTcgMTE2IDExOSAxMDcuNDU3IDExOSA5OEMxMTkgODguNTQzIDExMC40NTcgODAgMTAwIDgwQzg5LjU0MyA4MCA4MSA4OC41NDMgODEgOThDOC4xIDEwNy40NTcgODEgMTE2IDEwMCAxMTZaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo='
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                   
                   {/* Close Button */}
                   <motion.button
                     className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all"
                     onClick={closeSchoolDetails}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                   >
                     <X className="w-5 h-5" />
                   </motion.button>
                 </div>
               </div>

               {/* Content */}
               <div className="p-6">
                 <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedSchool.name}</h2>
                 
                 <div className="space-y-4">
                   {/* Address */}
                   <div className="flex items-start gap-3">
                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                       <MapPin className="w-5 h-5 text-blue-600" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                       <p className="text-gray-600">{selectedSchool.address}, {selectedSchool.city}, {selectedSchool.state}</p>
                     </div>
                   </div>

                   {/* Contact */}
                   <div className="flex items-start gap-3">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                       <Phone className="w-5 h-5 text-green-600" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-gray-800 mb-1">Contact</h3>
                       <p className="text-gray-600">{selectedSchool.contact}</p>
                     </div>
                   </div>

                   {/* Email */}
                   <div className="flex items-start gap-3">
                     <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                       <Mail className="w-5 h-5 text-purple-600" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                       <p className="text-gray-600">{selectedSchool.email_id}</p>
                     </div>
                   </div>

                   {/* Created Date */}
                   <div className="flex items-start gap-3">
                     <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                       <Calendar className="w-5 h-5 text-orange-600" />
                     </div>
                     <div>
                       <h3 className="font-semibold text-gray-800 mb-1">Added On</h3>
                       <p className="text-gray-600">
                         {new Date(selectedSchool.created_at).toLocaleDateString('en-US', {
                           year: 'numeric',
                           month: 'long',
                           day: 'numeric'
                         })}
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Action Buttons */}
                 <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                   <motion.button
                     className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => {
                       // You can add edit functionality here
                       toast.success(`Edit functionality coming soon for ${selectedSchool.name}`)
                     }}
                   >
                     Edit School
                   </motion.button>
                   
                   <motion.button
                     className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all"
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => {
                       closeSchoolDetails()
                       deleteSchool(selectedSchool.id, selectedSchool.name)
                     }}
                   >
                     Delete School
                   </motion.button>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </div>
   )
 }
