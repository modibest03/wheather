import React from "react";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import shower from "../assets/Shower.png";
import cloudBackground from "../assets/Cloud-background.png";

import "./WheatherCondition.scss";

function WheatherCondition({ setSearch }) {
  return (
    <div className="wheathercondition">
      <div className="wheathercondition__buttons">
        <button onClick={() => setSearch("search")}>Search for places</button>
        <div>
          <MyLocationIcon />
        </div>
      </div>
      <div className="wheathercondition__icons">
        <img src={cloudBackground} alt="cloud background icon" />
        <img src={shower} alt="shower icon" />
      </div>
      <div className="wheathercondition__degrees">
        <span>15</span>
        <span>℃</span>
      </div>
      <div className="wheathercondition__description">Shower</div>
      <div className="wheathercondition__day">
        <span>Today</span> . <span>Fri, 5 Jun</span>
      </div>
      <div className="wheathercondition__location">
        <span>
          <LocationOnIcon />
        </span>
        <span>Helsinki</span>
      </div>
    </div>
  );
}

export default WheatherCondition;
