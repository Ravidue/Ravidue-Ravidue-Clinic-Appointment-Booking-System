/* --------------------- src/components/Sidebar.js --------------------- */
import React from 'react';

import '../styles.css';




export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-dot" />
        <h1>Fuchsia</h1>
      </div>

      <nav className="nav">
        <a className="nav-item active">Dashboard</a>
        <a className="nav-item">Doctors</a>
        <a className="nav-item">Patients</a>
        <a className="nav-item">Appointments</a>
        <a className="nav-item">Services</a>
        <a className="nav-item">Messages</a>
      </nav>

      <div className="sidebar-footer">2025 © Fuchsius</div>
    </aside>
  );
}
