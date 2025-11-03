import { useState } from "react";
import "./Login.css";


import regImage from '../assets/reg.png';
import { Link } from "react-router-dom";  
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
          <h2>Sign in</h2>
          <p>Please enter your details access The dashbord</p>

          <form onSubmit={handleSubmit}>
           

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

           

            <div className="checkbox-row">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <Link to="Forgot" style={{ textDecoration: "none" }}>
    <h1 style={{ color: "red", fontSize: "1.2rem" }}>Forget Password</h1>
  </Link>
              
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
            Already have an account? <a href="#">Login</a>
          </div>

          <footer>Copyright ©2025 - Fuchtius</footer>
        </div>
      </div>
    </div>
  );
}
