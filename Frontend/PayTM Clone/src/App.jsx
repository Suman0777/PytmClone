import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from '../pages/Homepage'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App