import React from 'react';
import BotonSuma from '../BotonPausa/BotonPausa';
import './CardContador.css';


function CardContador ({ suma, count }) {
    
    return (
        <div className="card">
            <p>El cronómetro</p>
        <BotonSuma suma={suma} count={count} texto="Haz clic aquí" />
      </div>
    )
}

export default CardContador;