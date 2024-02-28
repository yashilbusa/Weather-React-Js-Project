import React, { useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState("null");
    const [search, setSearch] = useState("Mumbai");

    return ( 
        <>
            <div className="box">
                <div className="inputdata">
                    <input
                        type="search"
                        className="inputfield"
                        onChange={(event) => {

                        }} />
                </div>


                <div className="info">
                    <h2 className="location">
                        <i class="fas fa-street-view"></i>{city}
                    </h2>

                    <h1 className="temp">
                        5.25cel
                    </h1>

                    <h3 className="tempmin_max"> Min : 5.25 celisus | Max : 5.25 celisus</h3>

                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>

            </div>

        </>
    )
}

export default Tempapp;