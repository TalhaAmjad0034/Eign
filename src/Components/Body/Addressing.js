import React, { useState } from "react";

import bed from "../../Assets/bed.png";
import bath from "../../Assets/bath.png";
import square from "../../Assets/square.png";
import lot from "../../Assets/lot.png";
import live from "../../Assets/live.png";
import school from "../../Assets/school.png";
import crime from "../../Assets/crime.png";
import noise from "../../Assets/noise.png";
import star from "../../Assets/star.png";
import air from "../../Assets/air.png";
import transport from "../../Assets/transport.png";
import electric from "../../Assets/electric.png";
import alarm from "../../Assets/alarm.png";
import cam from "../../Assets/cam.png";
import pool from "../../Assets/pool.png";
import park from "../../Assets/park.png";
import water from "../../Assets/water.png";
import laundry from "../../Assets/laundry.png";
import fire from "../../Assets/fire.png";
import dropdown from "../../Assets/dropdown.jpg";

import "./Addressing.css";
const Addressing = () => {
  const [openfeature, setopenfeature] = useState(false);
  const [openhistory, setopenhistory] = useState(false);
  const [opentaxes, setopentaxes] = useState(false);
  const [openhood, setopenhood] = useState(false);

  const openHandler = () => {
    setopenfeature(!openfeature);
  };
  const openHandler2 = () => {
    setopenhistory(!openhistory);
  };
  const openHandler3 = () => {
    setopentaxes(!opentaxes);
  };
  const openHandler4 = () => {
    setopenhood(!openhood);
  };
  return (
    <div className="Addressing">
      <h1 className="Addressing-heading">
        914 Edgemont Avenue Elk River, MN 55330 8548 East Princeton St.
      </h1>
      <div className="Addressing-icons">
        <div className="pericon">
          <div className="icon-img">
            <img src={bed} alt="bed" />
          </div>
          <span>3 Bed</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={bath} alt="bed" />
          </div>
          <span>1 Bath</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={square} alt="bed" />
          </div>
          <span>1,321 sqf</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={lot} alt="bed" />
          </div>
          <span>3.14 lot</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={live} alt="bed" />
          </div>
          <div className="ratting">
            <img src={star} alt="" />
            <span>4.5</span>
          </div>
          <span>Liveability</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={school} alt="bed" />
          </div>
          <div className="ratting">
            <img src={star} alt="" />
            <span>4.5</span>
          </div>
          <span>School</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={crime} alt="bed" />
          </div>
          <div className="ratting">
            <img src={star} alt="" />
            <span>4.5</span>
          </div>
          <span>Crime</span>
        </div>
        <div className="pericon">
          <div className="icon-img">
            <img src={noise} alt="bed" />
          </div>
          <div className="ratting">
            <img src={star} alt="" />
            <span>4.5</span>
          </div>
          <span>Noise</span>
        </div>
      </div>
      <div className="Addressing-details">
        <h2>Details</h2>
        <p>
          Luxurious sun-drenched newly renovated corner 1Bed / 1,5 Bath Condo,
          approx. 771 sq ft with a private terrace at the Maison East
          Condominium is located on one of the most desirable streets on the
          Upper East Side just four blocks away from the Central Park and
          Metropolitan Museum.
        </p>
      </div>
      <div className="features">
        <h2>Apertment Features</h2>
        <div className="Addressing-appartment">
          <div className="appartment-item">
            <div>
              <img src={air} alt="" />
            </div>
            <span>Air Conditioning</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={transport} alt="" />
            </div>
            <span>Close to Transport</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={electric} alt="" />
            </div>
            <span>Electricity</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={alarm} alt="" />
            </div>
            <span>Alarm</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={cam} alt="" />
            </div>
            <span>Intercom</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={pool} alt="" />
            </div>
            <span>In-Ground Pool </span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={park} alt="" />
            </div>
            <span>Parking</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={water} alt="" />
            </div>
            <span>Water Supply</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={laundry} alt="" />
            </div>
            <span>Laundry</span>
          </div>
          <div className="appartment-item">
            <div>
              <img src={fire} alt="" />
            </div>
            <span>Fire Place</span>
          </div>
        </div>
      </div>

      <div className="feature-icons">
        <div className="property-feature">
          <h2>Property Feature</h2>
          <img
            onClick={openHandler}
            className={`dropdown2 ${openfeature ? "active" : ""}`}
            src={dropdown}
            alt=""
          />
        </div>
        <div className={`answer ${openfeature ? "active" : ""}`}>
          <div className="answerflex">
            <span className="property">Price/Sq.Ft.</span>
            <span className="quant">$725/Sq.Ft.</span>
          </div>
          <div className="answerflex">
            <span className="property">Baths</span>
            <span className="quant">3 Full, 1 parial</span>
          </div>
          <div className="answerflex">
            <span className="property">Community</span>
            <span className="quant"> </span>
          </div>
          <div className="answerflex">
            <span className="property">Stories</span>
            <span className="quant">2</span>
          </div>
          <div className="answerflex">
            <span className="property">Property Type</span>
            <span className="quant">Multifamily</span>
          </div>
          <div className="answerflex">
            <span className="property">Community</span>
            <span className="quant">Brooklyn</span>
          </div>
        </div>
      </div>
      <div className="propery-history">
        <div className="property-feature">
          <h2>Property History</h2>
          <img
            onClick={openHandler2}
            className={`dropdown3 ${openhistory ? "active" : ""}`}
            src={dropdown}
            alt=""
          />
        </div>
        <div className={`answer2 ${openhistory ? "active" : ""}`}>
          <div className="histry">
            <div className="dates">
              <span className="history-date">Jun 9, 2020</span>
              <h2 className="histry-active">Listed Active</h2>
            </div>
            <div className="money">$565,630</div>
          </div>

          <div className="histry">
            <div className="dates">
              <span className="history-date">Apr 7, 2012</span>
              <h2 className="histry-dim">Solid</h2>
            </div>
            <div className="money">$340,000</div>
          </div>
        </div>
      </div>
      <div className="property-taxes">
        <div className="property-feature">
          <h2>Property Taxes</h2>
          <img
            onClick={openHandler3}
            className={`dropdown4 ${opentaxes ? "active" : ""}`}
            src={dropdown}
            alt=""
          />
        </div>
        <div className={`answer3 ${opentaxes ? "active" : ""}`}>
          <div className="tax">
            <span>Tax Amount</span>
            <span>:</span>
            <span>$55,630</span>
          </div>
          <div className="tax">
            <span>Land</span>
            <span>:</span>
            <span>$3,694,000</span>
          </div>
          <div className="tax">
            <span>Improvements</span>
            <span>:</span>
            <span>$2,148,100</span>
          </div>
          <div className="tax">
            <span>Total</span>
            <span>:</span>
            <span>$5,842,100</span>
          </div>
        </div>
      </div>

      <div className="hood">
        <div className="property-feature">
          <h2>Neighbohood</h2>
          <img
            onClick={openHandler4}
            className={`dropdown5 ${openhood ? "active" : ""}`}
            src={dropdown}
            alt=""
          />
        </div>
        <div className={`charlotte ${openhood ? "active" : ""}`}>
          <h2>Charlotte Hall, MD</h2>
          <div className="charlotte-flex">
            <div className="charlotte-item">
              <h3>$399k</h3>
              <p>Median Price for sale</p>
            </div>
            <div className="charlotte-item">
              <h3>$399k</h3>
              <p>Median Price for sale</p>
            </div>
            <div className="charlotte-item">
              <h3>$399k</h3>
              <p>Median Price for sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addressing;
