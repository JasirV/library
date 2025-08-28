"use client";
import React, { useEffect, useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Story1 = () => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);



  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="watch-video-section section-padding pb-0 fix">
      <div className="bg-shape">
        <Image
          src="/assets/img/map-bg.png"
          alt="img"
          width={1719}
          height={1132}
        />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Our Courses </span>
          <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
            Shaping Futures <br />
            Through Education, Skills & Innovation
          </h2>
        </div>
        <div className="video-wrapper">
          <div className="watch-button">
            <Link
              href="/contact"
              className="theme-btn wow fadeInUp wow"
              data-wow-delay=".5s"
            >
              Contact<i className="bi bi-arrow-right"></i>
            </Link>
            <Link
              href="/services"
              className="theme-btn style-2 wow fadeInUp wow"
              data-wow-delay=".7s"
            >
              More<i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div
            className="video-image bg-cover"
            data-background="https://cdn-main.infourok.ru/is04/0243/0009d9ca-92fb5627.jpg"
          >
            <a  className="video-btn  theme-btn">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story1;
