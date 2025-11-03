import { useState } from "react";
import "./Forgot.css";

import regImage from '../assets/reg.png';
export default function RegPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
                                             
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);   
  };
           
  return (
    <div className="register-container">
      {/* Left Image Section */}
      <div className="left-panel">
        
        <img src={regImage} alt="Doctor" className="doctor-image"/>
      </div>

      {/* Right Form Section */}
      <div className="right-panel">
        <div className="form-box">
          <h2>Forgot Password</h2>
          <p>No Worries,We'll send you rest instruction</p>

          <form onSubmit={handleSubmit}>
           

            <label className="lb">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            

           

            

            <button type="submit" className="register-btn">
             Submit
            </button>
          </form> 

          <div className="login-link">
          <a href="#">Return to Login</a>
          </div>

          <footer>Copyright ©2025 - Fuchtius</footer>
        </div>
      </div>
    </div>
  );
}
