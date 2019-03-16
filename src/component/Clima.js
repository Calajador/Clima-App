import React from 'react';

const Clima = props => (

 <div>
    {
       props.ciudad && props.pais && <p className="weather__key">Lugar:
           <span className="weather__value"> {props.ciudad}, {props.pais}</span>
           </p>
    }

    {
       props.temperatura && <p className="weather__key">Temperatura: 
       <span className="weather__value"> {props.temperatura}</span>
       </p>
    }

    {
       props.humedad && <p className="weather__key">Humedad: 
       <span className="weather__value"> {props.humedad}</span>
       </p>
    }

    {
       props.descripcion && <p className="weather__key">Condiciones: 
       <span className="weather__value"> {props.descripcion}</span>
       </p>
    }

    {
       props.error && <p className="weather__error">{props.error}</p>
    }
 </div>
);


export default Clima;