import React from 'react'
import { alumni, donation, student } from '../../constants/AdminDashboard'

const Dashboard = ({studentCount, alumniCount, showAlumniHandler, showStudentHandler}) => {
  return (
    <div className="m-4 flex flex-col gap-4 w-full">
            <div className="w-full grid md:grid-cols-3 gap-4">
              <div className="bg-sky p-4 rounded-md">
                <div className="flex justify-between">
                  <img
                    src={student}
                    className="w-16 rounded-full  p-2 border-white"
                    alt="order"
                  />
                  <div></div>
                  <span className="text-lg cursor-pointer"onClick={showStudentHandler} >view &rarr;</span>
                </div>
                <h2 className="text-xl mt-14 mb-2">
                  Total Students
                </h2>
                <p className="text-2xl font-bold">{studentCount}</p>
              </div>
              <div className="bg-sky p-4 rounded-md">
                <div className="flex justify-between">
                  <img
                    src={alumni}
                    className="w-16 rounded-full p-2 border-white"
                    alt="order"
                  />
                  <div></div>
                  <span className="text-lg cursor-pointer" onClick={showAlumniHandler}>view &rarr;</span>
                </div>
                <h2 className="text-xl mt-14 mb-2">
                  Total Alumnis
                </h2>
                <p className="text-2xl font-bold">{alumniCount}</p>
              </div>
              <div className="bg-sky p-4 rounded-md">
                <div className="flex justify-between">
                  <img
                    src={donation}
                    className="w-16 rounded-full p-2 border-white"
                    alt="order"
                  />
                  <div></div>
                  <span className="text-lg cursor-pointer">view &rarr;</span>
                </div>
                <h2 className="text-xl mt-14 mb-2">
                  Total Donations
                </h2>
                <p className="text-2xl font-bold">$1,290</p>
              </div>
            </div>
            <div className="flex xl:flex-row flex-col h-full w-full gap-4">
              <div className="bg-delft p-4 rounded-md w-full text-white">
                <h2 className="font-semibold text-xl mb-4 font-Montserrat">Upcoming Events</h2>
                <div className="flex flex-col gap-2">
                <div className="bg-white text-black px-4 py-2 rounded-lg">
                <div className="flex justify-between font-OpenSans">
                  <h2 className="font-medium text-lg font-Roboto">Alumni meet (Reunion)</h2>
                  <div className="flex gap-4">
                  <p>20-09-2024</p>
                  <p className="text-celectic-blue font-mono">Banglore</p>
                  </div>
                </div>
                <div className="font-OpenSans my-2">
                  <p>where alumni gather to reconnect with old friends and professors. They often include dinners, dances, and campus tours.</p>
                </div>
                </div>
                <div className="bg-white text-black px-4 py-2 rounded-lg">
                <div className="flex justify-between font-OpenSans">
                  <h2 className="font-medium text-lg font-Roboto">Fundraising Galas</h2>
                  <div className="flex gap-4">
                  <p>25-09-2024</p>
                  <p className="text-celectic-blue font-mono">Hyderabad</p>
                  </div>
                </div>
                <div className="font-OpenSans my-2">
                  <p>These events help raise funds for college projects, scholarships, or other initiatives. They often feature auctions, raffles, and entertainment.</p>
                </div>
                </div>
                <div className="bg-white text-black px-4 py-2 rounded-lg">
                <div className="flex justify-between font-OpenSans">
                  <h2 className="font-medium text-lg font-Roboto">Career Networking Events</h2>
                  <div className="flex gap-4">
                  <p>29-09-2024</p>
                  <p className="text-celectic-blue font-mono">Hyderabad</p>
                  </div>
                </div>
                <div className="font-OpenSans my-2">
                  <p>Alumni share their professional experiences and offer guidance to current students. These events can include panel discussions, workshops, and one-on-one mentoring sessions.</p>
                </div>
                </div>
                </div>
              </div>
              
              <div className="bg-delft p-4 rounded-md w-full">
                <h1 className="font-semibold mb-4 text-lg font-Montserrat text-white">Abstraction Data Of Alumni</h1> 
                <div className="flex md:flex-row flex-col w-full gap-3">
                <div className="flex gap-6 bg-white p-4 rounded-lg w-full justify-around font-OpenSans">
                  <ul>
                    <li className="my-2 font-medium font-Roboto">Company</li>
                    <li>Google</li>
                    <li>Amazon</li>
                    <li>TCS</li>
                    <li>Accenture</li>
                    <li>Wipro</li>
                  </ul>
                  <ul className="text-center">
                    <li className="my-2 font-medium font-Roboto">Members</li>
                    <li>52</li>
                    <li>32</li>
                    <li>79</li>
                    <li>112</li>
                    <li>290</li>
                  </ul>
                </div>
                <div className="flex gap-6 bg-white p-4 rounded-lg w-full justify-around font-OpenSans">
                  <ul>
                    <li className="my-2 font-medium font-Roboto">Year</li>
                    <li>Google</li>
                    <li>Amazon</li>
                    <li>TCS</li>
                    <li>Accenture</li>
                    <li>Wipro</li>
                  </ul>
                  <ul className="text-center">
                    <li className="my-2 font-medium font-Roboto">Members</li>
                    <li>52</li>
                    <li>32</li>
                    <li>79</li>
                    <li>112</li>
                    <li>290</li>
                  </ul>
                </div>
                </div>
                <div className="flex gap-6 bg-white px-4 py-2 rounded-lg w-full justify-around font-OpenSans mt-3">
                  <ul>
                    <li className="my-2 font-medium font-Roboto">Year</li>
                    <li>Google</li>
                    <li>Amazon</li>
                    <li>TCS</li>
                    <li>Accenture</li>
                    <li>Wipro</li>
                  </ul>
                  <ul className="text-center">
                    <li className="my-2 font-medium font-Roboto">Members</li>
                    <li>52</li>
                    <li>32</li>
                    <li>79</li>
                    <li>112</li>
                    <li>290</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Dashboard