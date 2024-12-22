import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import { collages } from "../constants/Collages";
import { network, networking, testmonials } from "../constants/LandingPage";
import { features } from "../constants/LandingPage/Features";
import { Link } from "react-router-dom";
import { blockchain, sec1, sec2, sec3, sec4 } from "../constants/LandingPage/security";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex md:flex-row flex-col gap-4 sm:mx-14 mx-4 my-10 justify-center items-center 2xl:mx-50 ">
        <div className="sm:mx-20 max-[450px]:mx-4 mx-4 font-OpenSans md:mb-20">
          <h1 className="sm:text-5xl text-3xl font-Montserrat font-extrabold text-celectic-blue">
            Connect & Engage{" "}
            <span className="sm:text-3xl text-2xl font-bold text-black font-Montserrat">
              your alumni community
            </span>
          </h1>
          <p className="min-[450px]:text-xl text-lg font-medium my-6">
            "Connecting the past with the future, our alumni are the heartbeat
            of our institution."
          </p>
          <Link to='/register'><button className="bg-celectic-blue sm:w-52 w-full min-[450px]:py-3 py-2 rounded-sm text-lg text-smoke font-medium border border-transparent hover:bg-white hover:border hover:border-celectic-blue hover:text-celectic-blue">
            Register
          </button></Link>
        </div>
        <img
          src={network}
          alt="Alumni Network"
          className="md:w-1/2 w-full mt-4 md:h-[80vh] h-[50vh] rounded-sm"
        />
      </div>
      <div className="mx-4 flex my-24 justify-center font-Montserrat">
        <h1 className="text-center sm:text-4xl text-2xl w-1/2 font-semibold">
          Connecting over 100,000+ alumni across{" "}
          <span className="bg-clip-text bg-gradient-to-r from-celectic-blue to-indian-red text-transparent">
            1,000+ colleges over INDIA.
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-6 mb-20 ">
        <marquee behavior="alternate" direction="right">
          <div className="flex items-center w-full">
            {collages.map((i) => (
              <img
                src={i.img}
                alt="image"
                className="mr-4 border mx-2 p-2 rounded-lg h-20"
              />
            ))}
          </div>
        </marquee>
        <marquee behavior="alternate" direction="left">
          <div className="flex items-center w-full">
            {collages.map((i) => (
              <img
                src={i.img}
                alt="image"
                className="mr-4 border mx-2 p-2 rounded-lg h-20"
              />
            ))}
          </div>
        </marquee>
      </div>

      <div className="bg-smoke sm:mx-12 mx-4 rounded-lg my-2 py-10 px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold font-Montserrat">
            How Alumni Connect Helps{" "}
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-12 text-center font-OpenSans sm:text-lg text-base">
            <p className="font-medium border px-3 py-1 bg-perivinkle hover:text-white rounded-md hover:bg-charcoal">
              Student Benifits
            </p>
            <p className="font-medium border px-3 py-1 bg-perivinkle hover:text-white rounded-md hover:bg-charcoal">
              Alumni Engagement
            </p>
            <p className="font-medium border px-3 py-1 bg-perivinkle hover:text-white rounded-md hover:bg-charcoal">
              Institution Benifits
            </p>
            <p className="font-medium border px-3 py-1 bg-perivinkle hover:text-white rounded-md hover:bg-charcoal">
              Community Engagement
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-20 gap-10 justify-center items-center my-2">
          {networking.map((item) => (
            <div className="flex flex-col justify-center items-center">
              <h1 className="mb-4 font-semibold text-xl font-Roboto">
                {item.title}
              </h1>
              <img
                src={item.img}
                alt="img"
                className="w-52 border-4 rounded-sm border-charcoal m-2 "
              />
              <ul className="list-disc my-2 text-xl leading-10 text-celectic-blue">
                {item.benfits.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-14 mt-20">
      <h1 className="text-center font-Montserrat text-4xl font-semibold">Features</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-6 sm:mx-20 mx-8 gap-6">
        {features.map((feature)=>(
          <div className="">
            <img src={feature.img} className="w-20 my-4" alt="feat" />
            <h2 className="text-xl my-2 font-semibold font-Roboto">{feature.title}</h2>
            <p className="font-OpenSans">{feature.description}</p>
          </div>
        ))}
        </div>
      </div>

      <div className="py-16 px-14 ">
      <h1 className="text-center font-Montserrat text-4xl font-semibold mb-20">Security</h1>
      <div className="flex justify-around">
        <img src={sec1} alt="" className="w-28"/>
        <img src={sec2} alt="" className="w-28" />
        <img src={sec3} alt="" className="w-28" />
        <img src={sec4} alt="" className="w-28" />
        </div>
      </div>

      <div className="py-16 px-10 bg-perivinkle">
        <h2 className="text-center text-3xl font-Montserrat font-bold">What Our Partners Say</h2>
        <div className="flex mt-20 md:gap-6 gap-14 md:flex-row flex-col">
          {testmonials.map((test)=>(
            <div className="bg-white p-5 rounded-lg">
              <div className="flex flex-col items-center">
              <img src={test.img} alt="image"  className="absolute mt-[-50px] w-[70px] border-2 border-perivinkle rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold pt-9 text-r-logo text-center">{test.title}</h3>
              <p className="text-lg pt-2"><span className="text-xl font-bold text-r-dbtn">"</span>{test.text}<span className="text-xl font-bold text-r-dbtn">"</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center font-Montserrat my-24 sm:mx-14 mx-6">
        <h1 className="text-4xl font-semibold my-4 text-center">Join the alumni platform and start connecting today.</h1>
        <p className="text-xl font-medium my-2 text-center">Our platform bridges thegap between alumni and students, fostering a community where experiencemeets ambition.</p>
        <Link to='/register'><button className="bg-celectic-blue w-52 min-[450px]:py-3 py-2  rounded-sm text-lg text-smoke font-medium border border-transparent hover:bg-white hover:border hover:border-celectic-blue hover:text-celectic-blue">Register Now</button></Link>
      </div>

      <hr />

      <div className="bg-charcoal py-6 pt-12">
        <p className="text-center font-OpenSans text-smoke font-medium capitalize">&copy; All rights reserved by TEAM 1633</p>
      </div>
    </div>
  );
};

export default LandingPage;
