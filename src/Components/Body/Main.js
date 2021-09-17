import React from "react";
import Addressing from "./Addressing";

import "./Main.css";
import Overview from "./Overview";
import SimilarHomes from "./SimilarHomes";
const Main = () => {
  return (
    <>
      <div className="Main">
        <Addressing />
        <Overview />
      </div>
      <SimilarHomes />
    </>
  );
};

export default Main;
