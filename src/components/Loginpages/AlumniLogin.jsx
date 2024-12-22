import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {loginimg, networking1 } from "../../constants/LandingPage";
import {API_URL} from '../../data/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AlumniLogin() {
  const [au_email, setEmail] = useState("");
  const [au_password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/alumni/alumni-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ au_email, au_password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.success);
        //alert(data.success);
        localStorage.setItem("loginToken", data.token);
        localStorage.setItem("alumniId", data.alumniId);
        localStorage.setItem("adminId", data.adminId);
        setEmail("")
        setPassword("")
        navigate(`/alumni/${data.alumniId}`, { replace: true });
        /* window.location.reload() */
      }else{
        toast.error(data.error);
        //alert(data.error)
      }
    } catch (error) {
      //alert("Login Failed")
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:mx-24 mx-10 md:gap-10 my-4">
      <ToastContainer />
      <Lottie animationData={loginimg} className="md:w-1/2 max-md:hidden" ></Lottie>
    <div className="md:w-1/2 max-md:mt-8 w-full">
      <h1 className="sm:text-3xl text-2xl font-bold font-Montserrat text-center">Alumni Login</h1>
      <form onSubmit={loginHandler} className="flex flex-col my-4 gap-8">
        <div>
          <label htmlFor="email" className="font-medium font-Roboto">Email</label>
          <input
            type="email"
            id="email"
            value={au_email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full my-2 border border-charcoal rounded-lg py-3 px-4 focus:outline-none focus:ring-steel-blue focus:border-steel-blue sm:text-sm font-OpenSans"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="font-medium font-Roboto">Password</label>
          <input
            type="password"
            id="password"
            value={au_password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full my-2 border border-charcoal rounded-lg py-3 px-4 focus:outline-none focus:ring-steel-blue focus:border-steel-blue sm:text-sm font-OpenSans"
            required
          />
        </div>
        <button type="submit" className="hover:bg-celectic-blue font-semibold bg-steel-blue text-white py-2 px-4 rounded-lg">
          LOGIN
        </button>
        <div className="">
          Don't have an account? <Link to="/alumni-register" className="font-medium text-celectic-blue">Register</Link>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AlumniLogin;