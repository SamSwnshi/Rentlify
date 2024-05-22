import React from "react";

import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import {  Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Swiper>
        <SwiperSlide>
          <div className="home-color">
            <h2 className="home-heading">Welcome to Your Dream Home Destination!</h2>

            <h2 className="home-name">
              Rentify
              <span style={{ color: "#2AA7FF" }}>
                {" "}
                Where Renting Meets Simplicity
              </span>
            </h2>
            <p className="home-para">
              Discover the perfect blend of luxury, comfort, and convenience
              with our expertly curated properties.
            </p>

            <Link to="/search">
              <Button variant="contained" size="large" disableElevation>
                Find Properties
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
