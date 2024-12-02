import React from "react";
import "./About.css"; 
import shdeep from "../../Assets/About/1shdeep.jpg"

import { HiOutlineArrowUpRight } from "react-icons/hi2";

const AboutSection = () => {
  return (
    <section className="about-section container">
      <div className="content">
        <h1 className="title">
          The Art <br /> Innovation Hub
        </h1>
        <p className="description">We are an art-driven content production hub powered by young, creative minds. At our core, it’s “for the artists by the artists.” We break the mold with bold, fresh content that speaks to today’s culture. Innovation, collaboration, and passion fuel everything we create.</p>
        {/* <a
          href="mailto:vanshdeepofficial@gmail.com"
          className="about-contact contact-link"
        >
          CONTACT US{" "}
          <span className="arrow">
            <HiOutlineArrowUpRight />
          </span>
        </a> */}
      </div>
      <div className="image-container">
        <img src={shdeep} alt="Agency Story" className="about-image" />
      </div>
    </section>
  );
};

export default AboutSection;
