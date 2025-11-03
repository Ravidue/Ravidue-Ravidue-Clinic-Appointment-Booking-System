
/* --------------------- src/components/Cards.js --------------------- */
import React from 'react';
import '../styles.css';

function StatCard({title, value, change}){
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className="stat-title">{title}</div>
        <div className={`stat-change ${change>0? 'up':'down'}`}>{change>0? `+${change}%`: `${change}%`}</div>
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

export default function Cards(){
  return (
    <div className="cards-row">
      <StatCard title="Doctors" value={247} change={95} />
      <StatCard title="Patients" value={4178} change={25} />
      <StatCard title="Appointment" value={12178} change={-15} />
    </div>
  );
}