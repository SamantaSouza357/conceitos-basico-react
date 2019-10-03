import React from "react";
import Placar from "./Placar";
import "./PlacarContainer.scss";

const PlacarContainer = () =>{
    return (
        <div className="PlacarContainer">
            <Placar  time="Front End"/>
            <Placar time="Back End" />
            <Placar time="Full Stack"/>
        </div>
    )
}

export default PlacarContainer;
