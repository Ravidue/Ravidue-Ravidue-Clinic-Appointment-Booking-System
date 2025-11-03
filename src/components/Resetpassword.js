import { useState } from "react";
import "./Login.css";

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
          <h2>Reset Password</h2>
          <p>You new password must be defferen from previous used password</p>

          <form onSubmit={handleSubmit}>
           

            <label>Password</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Conform Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

           

            <div className="checkbox-row">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <span>
                I agree to the{" "}
                <a href="#">Terms of Service</a> &{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </div>

            <button type="submit" className="register-btn">
             submit
            </button>
          </form>

          <div className="login-link">
            Return to Log <a href="#">Login</a>
          </div>

          <footer>Copyright ©2025 - Fuchtius</footer>
        </div>
      </div>
    </div>
  );
}
