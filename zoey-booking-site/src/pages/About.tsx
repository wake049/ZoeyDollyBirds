import React from 'react';
import "./About.css";
import NavBar from './NavBar';
import Footer from './Footer';

const About = () => {
  return (
  <div>
      <NavBar />
  <section className="about">
    <div className="about-container">
      <h2>About Zoey</h2>
      <p>
        Zoey is a professional hairstylist with a passion for bringing out your natural beauty.
  With a style rooted in timeless techniques and a flair for modern trends, she creates personalized looks that make every client feel confident and seen.
      </p>
      <p>
        Whether you’re coming in for a fresh cut, a bold color, or a full transformation, you're in expert hands. Zoey’s approach is all about collaboration, comfort, and classic-meets-modern results that stand out.
      </p>
    </div>
  </section>
  <Footer />
</div>
  );
};

export default About;