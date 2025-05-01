import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" w-66 h-12 px-5   justify-between items-center  flex  ">
        <div className=" flex gap-1 text-amber-300 hover:scale-105 hover:text-amber-400">
          <AiOutlineProduct className="w-8 h-8"   />
          <h1 className=''>.com</h1>
        </div>
        <Link className=" text-amber-600 hover:border-b hover:scale-105 " to='/'>
        Home
        </Link>
      </div>
  )
}

export default Header