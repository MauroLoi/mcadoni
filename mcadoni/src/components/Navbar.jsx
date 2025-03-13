import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-emerald-900 text-slate-50 flex flex-col justify-center items-center  p-10'>
        <h1 className='text-6xl text-amber-100'>MACELLERIA</h1>
        <h3 className='text-6xl pb-5 text-amber-100'>CADONI</h3>
        <p className='text-2xl pb-2 italic'>Vendita di carni nate e allevate in Sardegna, tra cui alcune dal nostro allevamento.</p>
        <p className=''>Villacidro, via Roma 236</p>
      </div>
      <div className='flex flex-row text-slate-50 text-2xl cursor-pointer justify-center gap-32 pl-32 p-3 bg-neutral-800'>
        <Link to="/" className='hover:text-neutral-400'>Carni</Link>
        <Link to="/preparati" className='hover:text-neutral-400'>Preparati</Link>
        <Link to="/suordinazione" className='hover:text-neutral-400'>Su ordinazione</Link>
        <Link to="" className='hover:text-neutral-400'>Altri prodotti</Link>
        <Link to="" className='hover:text-neutral-400'>Chi siamo</Link>
      </div>
    </>
  )
}

export default Navbar