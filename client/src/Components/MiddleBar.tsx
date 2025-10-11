import React from 'react'

function MiddleBar() {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-14 '>
        <h1 className='text-blue-950 text-2xl  hover:cursor-pointer font-[Inter] mt-2'>Services</h1>
        <h1 className='text-blue-950 text-2xl  hover:cursor-pointer font-[Inter] mt-2'>Experiences</h1>
        <h1 className='text-blue-950 text-2xl  hover:cursor-pointer font-[Inter] mt-2'>Products</h1>
      </div>
    </div>
  )
}

export default MiddleBar