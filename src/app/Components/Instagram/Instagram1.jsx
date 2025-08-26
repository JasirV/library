"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Instagram1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

const instagramContent = [
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ടി.ഗോപാലകൃഷ്ണന്‍" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഉമ്മറലി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ടി.ശശി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഹരിദാസ്" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "സാജിത.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "അബ്ദുൽ വാഹിദ്" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ആമിന" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഷൗക്കത്ത്.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ശരീഫ് ഒ ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ബഷീർ.വി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഫാസിൽ ഒ.ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "നിഷാദ്" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഹസീബ്.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "കമാല്‍ എസ്.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "പുഷ്പലത" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "മൂസ എസ്.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "സിദ്ദിഖ്.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ദേവൻ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഗിരീഷ്" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "സജിത്ത് വി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഷഫീഖ് ഒ.ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ദേവദാസൻ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "പ്രജിത്ത്" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "അർജുൻ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ആര്യ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "പ്രിയ.ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "കദീജ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഫൗസിയ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "സൈദാലിക്കുട്ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "അഷ്റഫ്.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ചാമി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "നൗഷാദ്.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "മുഹമ്മദ് കുട്ടി.എം.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "മുഹമ്മദലി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "നിസാം.വി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഷഫീഖ്.പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "കരീം വി.ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "കോയാമു.വി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "മൊയ്തീന്‍.എ.ടി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ജാസിര്‍.വി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "അഭിനവ്.എ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "നുസെെഫ്.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ബിലാല്‍.വി.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "റുഷ്ദാന്‍.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "മൊഹ്യുദ്ധീന്‍.കെ" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "ഫിറോസ്-പി" },
  { img: "https://miro.medium.com/v2/resize:fit:2400/1*ijJZdYAGuP0me0QqQF1Zxg.png", name: "മുസ്തഫ.വി.കെ" }
];


  return (
    <div className="instagram-banner fix section-padding bg-cover">
      <div className="instagram-wrapper">
        <h2 className="text-center wow fadeInUp" data-wow-delay=".3s">
          Our Members
        </h2>
        <div className="swiper instagram-banner-slider">
          <div className="swiper-wrapper cs_slider_gap_301">
            <Slider {...settings}>
              {instagramContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="instagram-banner-items">
                    <div className="banner-image">
                      <Image
                        src={item.img}
                        alt="img"
                        width={270}
                        height={230}
                      />
                      {/* <a href="#" className="icon">
                        <i className="bi bi-instagram"></i>
                      </a> */}
                      <p style={{color:"black",marginLeft:"5px",fontWeight:"bold"}}>{item.name}</p>
                      <p  style={{marginLeft:"5px"}}>{item.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram1;
