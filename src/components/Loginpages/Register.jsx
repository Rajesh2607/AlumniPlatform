import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-2 mt-20">
      <h1 className="sm:text-3xl text-2xl font-bold font-Montserrat">SIGN IN / SIGN UP</h1>
      <div className="flex font-Roboto flex-col justify-center items-center gap-10 bg-smoke shadow-lg sm:p-14 p-8 rounded-lg my-8">
        <Link to='/student-login'><button
          type="button"
          className="hover:bg-celectic-blue font-semibold bg-steel-blue text-smoke sm:w-80 w-60 py-3 rounded-lg transition duration-300 ease-in-out"
        >
          STUDENT
        </button>
        </Link>
        
        <Link to='/alumni-login'><button
          type="button"
          className="hover:bg-celectic-blue bg-steel-blue sm:w-80 w-60 py-3 text-white font-semibold rounded-lg transition duration-300 ease-in-out"
        >
          ALUMNI
        </button></Link>
        
        <Link to='/admin-login'><button
          type="button"
          className="hover:bg-celectic-blue bg-steel-blue sm:w-80 py-3 text-white font-semibold w-60 rounded-lg transition duration-300 ease-in-out"
        >
          ADMINISTRATION
        </button></Link>
      </div>
    </div>
  );
}

export default Register;