import React from 'react';
import pp3 from './pp3.jpg';
import rakesh from './rakesh.jpg';
// import Particles from '@tsparticles/react';
import Particle from '../Particle';
import Socials from './socialui/Socials';
const AboutPage = () => {
  return (
    <div className="about-page">
      <Particle/>
      <h1>About Us</h1>
      <section className="team-member">
        <img src={pp3} alt="Rahul Kumar" />
        <h2>Rahul Kumar</h2>
        {/* <i className="far fa-trash-alt mx-2"/> */}
        <p>Hi, I'm Rahul Kumar👋🏻</p>
        <p> Based in Noida, I'm a results-driven person currently pursuing Btech in Information Technology branch , and learning Full Stack Web Development</p>
      </section>
      {/* <section className="team-member">
        <img src={rakesh} alt="Rakesh Chauhan" />
        <h2>Rakesh Chauhan</h2>
        <p>Hi, I'm Rakesh Chauhan👋🏻</p>
        <p>Based in Banaras, I thrive on merging creativity with code. My recent project delves into full-stack web development, showcasing my knack for seamless user experiences from frontend design to backend functionality.</p>
      </section> */}
      <Socials/>

      <style jsx>{`
        .about-page {
          max-width: 100;
          margin: 40px auto;
          padding: 20px;
  background-color:linear-gradient(#30142b, #a12727);
          
          // border: 1px solid #ddd;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .about-page h1 {
          font-size: 3rem;
          font-weight: bold;
          color: #black;
          text-align: center;
          margin-bottom: 40px;
        }

        .team-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
        }

        .team-member img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 5px solid #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .team-member h2 {
          font-size: 2rem;
          font-weight: bold;
          color: WHITE;
          margin-bottom: 10px;
        }

        .team-member p {
          font-size: 1.2rem;
          color: WHITE;
          margin-bottom: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;