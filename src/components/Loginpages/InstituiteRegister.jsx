import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Ensure you import necessary modules
import { Link, useNavigate } from "react-router-dom"; // Adjust according to your routing
import {
  loginimg,
  networking1,
  registerimg,
} from "../../constants/LandingPage";
import Lottie from "lottie-react";
import {API_URL} from "../../data/api";

function InstitutionRegister() {
  const [in_name, setInName] = useState("");
  const [in_city, setInCity] = useState("");
  const [in_email, setInEmail] = useState("");
  const [in_password, setInPassword] = useState("");
  const [in_url, setInUrl] = useState("");
  const [in_image, setInImage] = useState(null);

  const navigate = useNavigate(); // For navigation

  const imageHandler = (e) => {
    const selectedImage = e.target.files[0];
    setInImage(selectedImage);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", in_name);
    formData.append("city", in_city);
    formData.append("email", in_email);
    formData.append("password", in_password);
    formData.append("url", in_url);
    formData.append("image", in_image);

    try {
      const response = await fetch(`${API_URL}/admin/admin-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ in_name, in_city, in_email, in_password, in_url, in_image}),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Institution Registered Successfully");
        setInName("");
        setInCity("");
        setInEmail("");
        setInPassword("");
        setInUrl("");
        setInImage(null);
        navigate("/admin-login", { replace: true });
      }
    } catch (error) {
      toast.error("Registration Failed");
      console.error("Registration Failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center md:mx-24 mx-10 md:gap-10 my-4">
      <ToastContainer />
      <Lottie
        animationData={registerimg}
        className="md:w-1/2 max-md:hidden"
      ></Lottie>
      <div className="md:w-1/2 max-md:mt-8 w-full">
        <h1 className="sm:text-3xl text-2xl font-bold font-Montserrat text-center">
          Institution Register
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col my-4 gap-4 font-OpenSans"
        >
          <div>
            <label htmlFor="collage" className="font-medium font-Roboto">
              Institution Name
            </label>
            <select
              id="collage"
              value={in_name}
              onChange={(e) => setInName(e.target.value)}
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            >
              <option value="">Select an Institution</option>{" "}
              {/* Default option */}
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
            <label htmlFor="city" className="font-medium font-Roboto">
              City
            </label>
            <input
              type="text"
              id="city"
              value={in_city}
              onChange={(e) => setInCity(e.target.value)}
              placeholder="City"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium font-Roboto">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={in_email}
              onChange={(e) => setInEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium font-Roboto">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={in_password}
              onChange={(e) => setInPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="url" className="font-medium font-Roboto">
              Institution URL
            </label>
            <input
              type="text"
              id="url"
              value={in_url}
              onChange={(e) => setInUrl(e.target.value)}
              placeholder="Institution URL (optional)"
              className="w-full my-1 border border-charcoal rounded-lg py-2 px-4"
            />
          </div>
          <div>
            <label htmlFor="image" className="font-medium font-Roboto">
              Profile Image
            </label>
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

export default InstitutionRegister;
