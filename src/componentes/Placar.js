import React, { useState } from "react";
import  "./Placar.scss";

const Placar = ({time}) =>{
    const [votos, setVotos] = useState(0);

    return (
        <div className="Placar">
            <h1>{time} </h1>
            <h2>{votos}</h2>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    )
}

export default Placar;