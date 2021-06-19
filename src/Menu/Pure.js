import React from "react";
import "./Pure.css";
import gardener from "../images/whypure imgs/purebackground.jpg";
import cow from "../images/whypure imgs/coww.jpg";

function Pure() {
  return (
    <div className="background-p">
      <div className="heading-p">
        <h1>Why Pure</h1>
      </div>
      <div className="box-p1">
        <div className="image-p">
          <img src={cow} className="girl" />
        </div>
        <div className="content-p">
          Its sad that for the sake of profit people compromise with the health
          as farmers use more and more pesticides to produce more. There is-non
          existent availability of chemical free food. In today's world, health
          is the main concern of almost every individual.
        </div>
      </div>
      <div className="box-p2">
        <div className="content-p">
          A healthy diet is essential for good health and nutrition. Organic
          foods often have more beneficial nutrients, such as antioxidants, than
          their conventionally-grown counterparts. Chemical free food protect
          the body against aging, cardiovascular disease, and cancer.
        </div>
        <div className="image-p">
          <img src={gardener} />
        </div>
      </div>
    </div>
  );
}

export default Pure;
