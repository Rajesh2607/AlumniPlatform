import React, { useEffect, useState } from "react";
import { API_URL } from "../../data/api";
import { useParams } from "react-router-dom";
import AdminHeader from "../../components/AdminDashboard/AdminHeader";
import AdminSidebar from "../../components/AdminDashboard/AdminSidebar";
import { alumni, donation, student } from "../../constants/AdminDashboard";
import Dashboard from "../../components/AdminDashboard/Dashboard";
import Alumnis from "../../components/AdminDashboard/Alumnis";
import Students from "../../components/AdminDashboard/Students";

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);
  const [alumnis, setAlumnis] = useState([]);
  const [students, setStudents] = useState([]);
  const { adminId } = useParams();
  const [showDashboard, setShowDashboard] = useState(true);
  const [showAlumni, setShowAlumi] = useState(false);
  const [showStudent, setShowStudent] = useState(false)

  const adminData = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/all-admins/${adminId}`);
      const newData = await response.json();
      setAdmins(newData.admin);
      setAlumnis(newData.admin.alumni);
      setStudents(newData.admin.student);
      console.log("This is all admins data", newData.admin);
    } catch (error) {
      console.log(error);
      /* alert("Failed to fetch data") */
    }
  };

  const showDashboardHandler = () => {
    setShowAlumi(false);
    setShowStudent(false);
    setShowDashboard(true);
  };

  const showAlumniHandler = () => {
    setShowDashboard(false);
    setShowStudent(false);
    setShowAlumi(true);
  }

  const showStudentHandler = () => {
    setShowDashboard(false);
    setShowAlumi(false);
    setShowStudent(true);
  }

  useEffect(() => {
    adminData();
  }, [adminId]);
  return (
    <div>
      <div className="flex flex-col bg-background h-[100vh] overflow-x-hidden w-full">
        <AdminHeader name={admins.in_name} />
        <div className="flex w-full">
          <AdminSidebar showDashboardHandler={showDashboardHandler} showAlumniHandler={showAlumniHandler} showStudentHandler={showStudentHandler}/>
          {showDashboard && <Dashboard studentCount={Array.isArray(admins.student) ? admins.student.length : 0} alumniCount={Array.isArray(admins.alumni) ? admins.alumni.length : 0} showAlumniHandler={showAlumniHandler} showStudentHandler={showStudentHandler} />}
          {showAlumni && <Alumnis alumnis={alumnis} />}
          {showStudent && <Students students={students} />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
