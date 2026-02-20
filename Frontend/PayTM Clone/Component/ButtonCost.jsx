import React, { useState } from 'react'

const ButtonCost = ({ typer,textname}) => {
  const [sub, setsub] = useState(false);
  return (
    <div>
      <button onClick={()=> setsub(true)} type={typer} className="text-white bg-black box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none cursor-pointer">{textname}</button>
    </div>
  )
}

export default ButtonCost