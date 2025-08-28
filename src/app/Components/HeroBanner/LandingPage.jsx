"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="landpage-container">
      {/* Left side - Text */}
      <motion.div
        className="landpage-content"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="landpage-title">
          <span>K. Mammadu Smaaraka Vayanasala</span> - Kuppooth Vilayoor West
          P.O Reji. No: 09/PTB/8559
        </h1>
        <button className="theme-btn">Contact</button>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        className="landpage-image"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/img/land/Bg.jpg"
          alt="Landing Banner"
          width={500}
          height={400}
          className="landpage-img"
          priority
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
