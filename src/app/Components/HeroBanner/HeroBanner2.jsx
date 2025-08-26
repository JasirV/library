"use client";
import React, { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const HeroBanner2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [isActive, setIsActive] = useState("tour");

  return (
    <section className="hero-section-2">
      <div
        className="hero-2 bg-cover"
        data-background="https://avatars.mds.yandex.net/get-altay/4054675/2a0000017525fb329d93ab4fe6a52c799ccb/XXXL"
      >
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="sub-title wow fadeInUp">
                  Get unforgettable pleasure with us
                </div>
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Discover Your Next <br />
                  Handpicked Journey
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in <br /> some form, by
                  injected humour words which do not look even slightly
                  believable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <p style={{fontSize:'50px',color:'red',fontWeight:'bolder',textAlign:'start',marginTop:"160px" , marginLeft:"100px"}}>കെ.മമ്മദ് സ്മാരക <br /> <br /> വായനശാല-കുപ്പൂത്ത് <br /> <br />
        <span style={{marginTop:'800px'}}>

        വിളയൂർ വെസ്റ്റ് <br /> <br />പി.ഒ റെജി.നം:09/PTB/855
        </span>
        </p>
      </div> */}
        {/* <Image  src="/assets/img/bgCover.jpg" alt="" /> */}
    </section>
  );
};

export default HeroBanner2;
