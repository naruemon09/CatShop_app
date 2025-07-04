import React, { use, useEffect, useState } from "react";
import About from "./About";
import CatShop from "./CatShop";
import Footer from "./Footer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  useEffect(() => {
    const fecthUser = async () => {
      const token = localStorage.getItem("token");
      const _myheander = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.get("https://localhost:7092/api/Users",_myheander);

      console.log(response);
    };
    fecthUser();
  }, []);
  return (
    <div>
      <section id="banner" style={{ background: "#F9F3EC" }}>
        <div class="container">
          <div class="swiper main-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide py-5">
                <div class="row banner-content align-items-center">
                  <div class="img-wrapper col-md-5">
                    <img
                      src="/src/images/banner-img.png"
                      className="img-fluid"
                    />
                  </div>
                  <div class="content-wrapper col-md-7 p-5 mb-5">
                    <div class="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 class="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span class="text-primary">your pets</span>
                    </h2>
                    <a
                      href="#"
                      class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="mb-1"
                      >
                        <use xlink:href="#arrow-right"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide py-5">
                <div class="row banner-content align-items-center">
                  <div class="img-wrapper col-md-5">
                    <img src="/src/images//banner-img3.png" class="img-fluid" />
                  </div>
                  <div class="content-wrapper col-md-7 p-5 mb-5">
                    <div class="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 class="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span class="text-primary">your pets</span>
                    </h2>
                    <a
                      href="#"
                      class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="mb-1"
                      >
                        <use xlink:href="#arrow-right"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide py-5">
                <div class="row banner-content align-items-center">
                  <div class="img-wrapper col-md-5">
                    <img src="/src/images/banner-img4.png" class="img-fluid" />
                  </div>
                  <div class="content-wrapper col-md-7 p-5 mb-5">
                    <div class="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 class="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span class="text-primary">your pets</span>
                    </h2>
                    <a
                      href="#"
                      class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="mb-1"
                      >
                        <use xlink:href="#arrow-right"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination mb-5"></div>
          </div>
        </div>
      </section>
      <About />
      <CatShop />
      <Footer />
    </div>
  );
};

export default Home;
