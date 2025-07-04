/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <img
          src="media/images/homeHero.png"
          alt="hero Image"
          className="img-fluid mb-4"
          style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
        />

        <h1 className="mt-4 display-5 fw-bold">Invest in everything</h1>

        <p className="lead fs-5 px-2">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button
          className="btn btn-primary fs-5 mt-3 px-4 py-2mb-5"
          style={{ maxWidth: "200px", width: "100%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
