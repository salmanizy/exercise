import type { MetaFunction, LinksFunction } from '@remix-run/node';
import React from 'react';

import biographyStyles from '~/styles/biography.css'; 

const userData = {
  nama: "Salman Al Farisy Azhar",
  jabatan: "Front-End Developer & UI/UX Designer",
  perkenalan: "I'm a dedicated student at Bina Nusantara University, specializing in Front-End Development and UI/UX Design. I'm passionate about crafting engaging user experiences through innovative design thinking and creating responsive web solutions. Let's collaborate and embark on a journey of creativity and excellence!.",
  hobby: ["Play Basketball", "Swimming", "Coding"],
};

export const meta: MetaFunction = () => {
  return [
    { title: 'Biografi - Salman Al Farisy Azhar' },
    { name: 'description', content: userData.perkenalan },
  ];
};

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: biographyStyles },
];

export default function Index() {
  return (
    <div className="biography-container">
      
      <main className="biography-main">
        
        <header className="biography-header">
          <p className="subtitle">
            Biografi
          </p>
          <h1>
            {userData.nama}
          </h1>
          <p className="job-title">
            {userData.jabatan}
          </p>
        </header>

        <section className="biography-section">
          <h2>
            Perkenalan Singkat
          </h2>
          <p className="biography-intro">
            "{userData.perkenalan}"
          </p>
        </section>

        <section className="biography-section">
          <h2>
            Hobby
          </h2>
          <div className="hobby-list">
            {userData.hobby.map((item, index) => (
              <span 
                key={index} 
                className="hobby-tag"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

      </main>

      <footer className="biography-footer">
        &copy; {new Date().getFullYear()} Salman Al Farisy Azhar.
      </footer>
    </div>
  );
}