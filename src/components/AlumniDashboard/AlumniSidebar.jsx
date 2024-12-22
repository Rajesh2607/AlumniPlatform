import React from 'react'

const AlumniSidebar = ({showAlumniHandler, showEventsHandler, showDashboardHandler, showDonationsHandler}) => {
  return (
    <div className='shadow bg-steel-blue max-md:hidden min-h-screen'>
        <ul className='flex flex-col gap-6 mx-8 text-lg font-Montserrat mt-6 '>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showDashboardHandler}>Home</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showAlumniHandler}>Network</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showEventsHandler}>Events</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer' onClick={showDonationsHandler}>Donation</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer'>Messaging</li>
            <li className='w-28 hover:bg-white hover:text-charcoal px-2 rounded-md py-1 text-white cursor-pointer'>Notification</li>
        </ul>
    </div>
  )
}

export default AlumniSidebar