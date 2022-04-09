import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponenteB = ({estado}) => {

  const [ conectado, setConectado ] = useState(estado)

  const handleClick = () => {
    setConectado(!conectado)
  }

  return (
    <div>
      <h4>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h4>
      <button
        onClick={handleClick}
      >{conectado ? 'Conectado' : 'Desconectado'}</button>
    </div>
  );
};


ComponenteB.propTypes = {
  estado: PropTypes.bool,
};


export default ComponenteB;
