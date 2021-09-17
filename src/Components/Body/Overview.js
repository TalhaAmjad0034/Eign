import React, { useState } from "react";

import graph from "../../Assets/graph.png";
import dropdown from "../../Assets/dropdown.jpg";
import maps from "../../Assets/maps.png";
import "./Overview.css";
import Datecarosel from "./Datecarosel";
const Overview = () => {
  const [opengraph, setOpenGraph] = useState(false);
  const [school, setSchool] = useState(false);
  const [surrounding, setsurrounding] = useState(false);
  const graphHandler = () => {
    setOpenGraph(!opengraph);
  };
  const schoolHandler = () => {
    setSchool(!school);
  };
  const surroundingHandler = () => {
    setsurrounding(!surrounding);
  };
  return (
    <div className="Overview">
      <div className="pricing">
        <div className="pricing-top">
          <h1>$1,150,000</h1>
          <span>FOR SALE</span>
          <span>Listed 2 days ago</span>
        </div>
        <p>914 Edgemont Avenue Elk River, MN 55330 8548 East Princeton St.</p>
        <div className="qualified">
          <span className="blueone">Get pre-qualified</span>
          <div className="quali-price">
            <span>Est. payment:</span>
            <span>$2,147/mo</span>
          </div>
        </div>
      </div>
      <h2 className="aqua-btn">Send message to seller</h2>
      <h2 className="blue-btn">Submit an offer</h2>
      <Datecarosel />
      <div className="mortgage">
        <div className="monthly">
          <h2>Monthly Mortgage</h2>
          <img
            className={`inverter ${opengraph ? "active" : ""}`}
            onClick={graphHandler}
            src={dropdown}
            alt=""
          />
        </div>
        <div className={`graph ${opengraph ? "active" : ""}`}>
          <div className="img">
            <img src={graph} alt="" />
          </div>
          <div className="colors">
            <span className="forcolor blue">Principal & Interest</span>
            <span>$24,630</span>
          </div>
          <div className="colors">
            <span className="forcolor aqua">Property Taxes</span>
            <span>$4,630</span>
          </div>
          <div className="colors">
            <span className="forcolor light">Home Insurance</span>
            <span>$730</span>
          </div>
          <div className="colors">
            <span className="forcolor darkone">HOA</span>
            <span>$354</span>
          </div>
          <div className="colors">
            <span className="forcolor lightblue">Mortgage Insurance</span>
            <span>$290</span>
          </div>
        </div>
      </div>

      <div className="nearbyschools">
        <div className="monthly">
          <h2>Nearby Schools</h2>
          <img
            className={`inverter ${school ? "active" : ""}`}
            onClick={schoolHandler}
            src={dropdown}
            alt=""
          />
        </div>
        <div className={`maps ${school ? "active" : ""}`}>
          <div className="map-content">
            <div className="imege">
              <img src={maps} alt="" />
            </div>
            <div className="adress-1">
              <div className="actual-adress">
                <span className="adrs">Ps 183 Robert L Stevenson</span>
                <span>0.1</span>
              </div>
              <div className="street">
                <span>Public &nbsp; &nbsp; &nbsp; Grades PK-5</span>
                <span>mi</span>
              </div>
            </div>
            <div className="adress-1">
              <div className="actual-adress">
                <span className="adrs">Ps 183 Robert L Stevenson</span>
                <span>0.1</span>
              </div>
              <div className="street">
                <span>Public &nbsp; &nbsp; &nbsp; Grades PK-5</span>
                <span>mi</span>
              </div>
            </div>
            <div className="adress-1">
              <div className="actual-adress">
                <span className="adrs">Ps 183 Robert L Stevenson</span>
                <span>0.1</span>
              </div>
              <div className="street">
                <span>Public &nbsp; &nbsp; &nbsp; Grades PK-5</span>
                <span>mi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="surrondings">
        <div className="monthly">
          <h2>Surrounding</h2>
          <img
            className={`inverter ${surrounding ? "active" : ""}`}
            onClick={surroundingHandler}
            src={dropdown}
            alt=""
          />
        </div>
      </div>
      <div className={`surroundingcontent ${surrounding ? "active" : ""}`}>
        <div className="box">
          <p>Noise Level</p>
          <h2>N / A noise Level outside the property building at city</h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
