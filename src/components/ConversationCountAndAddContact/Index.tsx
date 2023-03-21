import React from 'react'

const Index = () => {
  return (
    <section className='flex items-center justify-between p-2'>
        <div className='flex items-center gap-3'>
            <span className='font-bold'>Messages</span>
            <span className='font-semibold bg-gray-100 p-2 rounded-full'>40</span>
        </div>
        <span className='border border-gray-400 p-1 rounded-lg font-bold'>Icon</span>
    </section>
  )
}

export default Index