// src/components/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div id="profile">
      <header>
        <i className="ri-arrow-left-line">Profile</i>
      </header>
      <main>
        <section id="dp-section">
          <div id="dp-image">
            <img id="profile-pic" src="kill.jpg" alt="Profile" />
            <i id="menu" className="ri-camera-line"></i>
          </div>
        </section>
        <section id="information">
          <div className="description">
            <i className="ri-user-line"></i>
            <div id="name">
              <p>Name</p>
              <p>Sania Kiran</p>
            </div>
          </div>
          <div className="description">
            <i className="ri-information-line"></i>
            <div id="name">
              <p>About</p>
              <p>I am a BSCS student.</p>
            </div>
          </div>
          <div className="description">
            <i className="ri-phone-line"></i>
            <div id="name">
              <p>Phone</p>
              <p>+92 333 33333</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
