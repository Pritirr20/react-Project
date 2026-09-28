import React from 'react'

const Heading1 = () => {
  return (
    <div>
        
        <h1 className="text-4xl text-red-400 font-bold">This is heading 1.</h1>

        <button className="w-50 h-50 m-10 bg-blue-500 text-white text-center border-4 border-black rounded-full font-semibold hover:bg-red-500">Login</button>

        <div className='h-200 w-200 border-2 border-black m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
          <div className='h-30 w-20 border-2 border-black'>Hello</div>
        </div>


    </div>
  )
}

export default Heading1