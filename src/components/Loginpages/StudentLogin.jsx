import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {loginimg, networking1 } from "../../constants/LandingPage";
import {API_URL} from '../../data/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentLogin() {
  const [st_pemail, setEmail] = useState("");
  const [st_password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/student/student-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ st_pemail, st_password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.success);
        //alert(data.success);
        localStorage.setItem("loginToken", data.token);
        setEmail("")
        setPassword("")
        //navigate("/", { replace: true });
        /* window.location.reload() */
      }else{
        //alert(data.error)
        toast.error(data.error);
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
      <h1 className="sm:text-3xl text-2xl font-bold font-Montserrat text-center">Student Login</h1>
      <form onSubmit={loginHandler} className="flex flex-col my-4 gap-8">
        <div>
          <label htmlFor="email" className="font-medium font-Roboto">Email</label>
          <input
            type="email"
            id="email"
            value={st_pemail}
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
            value={st_password}
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
          Don't have an account? <Link to="/student-register" className="font-medium text-celectic-blue">Register</Link>
        </div>
      </form>
    </div>
    </div>
  );
}

export default StudentLogin;