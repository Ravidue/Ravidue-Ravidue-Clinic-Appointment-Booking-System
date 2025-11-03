
import "./App.css";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Emailsend from "./components/Emailsend";
import RegPage from "./components/RegPage";
import Success from "./components/Success";
import Resetpassword from "./components/Resetpassword";
import { Import } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMain from "./components/DashboardMain"; 
import './styles.css';
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emailsent" element={<Forgot />} />
        <Route path="/register" element={<RegPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/dashboard" element={
          <>
            <Header />
            <div className="dashboard-container">
              <Sidebar />
              <DashboardMain />
            </div>
          </>
        } />
      </Routes>
    </div>
  );
}
export default App;