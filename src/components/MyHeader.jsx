import React from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const MyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) => `transition-colors hover:text-red-500 hover:border-b border-red-500 ${isActive ? 'text-red-500 border-b border-red-500' : ''}`

  return (
    <div>
      <header className='bg-gray-900 text-white p-4 flex flex-col text-xl shadow-2xl'>
        <div className=' flex justify-between items-center'>
          <h1>Movie<span className='text-red-500'>Zone</span></h1>
          <nav>
            <div className='hidden min-[600px]:flex gap-4'>
              <NavLink className={navLinkClass} to='/'>Kezdőlap</NavLink>
              <NavLink className={navLinkClass} to='/movies'>Filmek</NavLink>
              <NavLink className={navLinkClass} to='/tv'>Sorozatok</NavLink>
              <NavLink className={navLinkClass} to='/search'>Keresés</NavLink>
            </div>
            <div className='min-[600px]:hidden'>
              <button onClick={() => setMenuOpen(!menuOpen)} className='text-red-500 text-2xl flex items-center'>
                {menuOpen ? <IoClose /> : <IoMdMenu />}
              </button>
            </div>
          </nav>
        </div>
        <div className='min-[600px]:hidden'>
          {menuOpen && <div className='flex flex-col gap-2 mt-5 text-center'>
          <NavLink className={navLinkClass} to='/'>Kezdőlap</NavLink>
          <NavLink className={navLinkClass} to='/movies'>Filmek</NavLink>
          <NavLink className={navLinkClass} to='/tv'>Sorozatok</NavLink>
          <NavLink className={navLinkClass} to='/search'>Keresés</NavLink>
        </div>}
        </div>

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
