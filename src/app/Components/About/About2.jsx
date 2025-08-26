import Image from "next/image";
import Link from "next/link";
import React from "react";

const About2 = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="https://images.justlanded.com/classified_images/Deutschland_Baden-Wurttemberg_Karlsruhe/Kurse_Sprachkurse/Kostenloser-Schnupperkurs-Englisch-fur-Kinder-3-6J-amp-7-10J/photo/scaled_772866_1442101.jpg"
                  className="wow img-custom-anim-left"
                  alt="img"
                  width={330}
                  height={512}
                />
                <div className="group-image float-bob-x"></div>
                <div className="about-image-2">
                  <Image
                    src="https://as2.ftcdn.net/jpg/01/64/02/81/1000_F_164028195_DYIi4yWK6udqV5iW3y0LEW6VPQnaph5s.jpg"
                    className="wow img-custom-anim-top"
                    alt="img"
                    width={284}
                    height={411}
                  />
                  {/* <div className="plane-shape">
                                        <Image src="/assets/img/about/plane-shape2.png" alt="img" width={370} height={205}   />
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">Get About Us</span>
                  <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                    വായനശാലയെക്കുറിച്ച് 
                  </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                  പരമ്പരാഗത കർഷകനും, സാമൂഹ്യ രാഷ്ട്രീയരംഗത്തെ
                  നിറസാനിധ്യമായിരുന്ന കരുവാൻകുഴി മമ്മദ്ക്കയുട സ്മരണാർത്ഥം 2016
                  ഏപില്‍ 2മുതല്‍ കെ.മമ്മദ് സ്മാരക വായനശാല എന്നപേരില്‍ കുപ്പൂത്ത്
                  കേന്ദ്രമായി പ്രവര്‍ത്തിച്ചു വരുന്നു. വിളയൂർഗ്രാമപഞ്ചായത്ത്
                  പരിധിയിൽ കലാകായിക,സാംസ്കാരിക, ജീവകാരുണ്യ പ്രവര്‍ത്തനങ്ങളില്‍
                  ഇടപെട്ട് പ്രവര്‍ത്തിക്കുക.മറ്റു വിവിധങ്ങളായ ഉദ്യേശ
                  ലക്ഷ്യങ്ങളാണ് വായനശാലക്കുള്ളത്.2018ല്‍ താലൂക്ക് ലെെബ്രറി
                  കൗണ്‍സിലിന്റെ അംഗീകാരം വായനശാലക്ക് ലഭിച്ചു. ഈ കാലയളവിനുള്ളില്‍
                  നിരവധിയായ പ്രവര്‍ത്തനങ്ങള്‍ ഏറ്റെടുത്ത് വിജയിപ്പിക്കുവാന്‍
                  വായനശാലക്ക് കഴിഞ്ഞിട്ടുണ്ട്. വരുംകാലങ്ങളില്‍ കൂടുതല്‍
                  മേഘലകളിലേക്ക് പ്രവര്‍ത്തനങ്ങള്‍ വ്യാപിപ്പിക്കുന്നതിന് വിവിധ
                  പരിപാടികളാണ് വായശാല ആസൂത്രണം ചെയ്തിട്ടുള്ളത്{" "}
                </p>
                <Link
                  href="/about"
                  className="theme-btn wow fadeInUp wow"
                  data-wow-delay=".7s"
                >
                  Discover More<i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
