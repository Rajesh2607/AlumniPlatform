import React, { useEffect, useState } from 'react'
import { alumni } from '../../constants/AdminDashboard';
import { API_URL } from '../../data/api';

const Alumnis = ({collageId}) => {
    const [alumnis, setAlumnis] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const adminData = async () => {
        try {
          const response = await fetch(`${API_URL}/alumni/all-alumni/${collageId}`);
          const newData = await response.json();
          setAlumnis(newData.alumni);
          console.log("This is all admins data", newData);
        } catch (error) {
          console.log(error);
          /* alert("Failed to fetch data") */
        }
      };

    const filterAlumnis = (alumnis) => {
        return alumnis.filter((s) => {
        const year = (new Date(s.au_from_year).getFullYear()).toString();

        return (
            s.au_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.au_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            year.includes(searchTerm)
        );
        });
    };

    useEffect(() => {
        adminData();
      }, [collageId]);

  return (
    <div className='m-4 w-full'>
      <div className='flex justify-between mx-4'>
        <h2 className='font-semibold text-2xl font-Montserrat'>Alumnis</h2>
        <input
          type="text"
          placeholder="Search by name, email, or year"
          className='border border-charcoal rounded-full font-OpenSans px-4 py-2 w-72'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        />
      </div>
      <div className='flex flex-wrap gap-6 font-OpenSans justify-center'>
        {filterAlumnis(alumnis).map((s) => (
          <div key={s._id} className='my-4 bg-white py-4 gap-1 px-6 rounded-xl flex flex-col justify-center items-center shadow-sm'>
            <img src={alumni} alt="" className='w-14 rounded-full' />
            <h2 className='font-medium text-lg capitalize font-Roboto'>{s.au_name}</h2>
            <p>{s.au_email}</p>
            <span className='flex gap-3'>
            <p>{s.au_contact}</p>
            <p>{new Date(s.au_to_year).getFullYear()} Batch</p>
            </span>
            <button className='bg-indian-red w-32 py-1 rounded-lg font-medium text-smoke'><a href={s.au_linkedin} target='_blank' > View Profile </a></button>
            <button className='bg-steel-blue w-32 py-1 rounded-lg font-medium text-smoke'>Message</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Alumnis