import React from 'react'
import { alumni } from '../../constants/AdminDashboard'

const AlumniHeader = ({clgName, alumniName}) => {
  return (
    <header className=' bg-white'>
      <nav className='mx-14 my-4 flex justify-between'>
        <h1 className='text-2xl font-bold font-Montserrat'>{clgName}</h1>
        <div className='flex items-center gap-3'>
        <h2 className='font-semibold text-lg font-Montserrat capitalize'>{alumniName}</h2>
        <img src={alumni} alt="alumni" className='w-10 rounded-full'/>
        </div>
      </nav>
    </header>
  )
}

export default AlumniHeader