/* --------------------- src/components/AppointmentList.js --------------------- */
import React from 'react';

import '../styles.css';


const rows = [
  {doctor:'Dr. John Smith', specialty: 'Neurosurgeon', patient:'Jesus Adams', phone:'+1 41254 45214', datetime:'28 May 2025 - 11:15 AM', mode:'Online', status:'Confirmed'},
  {doctor:'Dr. Lisa White', specialty: 'Oncologist', patient:'Ezra Belcher', phone:'+1 65895 41247', datetime:'29 May 2025 - 11:30 AM', mode:'In-Person', status:'Cancelled'},
  {doctor:'Dr. Patricia Brown', specialty:'Pulmonologist', patient:'Glen Lentz', phone:'+1 62458 45845', datetime:'30 May 2025 - 09:30 AM', mode:'Online', status:'Confirmed'},
  {doctor:'Dr. Rachel Green', specialty:'Urologist', patient:'Bernard Griffith', phone:'+1 61422 45214', datetime:'30 May 2025 - 10:00 AM', mode:'Online', status:'Checked Out'},
  {doctor:'Dr. Michael Smith', specialty:'Cardiologist', patient:'John Elsass', phone:'+1 47851 26371', datetime:'30 May 2025 - 11:00 AM', mode:'Online', status:'Schedule'},
];

export default function AppointmentList(){
  return (
    <table className="appt-table">
      <thead>
        <tr>
          <th>Doctor</th>
          <th>Patient</th>
          <th>Date & Time</th>
          <th>Mode</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r,idx)=> (
          <tr key={idx}>
            <td>
              <div className="td-doc">
                <div className="avatar-sm">{r.doctor.split(' ').slice(1,2)[0][0]}</div>
                <div>
                  <div className="doc-name">{r.doctor}</div>
                  <div className="doc-special">{r.specialty}</div>
                </div>
              </div>
            </td>
            <td>
              <div className="td-patient">
                <div className="patient-name">{r.patient}</div>
                <div className="patient-phone">{r.phone}</div>
              </div>
            </td>
            <td>{r.datetime}</td>
            <td>{r.mode}</td>
            <td><span className={`status-pill status-${r.status.replace(/\s+/g,'').toLowerCase()}`}>{r.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}