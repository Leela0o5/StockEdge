/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Banner */}
      <div className="py-4 px-3" id="supportWrapper">
        <h4 className="text-white mb-0">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      {/* Main Body */}
      <div className="row p-4 m-3">
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-4" />

          <div>
            <a href="" className="d-block mb-2">
              Track account opening
            </a>
            <a href="" className="d-block mb-2">
              Track segment activation
            </a>
            <a href="" className="d-block mb-2">
              Intraday margins
            </a>
            <a href="" className="d-block mb-2">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol>
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mb-2">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
