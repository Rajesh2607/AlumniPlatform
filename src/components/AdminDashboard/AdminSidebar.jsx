import React from 'react'

const AdminSidebar = ({showDashboardHandler, showAlumniHandler, showStudentHandler}) => {
  return (
    <div className='shadow bg-steel-blue max-md:hidden h-screen'>
        <ul className='flex flex-col gap-6 mx-8 text-lg font-Montserrat mt-6 '>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white'>Profile</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showDashboardHandler}>Dahboard</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showAlumniHandler}>Alumni</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showStudentHandler}>Student</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white'>Events</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white'>Inbox</li>
        </ul>
    </div>
  )
}

export default AdminSidebar