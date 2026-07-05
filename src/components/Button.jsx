import React from 'react'

export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </button>
  )
}
