import React from "react";

import img from "../../Assets/dealing.png";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="typo">
        <h3>Subscribe our newsroom, We will update you exicitng offer</h3>
        <p>Trust us we don’t spaming you.</p>

        <div className="input">
          <form action="#">
            <input type="email" required placeholder="your email address" />
            <span type="submit">Submit</span>
          </form>
        </div>
      </div>
      <div className="Subs-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
