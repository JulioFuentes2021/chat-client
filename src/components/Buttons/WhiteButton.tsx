import React from 'react'

const WhiteButton = ({ text }:{ text:string }) => {
  return (
    <button className='p-2 border-gray-300 h-12 border-2 rounded-lg text-gray-800 font-medium'>
        { text }
    </button>
  )
}

export default WhiteButton