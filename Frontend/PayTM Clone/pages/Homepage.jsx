import React, { useState } from 'react'
import UserCards from '../Component/UserCards'

const Homepage = () => {

  const [inputname, setinputname] = useState("");

  const user = [
    {id: 1, name: "suman"},
    {id: 2, name: "ajay"},
    {id: 3, name: "user"},
    {id: 4, name: "userkabck"},
  ]

  const filterusers = user.filter((u) =>
    u.name.toLowerCase().includes(inputname.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4'>
      
      <div className='bg-white w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6'>
        
        {/* Search Section */}
        <div className='flex gap-3'>
          <input 
            type="text" 
            placeholder='Search user'
            value={inputname}
            onChange={(e) => setinputname(e.target.value)}  
            className='flex-1 px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-gray-400
                       transition'
          />
        </div>

        {/* User Cards */}
        <div className="space-y-3">
          {filterusers.length > 0 ? (
            filterusers.map((u) => (
              <UserCards key={u.id} username={u.name} />
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">
              No users found
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Homepage