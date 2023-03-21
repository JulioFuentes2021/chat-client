import React from 'react'

const MessageCards = () => {
  return (
    <section className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MGp9k4ydFlS7ilVaLvZJfXQzyvp049lb8w&usqp=CAU" className='w-16 h-16 rounded-full' alt="" />
        <div className='flex flex-col mx-5'>
          <span className='font-bold'>Phoenix Baker</span>
          <span className='text-gray-700'>@Phoenix</span>
        </div>
      </div>
      <span className='text-gray-700 font-medium'>
        5min ago
      </span>
    </section>
  )
}

export default MessageCards