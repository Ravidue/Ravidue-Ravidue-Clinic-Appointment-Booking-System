import { useState } from "react";
import "./Emailsend.css";
import { CheckCircle } from "react-feather";


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
            <div className="success-message">
  <CheckCircle color="green" size={24} />
  
</div>

          <h2>Email Sent !</h2>
          <p>Check your Email & Change Your Password</p>

          <form onSubmit={handleSubmit}>
           

            <button type="submit" className="register-btn">
             Reset
            </button>
          </form> 

          
          <footer>Copyright ©2025 - Fuchtius</footer>
        </div>
      </div>
    </div>
  );
}
