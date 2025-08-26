"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Destination2 = () => {
  const bookContent = [
    {
      img: "/assets/img/referenceBook/1.jpg",
      title: "The Power of Giving",
      author: "Azim Jamal & Harvey McKinnon",
      genre: "Charity / Inspiration",
    },
    {
      img: "/assets/img/referenceBook/2.jpg",
      title: "Libraries and Learning",
      author: "Robert Wedgeworth",
      genre: "Education / Library",
    },
    {
      img: "/assets/img/referenceBook/3.jpg",
      title: "Hope in Hard Times",
      author: "Sarah Johnson",
      genre: "Relief / Humanitarian",
    },
    {
      img: "/assets/img/referenceBook/4.jpg",
      title: "Voices of Change",
      author: "Michael Green",
      genre: "Social Impact / Video Stories",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
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

  return (
    <section className="new-destination-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">Our Books</span>
            <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
              Our Top Books For <br /> You Property
            </h2>
          </div>
          <Link href="/" className="theme-btn">
            Learn More <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="new-destination-wrapper">
          <div className="swiper new-destination-slider">
            <div className="swiper-wrapper cs_slider_gap_301">
              <Slider {...settings}>
                {bookContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="new-destination-items">
                      <div className="thumb">
                        <Image
                          src={item.img}
                          alt="img"
                          width={424}
                          height={505}
                        />
                        <div className="content">
                          <div className="title-text">
                            <h3>
                              <Link href="">{item.title}</Link>
                            </h3>
                            <p>{item.author}</p>
                          </div>
                          <Link href="" className="icon">
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination2;
