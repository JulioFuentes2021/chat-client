import React from 'react'
import SendMessageInput from './SendMessageInput';
import ColorButton from '../Buttons/ColorButton';

const InputContainer = () => {
  return (
    <div className='flex border-2 border-gray-400 items-end p-2'>
        <SendMessageInput />
        <ColorButton text='Send' />
    </div>
  )
}

export default InputContainer