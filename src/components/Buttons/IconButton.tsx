import React from 'react'

const IconButton = ({ text }:{ text:string }) => {
  return (
    <button className='flex items-center p-2 h-12 gap-x-1 rounded-lg text-purple-500 font-medium bg-purple-100'>
        <span>Icon</span>
        { text }
    </button>
  )
}

export default IconButton