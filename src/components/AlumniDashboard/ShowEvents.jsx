import React, { useEffect, useState } from 'react';
import { API_URL } from '../../data/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/event/all-events`);
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
  };

  return (
    <div className='w-full my-6 flex gap-6 flex-col mx-14'>
        <div className='flex justify-between'>
        <h2 className='font-semibold text-xl'>Upcoming Events</h2>
        <button className='bg-lilac rounded-xl w-40 py-2'> <Link to='/post-event'>Post Event</Link> </button>
        </div>
      {events.map((e) => (
        <div className="bg-white text-black px-10 py-5 rounded-lg ">
        <div className="flex justify-between font-OpenSans">
          <h2 className="font-medium text-lg font-Roboto">{e.title}</h2>
          <div className="flex gap-4">
          <p>{formatDate(e.eventDate)}</p>
          <p className="text-celectic-blue font-mono">{e.mode}</p>
          </div>
        </div>
        <div className="font-OpenSans my-2">
          <p>{e.description}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default ShowEvents;
