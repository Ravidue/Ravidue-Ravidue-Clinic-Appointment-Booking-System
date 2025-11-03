/* --------------------- src/components/Header.js --------------------- */
import React from 'react';
import '../styles.css';

export default function Header() {
  return (
    <header className="header-bar">
      <div className="search">
        <input placeholder="Search" />
      </div>
      <div className="header-right">
        <div className="icon-pill">🔔</div>
        <div className="avatar">RA</div>
      </div>
    </header>
  );
}