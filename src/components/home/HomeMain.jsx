import React from "react";
import { Link } from "react-router-dom";
import UpComing from "../../components/HomeProgrammes/UpComing";
import theme from "../../theme";

const HomeMain = () => {
  const palate = theme();
  return (
    <main id="main">
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="ResAbout">
        <div className="container">
          <div className="content d-flex align-items-center justify-content-center">
            <h2 className="justify-content-center">WHO WE ARE</h2>
          </div>
          <div className="row">

            {/* Text */}
            <div className="col-md-6 text-left">
              <h3 className="mb-3">
                <b>CHRISTIAN YOUTH SUMMIT</b>
              </h3>
              <p>
                Is an annual interdenominational conference of young people under a highly saturated atmosphere of God's prescence.
                Every moment of the retreat is strategically and prayerfully planned to produce remarkable experiences of spiritual refreshing, rekindling and personal revival
              </p>
              <p>
                The main thrust of the summit is to pursue transformation in the lives of youths, provide and engage young people in descipleship,create exposures for leadership and capacity development, and to channel and maximize the grace of God upon their lives in strategic kingdom labours for revival
              </p>
              <p>
                The summit was first held in january 2010 and has over the years provided a platform for youths across various denominational backgrounds, schools, careers and a different spheres of life
              </p>
            </div>

            {/* img */}
            <div className="col-md-6">
              <img src="/cysm.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Clients Section ======= --> */}
      <section
        className="p-1 py-0 pl-sm-5 pr-sm-5 mb-5"
        style={{
          backgroundColor: palate.background.default,
        }}
      >
        <UpComing bodyClass={`bg-none p-0`} programs={[]} />
      </section>

      {/* 
            <section id="services" className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="icon-box">
                                <i className="bi bi-briefcase"></i>
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* <!-- ======= Portfolio Section ======= --> */}
      {/* <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="assets/Arc (2).jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="portfolio-details-lightbox"
                                            data-glightbox="type: external" title="Portfolio Details"><i
                                                className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
    </main>
  );
};

export default HomeMain;
