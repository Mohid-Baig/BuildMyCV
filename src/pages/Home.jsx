import React from "react";
import banner from "../assets/images/homebanner.jpg";
import { motion } from "framer-motion";
import "../Components/Home.css";
const Home = () => {
  return (
    <div className="home-banner" style={{ backgroundImage: `url(${banner})` }}>
      <motion.div
        className="banner-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="banner-title">
          Elevate Your Career with a{" "}
          <span className="highlight">Professionally</span> Designed CV
        </h1>
        <p className="banner-text">
          Tailor your resume to showcase your unique skills and experience.
          Start building your personalized, professional CV effortlessly and
          make a lasting impression.
        </p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create My CV Now
        </motion.button>

        <div className="trust-badge">
          <span>Trusted by -xMXHID</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
