import { useState } from "react";
import "./RegPage.css";
import regImage from '../assets/reg.png';
import { Link, Outlet } from 'react-router-dom'


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
          <h2>Register</h2>
          <p>Please enter your details to create an account</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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
              Register
            </button>
          </form>

          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>

          <footer>Copyright ©2025 - Fuchtius</footer>
        </div>
      </div>
    </div>
  );
}
