import React from "react";
import img from "../assets/Vector.png"


export default function Hero(){
    return(
        <div>
            <figure>
            <img src={img} alt="" />
            </figure>
            <div className="content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activites led by one of a ind hosts all without leaving home</p>
            </div>
        </div>
    )
}