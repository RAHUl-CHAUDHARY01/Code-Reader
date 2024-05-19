import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import pp3 from './pp3.jpg'
import rakesh from '../rakesh.jpg'
// import loading2 from './loading2.gif'
export default function About() {
  document.body.style.backgroundColor="#1A1A1D";
  return (
      <div
        id="about-section"
        className=""
        style={{ zIndex: 100, position: "relative" ,top:"90px" , height:"100 %", fontSize:"20px"}}
      >
        <img
          src={rakesh}
          alt="load"
          className=" text-white"
          style={{
            margin: "0rem 5rem 1rem 0rem",
            borderRadius: "50%",
            width: "20rem",
            height: "20rem",
            position: "relative",
            right:"300px",
            bottom:"60px",
            padding: "0px 0px 0px 10px",
            objectFit: "cover",
          }}
        />
        <div className="text-start" style={{ position:"fixed",top:"500px", left:"20rem"}}>
          <span
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" , fontWeight:"500", fontSize:"40px",}}
          >
            Hi, I'm Rakesh Chauhan👋🏻
          </span>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in Noida, I'm a results-driven
            <span className="text-sky-500"> ISoftware Engineer</span> holding a
            <span className="text-sky-500">
              {" "}
              B.Tech degree in Information Technolgy.
            </span>{" "}
            My professional journey revolves around transforming raw data into
            impactful insights, and I'm particularly passionate about
            <span className="text-sky-500">
              {" "}
              Web Development, Computer Networking, DataBase.
            </span>
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Proficient in{" "}
            <span className="text-sky-500">
              C++, SQL, JavaScript and React
            </span>
            , I bring a creative touch using{" "}
            <span className="text-sky-500">HTML and CSS</span> for visual
            appeal.{" "}
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities. Committed to
            continuous improvement,
            <span className="text-sky-500">
              {" "}
              I hold certifications in emerging technologies{" "}
            </span>
            and actively participate in workshops to stay ahead of industry
            trends.
          </p>
        </div>
        {/* <img src={pp3} alt="load"  /> */}
        
      </div>

  );
}