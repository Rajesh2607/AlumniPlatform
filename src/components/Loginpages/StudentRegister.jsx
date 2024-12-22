import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { API_URL } from "../../data/api";
import { networking1 } from "../../constants/LandingPage";

function StudentRegister() {
  const [st_name, setName] = useState("");
  const [st_collage, setCollage] = useState("");
  const [st_from_year, setFromYear] = useState("");
  const [st_to_year, setToYear] = useState("");
  const [st_pemail, setEmail] = useState("");
  const [st_cemail, setCemail] = useState("");
  const [st_contact, setContact] = useState("");
  const [st_password, setPassword] = useState("");
  const [st_linkedin, setLinkedin] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", st_name);
    formData.append("collage", st_collage);
    formData.append("from_year", st_from_year);
    formData.append("to_year", st_to_year);
    formData.append("pemail", st_pemail);
    formData.append("cemail", st_cemail);
    formData.append("contact", st_contact);
    formData.append("password", st_password);
    formData.append("linkedin", st_linkedin);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`${API_URL}/student/student-register`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          st_name, st_collage, st_from_year, st_to_year, st_pemail, st_cemail, st_contact, st_password, st_linkedin, image
        })
      });

      if (response.ok) {
        toast.success("Student Registered Successfully");
        setName("");
        setCollage("");
        setFromYear("");
        setToYear("");
        setEmail("");
        setCemail("");
        setContact("");
        setPassword("");
        setLinkedin("");
        setImage(null);
        navigate("/student-login", { replace: true });
      } else {
        toast.error("Registration Failed");
      }
    } catch (error) {
      toast.error("Registration Failed");
      console.error("Registration Failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center md:mx-24 mx-10 md:gap-10 my-4">
      <ToastContainer />
      <Lottie animationData={networking1} className="md:w-1/2 max-md:hidden" />
      <div className="md:w-1/2 max-md:mt-8 w-full">
        <h1 className="sm:text-3xl text-2xl font-bold font-Montserrat text-center">
          Student Register
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col my-4 gap-4 font-OpenSans">
          <div>
            <label htmlFor="name" className="font-medium font-Roboto">Name</label>
            <input
              type="text"
              id="name"
              value={st_name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="collage" className="font-medium font-Roboto">
              Institution Name
            </label>
            <select
              id="collage"
              value={st_collage}
              onChange={(e) => setCollage(e.target.value)}
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            >
              <option value="">Select an Institution</option>
              <option value="Central University of Rajasthan, Kishangarh, Ajmer">
                Central University of Rajasthan, Kishangarh, Ajmer
              </option>
              <option value="University of Rajasthan, Jaipur">
                University of Rajasthan, Jaipur
              </option>
              <option value="Mohanlal Sukhadia University, Udaipur">
                Mohanlal Sukhadia University, Udaipur
              </option>
              <option value="Jai Narain Vyas University, Jodhpur">
                Jai Narain Vyas University, Jodhpur
              </option>
              <option value="Maharaja Ganga Singh University, Bikaner">
                Maharaja Ganga Singh University, Bikaner
              </option>
              <option value="Maharshi Dayanand Saraswati University, Ajmer">
                Maharshi Dayanand Saraswati University, Ajmer
              </option>
              <option value="Rajasthan Technical University, Kota">
                Rajasthan Technical University, Kota
              </option>
              <option value="National Law University, Jodhpur">
                National Law University, Jodhpur
              </option>
              <option value="BITS Pilani, Pilani">BITS Pilani, Pilani</option>
              <option value="Amity University Rajasthan, Jaipur">
                Amity University Rajasthan, Jaipur
              </option>
              <option value="Indian Institute of Technology (IIT), Jodhpur">
                Indian Institute of Technology (IIT), Jodhpur
              </option>
              <option value="All India Institute of Medical Sciences (AIIMS), Jodhpur">
                All India Institute of Medical Sciences (AIIMS), Jodhpur
              </option>
              <option value="Malaviya National Institute of Technology (MNIT), Jaipur">
                Malaviya National Institute of Technology (MNIT), Jaipur
              </option>
              <option value="Indian Institute of Management (IIM), Udaipur">
                Indian Institute of Management (IIM), Udaipur
              </option>
              <option value="Manipal University, Jaipur">
                Manipal University, Jaipur
              </option>
              <option value="JECRC University, Jaipur">
                JECRC University, Jaipur
              </option>
              <option value="Jaipur National University, Jaipur">
                Jaipur National University, Jaipur
              </option>
              <option value="NIMS University, Jaipur">
                NIMS University, Jaipur
              </option>
              <option value="Mody University, Laxmangarh, Sikar">
                Mody University, Laxmangarh, Sikar
              </option>
            </select>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-6 w-full">
            <label htmlFor="from_year" className="font-medium font-Roboto">
              From Year
              <input
                type="date"
                id="from_year"
                value={st_from_year}
                onChange={(e) => setFromYear(e.target.value)}
                required
                className="w-full my-1 border font-normal border-charcoal rounded-lg py-2 px-4"
              />
            </label>
            <label htmlFor="to_year" className="font-medium font-Roboto">
              To Year
              <input
                type="date"
                id="to_year"
                value={st_to_year}
                onChange={(e) => setToYear(e.target.value)}
                required
                className="w-full my-1 border font-normal border-charcoal rounded-lg py-2 px-4"
              />
            </label>
          </div>
          <div>
            <label htmlFor="pemail" className="font-medium font-Roboto">Personal Email</label>
            <input
              type="email"
              id="pemail"
              value={st_pemail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Personal Email"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="cemail" className="font-medium font-Roboto">College Email</label>
            <input
              type="email"
              id="cemail"
              value={st_cemail}
              onChange={(e) => setCemail(e.target.value)}
              placeholder="College Email"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium font-Roboto">Password</label>
            <input
              type="password"
              id="password"
              value={st_password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="contact" className="font-medium font-Roboto">Phone Number</label>
            <input
              type="text"
              id="contact"
              value={st_contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="font-medium font-Roboto">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              value={st_linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="LinkedIn"
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="image" className="font-medium font-Roboto">Profile Image</label>
            <input
              type="file"
              id="image"
              onChange={imageHandler}
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <button
            type="submit"
            className="hover:bg-celectic-blue font-semibold bg-steel-blue text-white py-2 px-4 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;
