
/* --------------------- src/components/DashboardMain.js --------------------- */
import React from 'react';
import Cards from './Cards';
import AppointmentList from './AppointmentList';
import '../styles.css';


export default function DashboardMain() {
  return (
    <div className="dashboard-container">
      <Cards />

      <div className="grid two-cols">
        <section className="panel stats-panel">
          <h3>Appointment Statistics</h3>
          <div className="stats-cards">
            <div className="stat">All Appointments<br/><strong>6314</strong></div>
            <div className="stat">Cancelled<br/><strong>456</strong></div>
            <div className="stat">Reschedule<br/><strong>745</strong></div>
            <div className="stat">Completed<br/><strong>4578</strong></div>
          </div>

          <div className="chart-placeholder">
            {/* Simple bar-chart-like visualization made with divs */}
            <div className="bar-row">
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i)=> (
                <div key={m} className="bar">
                  <div className={`bar-inner size-${(i%6)+1}`} />
                  <div className="bar-label">{m}</div>
                </div>
              ))}
            </div>
            <div className="legend">
              <span className="legend-item"><i/> Completed</span>
              <span className="legend-item"><i/> Ongoing</span>
              <span className="legend-item"><i/> Rescheduled</span>
            </div>
          </div>

          <h4 className="section-title">Popular Doctors</h4>
          <div className="popular-doctors">
            <div className="doc-card">
              <div className="doc-name">Dr. Mick Thompson</div>
              <div className="doc-sub">Cardiologist</div>
              <div className="doc-book">258 Bookings</div>
            </div>
            <div className="doc-card">
              <div className="doc-name">Dr. Emily Carter</div>
              <div className="doc-sub">Pediatrician</div>
              <div className="doc-book">125 Bookings</div>
            </div>
            <div className="doc-card">
              <div className="doc-name">Dr. David Lee</div>
              <div className="doc-sub">Gynecologist</div>
              <div className="doc-book">115 Bookings</div>
            </div>
          </div>
        </section>

        <aside className="panel side-panel">
          <div className="panel-header">Appointments</div>
          <div className="calendar">
            <div className="month">April 2025</div>
            <div className="days-grid">
              {Array.from({length:35}).map((_,i)=> (
                <div key={i} className={`day ${i===10? 'today':''}`}>{i<31? (i%7)+1 : ''}</div>
              ))}
            </div>
          </div>

          <div className="upcoming-list">
            <div className="appt">
              <div className="appt-title">General Visit</div>
              <div className="appt-time">Wed, 05 Apr 2025, 06:30 PM</div>
            </div>
            <div className="appt">
              <div className="appt-title">General Visit</div>
              <div className="appt-time">Wed, 05 Apr 2025, 04:10 PM</div>
            </div>
            <div className="appt">
              <div className="appt-title">General Visit</div>
              <div className="appt-time">Wed, 05 Apr 2025, 10:00 AM</div>
            </div>
          </div>

        </aside>
      </div>

      <section className="panel appointments-panel">
        <h3>All Appointments</h3>
        <AppointmentList />
      </section>

    </div>
  );
}