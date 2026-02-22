import React from 'react'

const UserCards = ({username}) => {
  return (
    <div>
        <div className='flex items-center justify-between p-4 border 
                        border-gray-200 rounded-xl'>
          <p className='font-medium text-gray-700'>{username}</p>
          <button className='bg-gray-800 hover:bg-gray-900 text-white 
                             px-4 py-2 rounded-lg transition'>
            Send
          </button>
        </div>
    </div>
  )
}

export default UserCards