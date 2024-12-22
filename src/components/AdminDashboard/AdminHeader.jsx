import React from 'react'

const AdminHeader = ({name}) => {
  return (
    <header className=' bg-white'>
      <nav className='mx-14 my-4'>
        <h1 className='text-2xl font-bold font-Montserrat'>{name}</h1>
      </nav>
    </header>
  )
}

export default AdminHeader