import React from "react";

import img1 from "../../../Assets/1.png";
import img2 from "../../../Assets/2.png";
import img3 from "../../../Assets/3.png";
import img4 from "../../../Assets/4.png";
import img5 from "../../../Assets/5.png";
import play from "../../../Assets/plybtn.png";
import right from "../../../Assets/right.jpg";
import left from "../../../Assets/left.png";
import share from "../../../Assets/share.png";
import heart from "../../../Assets/heart.png";
import sound from "../../../Assets/sound.png";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery-img">
        <img className="actual" src={img1} alt="stairs" />
      </div>
      <div className="Gallery-img">
        <img className="actual" src={img2} alt="LCD" />
      </div>
      <div className="Gallery-img">
        <img className="actual" src={img3} alt="a house" />
        <img className="play" src={play} alt="" />
        <img className="right" src={right} alt="" />
        <img className="left" src={left} alt="" />
        <img className="share" src={share} alt="" />
        <img className="heart" src={heart} alt="" />
        <img className="sound" src={sound} alt="" />
      </div>
      <div className="Gallery-img">
        <img className="actual" src={img4} alt="sofa" />
      </div>
      <div className="Gallery-img">
        <img className="actual" src={img5} alt="bed" />
      </div>
    </div>
  );
};

export default Gallery;
