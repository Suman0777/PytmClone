import React from 'react'

const Homepage = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4'>
      
      <div className='bg-white w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6'>
        
        {/* Search Section */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            placeholder='Search user'
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-gray-400
                       transition'
          />
          <button className='bg-gray-800 hover:bg-gray-900 text-white 
                             px-4 py-2 rounded-lg transition'>
            Search
          </button>
        </div>

        {/* User Card */}
        <div className='flex items-center justify-between p-4 border 
                        border-gray-200 rounded-xl'>
          <p className='font-medium text-gray-700'>User 1</p>
          <button className='bg-gray-800 hover:bg-gray-900 text-white 
                             px-4 py-2 rounded-lg transition'>
            Send
          </button>
        </div>

      </div>
    </div>
  )
}

export default Homepage