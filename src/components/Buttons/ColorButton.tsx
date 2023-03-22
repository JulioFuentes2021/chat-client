import React from 'react'

const ColorButton = ({ text }:{ text:string }) => {
  return (
    <button className='p-2 border-purple-400 border-2 h-12 rounded-lg text-white font-medium bg-purple-600'>
        { text }
    </button>
  )
}

export default ColorButton