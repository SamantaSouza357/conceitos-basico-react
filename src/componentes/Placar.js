import React, { useState } from "react";
import  "./Placar.scss";

const Placar = ({time}) =>{
    const [votos, setVotos] = useState(0);

    const incrementar = ()  => {
        setVotos(votos + 1);
    }
    const descrementar = () => {
       if (votos >= 1) {
           setVotos(votos - 1 );
       }
       else{
           alert('impossivel diminuir');
       }
    }

    return (
        <div className="Placar">
            <h1>{time} </h1>
            <h2>{votos}</h2>
            <div>
                <button onClick={descrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    )
}

export default Placar;