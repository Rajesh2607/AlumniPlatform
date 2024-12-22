import React, { useEffect, useState } from 'react'
import AlumniHeader from '../../components/AlumniDashboard/AlumniHeader';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../data/api';
import AlumniSidebar from '../../components/AlumniDashboard/AlumniSidebar';
import Alumnis from '../../components/AlumniDashboard/Alumnis';
import AlumniEvents from '../../components/AlumniDashboard/AlumniEvents';
import Dashboard from '../../components/AlumniDashboard/Dashboard';
import Donations from '../../components/AlumniDashboard/Donations';
import ShowEvents from '../../components/AlumniDashboard/ShowEvents';

const AlumniDashboard = () => {
  const [events, setEvents] = useState(false);
  const [alumnis, setAlumnis] = useState([]);
  const [students, setStudents] = useState([]); 
  const [showDashboard, setShowDashboard] = useState(true);
  const [showAlumni, setShowAlumi] = useState(false);
  const [donation, setDonation] = useState(false);
  const { alumniId } = useParams();

  const showEventsHandler = () => {
    setShowDashboard(false)
    setShowAlumi(false);
    setEvents(true);
    setDonation(false)
  }

  const showDonationsHandler = () => {
    setShowDashboard(false)
    setShowAlumi(false);
    setEvents(false);
    setDonation(true)
  }

  const showAlumniHandler = () => {
    setShowDashboard(false);
    setEvents(false)
    setShowAlumi(true);
    setDonation(false);
  }

  const showDashboardHandler = () => {
    setShowAlumi(false);
    setEvents(false);
    setShowDashboard(true);
    setDonation(false);
  };

  const alumniData = async () => {
    try {
      const response = await fetch(`${API_URL}/alumni/${alumniId}`);
      const newData = await response.json();
      setAlumnis(newData.alumni);
      console.log("This is all alumni data", newData);
    } catch (error) {
      console.log(error);
      /* alert("Failed to fetch data") */
    }
  };
  useEffect(() => {
    alumniData();
  }, [alumniId]);
  return (
    <div className="flex flex-col bg-background h-[100vh] overflow-x-hidden overflow-auto w-full">
        <AlumniHeader clgName={alumnis.au_collage} alumniName={alumnis.au_name} />
        <div className="flex w-full">
          <AlumniSidebar showAlumniHandler={showAlumniHandler} showDonationsHandler={showDonationsHandler} showEventsHandler={showEventsHandler} showDashboardHandler={showDashboardHandler} />
          {showDashboard && <Dashboard author={alumnis._id}/>}
          {showAlumni && <Alumnis collageId={alumnis.admin} />}
          {/* {events && <AlumniEvents/>} */}
          {events && <ShowEvents/>}
          {donation && <Donations />}
        </div>
      </div>
  )
}

export default AlumniDashboard