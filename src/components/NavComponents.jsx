import React from 'react'
import { Link } from 'react-router-dom'

const linkClass =
  'rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ' +
  'sm:px-5 lg:px-6 lg:text-base'

const NavComponents = () => {
  return (
    <div className='flex items-center justify-between border-t border-slate-100 px-3 py-3 text-blue-950 lg:px-8 lg:py-4'>
      <Link to='/' className={linkClass}>Home</Link>
      <Link to='/products' className={linkClass}>Products</Link>
      <Link to='/categories' className={linkClass}>Categories</Link>
      <Link to='/contact' className={linkClass}>Contact</Link>
    </div>
  )
}

export default NavComponents