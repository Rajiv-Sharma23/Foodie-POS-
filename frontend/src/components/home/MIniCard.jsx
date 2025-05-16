import React from 'react'

const MIniCard = ({title,icon,number,footerNo}) => {
  return (
    <div className='bg-two p-5 rounded-2xl w-1/2 '>
      <div className='flex justify-between mb-2'>
        <h1 className='tracking-wide text-sm font-semibold'>{title}</h1>
        <button className={`${title === 'Total Earnings' ? "text-green-500" : "text-yellow-500"}`}>{icon}</button>
      </div>

      <div >
        <h2 className='text-2xl font-bold'>{number}</h2>
        <h2 className='text-sm  font-semibold'><span className='text-green-500'>{footerNo}</span> than yesterday</h2>
      </div>
    </div>
  )
}

export default MIniCard