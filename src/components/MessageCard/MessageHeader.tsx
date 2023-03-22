import React from 'react'
import ContactHeader from '../GlobalComponents/ContactHeader';

const MessageCards = () => {
  return (
    <section className='flex justify-between items-center'>
      <ContactHeader />
      <span className='text-gray-700 font-medium'>
        5min ago
      </span>
    </section>
  )
}

export default MessageCards