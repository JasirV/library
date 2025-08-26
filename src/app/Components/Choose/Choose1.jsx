"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { ImBooks } from "react-icons/im";

const Choose1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="travel-feature-section section-padding fix"
      data-background="/assets/img/travel-bg.jpg"
    >
      <div className="shape-1 float-bob-y">
        {/* <Image src="/assets/img/plane-shape1.png" alt="img" width={218} height={244}   /> */}
      </div>
      <div className="shape-2 float-bob-x">
        {/* <Image src="/assets/img/plane-shape2.png" alt="img" width={310} height={459}   /> */}
      </div>
      <div className="container">
        <div className="feature-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Are you ready to explre more about us
                  </span>
                  <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                    Discover, Borrow, and Read Anytime, Anywhere
                  </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which do not
                  look even slightly believable.
                </p>
                <div className="feature-area">
                  <div className="line-shape">
                    <Image
                      src="/assets/img/line-shape.png"
                      alt="img"
                      width={1}
                      height={174}
                    />
                  </div>
                  <div
                    className="feature-items wow fadeInUp wow"
                    data-wow-delay=".5s"
                  >
                    <div className="feature-icon-item">
                      <div className="icon">
                        {/* <Image
                          src="/assets/img/icon/08.svg"
                          alt="img"
                          width={40}
                          height={40}
                        /> */}
                        <ImBooks size={35} color="white" />
                      </div>
                      <div className="content">
                        <h5>
                          Access online courses <br /> and digital books
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Users can search, borrow,
                          <br /> and return books easily
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="feature-items wow fadeInUp wow"
                    data-wow-delay=".7s"
                  >
                    <div className="feature-icon-item">
                      <div className="icon">
                        {/* <Image
                          src="/assets/img/icon/09.svg"
                          alt="img"
                          width={29}
                          height={40}
                        /> */}
                        <TbTruckDelivery size={35} color="white" />

                      </div>
                      <div className="content">
                        <h5>
                          Learn anywhere with <br /> our library system
                        </h5>
                      </div>
                    </div>
                    <ul className="circle-icon">
                      <li>
                        <i className="fa-solid fa-badge-check"></i>
                      </li>
                      <li>
                        <span>
                          Our Library System <br />
                          helps manage books,
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="theme-btn wow fadeInUp wow"
                  data-wow-delay=".9s"
                >
                  Contact US<i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-image wow img-custom-anim-left">
                <Image
                  src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill%2Cf_auto%2Ch_768%2Cw_1024/v1406864074/pvr8iqplevtrxmq8lnl1.jpg"
                  alt="img"
                  width={636}
                  height={577}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose1;
