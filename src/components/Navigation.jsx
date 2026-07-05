import React, { useState } from 'react'
import { useGameStore } from '../store/gameStore'
import { FaHome, FaImage, FaUsers, FaUserFriends, FaTrophy, FaUser, FaBars, FaTimes } from 'react-icons/fa'

function Navigation({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const user = useGameStore((state) => state.user)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome },
    { id: 'challenges', label: 'Challenges', icon: FaImage },
    { id: 'clans', label: 'Clans', icon: FaUsers },
    { id: 'groups', label: 'Groups', icon: FaUserFriends },
    { id: 'leaderboard', label: 'Leaderboard', icon: FaTrophy },
    { id: 'profile', label: 'Profile', icon: FaUser },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-blue-900 border-b border-purple-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-4xl">📷</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">PictureIt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentPage === id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-purple-200 hover:bg-purple-700/50'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* User Stats */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-purple-800/50 px-4 py-2 rounded-lg">
              <span className="text-2xl">{user.avatar}</span>
              <div>
                <p className="text-sm text-purple-300">Level</p>
                <p className="text-lg font-bold text-white">{user.level}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg">
              <span className="text-xl">⭐</span>
              <div>
                <p className="text-sm text-blue-300">Points</p>
                <p className="text-lg font-bold text-white">{user.points.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentPage === id
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-200 hover:bg-purple-700/50'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
