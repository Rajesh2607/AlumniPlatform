import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Ensure to import toast for notifications
import { Link, useNavigate } from "react-router-dom"; // Import for navigation
import Lottie from "lottie-react";
import { networking1 } from "../../constants/LandingPage";
import { API_URL } from "../../data/api";

function AlumniRegister() {
  const [au_name, setAuName] = useState("");
  const [au_collage, setAuCollage] = useState("");
  const [au_email, setAuEmail] = useState("");
  const [au_password, setAuPassword] = useState("");
  const [au_from_year, setAuFromYear] = useState("");
  const [au_to_year, setAuToYear] = useState("");
  const [au_linkedin, setAuLinkedin] = useState("");
  const [au_image, setAuImage] = useState(null); // File upload for profile image
  const [au_verify, setAuVerify] = useState(null); // File upload for verification image
  const [au_contact, setAuContact] = useState("");

  const navigate = useNavigate(); // To navigate after successful registration

  // Image handler for uploading profile image
  const imageHandler = (e) => {
    setAuImage(e.target.files[0]);
  };

  // Image handler for uploading verification image (au_verify)
  const verifyImageHandler = (e) => {
    setAuVerify(e.target.files[0]);
  };

  // Submit handler for form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!au_verify) {
      toast.error("Verification image is required."); 
      return;
    }

    const formData = new FormData();
    formData.append("au_name", au_name);
    formData.append("au_collage", au_collage);
    formData.append("au_email", au_email);
    formData.append("au_password", au_password);
    formData.append("au_from_year", au_from_year);
    formData.append("au_to_year", au_to_year);
    formData.append("au_linkedin", au_linkedin);
    if (au_image) {
      formData.append('au_image', au_image);
    }
    if (au_verify) {
      formData.append('au_verify', au_verify);
    }
    formData.append("au_contact", au_contact);

    try {
      const response = await fetch(`${API_URL}/alumni/alumni-register`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          au_name, au_collage, au_from_year, au_to_year, au_email, au_contact, au_password, au_linkedin, au_image, au_verify
        })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Alumni Registered Successfully");
        // Reset the form
        setAuName("");
        setAuCollage("");
        setAuEmail("");
        setAuPassword("");
        setAuFromYear("");
        setAuToYear("");
        setAuLinkedin("");
        setAuImage(null);
        setAuVerify(null);
        setAuContact("");
        navigate("/alumni-login", { replace: true });
      }
    } catch (error) {
      toast.error("Registration Failed");
      console.error("Registration Failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center md:mx-24 mx-10 md:gap-10 my-4">
      <ToastContainer />
      <Lottie animationData={networking1} className="xl:w-1/2 max-xl:hidden" ></Lottie>
      <div className="md:w-1/2 max-md:mt-8 w-full">
        <h1 className="sm:text-3xl text-2xl font-bold font-Montserrat text-center">Alumni Register</h1>
        <form onSubmit={submitHandler} className="flex flex-col my-4 gap-4">
          <div>
            <label htmlFor="name" className="font-medium font-Roboto">Name</label>
            <input
              type="text"
              id="name"
              value={au_name}
              onChange={(e) => setAuName(e.target.value)}
              placeholder="Full Name"
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
              value={au_collage}
              onChange={(e) => setAuCollage(e.target.value)}
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
          <div>
            <label htmlFor="email" className="font-medium font-Roboto">Email</label>
            <input
              type="email"
              id="email"
              value={au_email}
              onChange={(e) => setAuEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium font-Roboto">Password</label>
            <input
              type="password"
              id="password"
              value={au_password}
              onChange={(e) => setAuPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-6 w-full">
            <label htmlFor="from_year" className="font-medium font-Roboto">From Year
            <input
              type="date"
              id="from_year"
              value={au_from_year}
              onChange={(e) => setAuFromYear(e.target.value)}
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4 font-normal"
            /></label>
            <label htmlFor="to_year" className="font-medium font-Roboto">To Year
            <input
              type="date"
              id="to_year"
              value={au_to_year}
              onChange={(e) => setAuToYear(e.target.value)}
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4 font-normal"
            /></label>
          </div>
          <div>
            <label htmlFor="linkedin" className="font-medium font-Roboto">LinkedIn Profile</label>
            <input
              type="text"
              id="linkedin"
              value={au_linkedin}
              onChange={(e) => setAuLinkedin(e.target.value)}
              placeholder="LinkedIn Profile URL"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="contact" className="font-medium font-Roboto">Contact</label>
            <input
              type="text"
              id="contact"
              value={au_contact}
              onChange={(e) => setAuContact(e.target.value)}
              placeholder="Contact Number"
              required
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
          <div>
            <label htmlFor="verify" className="font-medium font-Roboto">Verification Image</label>
            <input
              type="file"
              id="au_verify"
              onChange={verifyImageHandler}
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <button type="submit" className="hover:bg-celectic-blue font-semibold bg-steel-blue text-white py-2 px-4 rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default AlumniRegister;
