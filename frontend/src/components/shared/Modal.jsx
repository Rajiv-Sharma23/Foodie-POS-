import React from 'react'

const Modal = ({isOpen , onClose,title, children}) => {
    if(!isOpen) return null
    

  return (
    <div className='fixed inset-0  flex justify-center items-center z-50'>
        <div className='bg-[#242323] shadow-lg w-full max-w-lg mx-2 rounded-lg p-2'>
            <div className='flex justify-between items-center px-6 py-2 border-b border-[#333]'>
                <h2 className='text-xl text-white font-semibold'>{title}</h2>
                <button className='text-white text-3xl cursor-pointer ' onClick={onClose}>&times;</button>
            </div>
            <div className='p-4'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal