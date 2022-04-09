import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, changeConnection }) => {
  return (
    <div>
      <h2>Nombre: {contact.nombre}</h2>
      <h3>Apellido: {contact.apellido}</h3>
      <h4>Email: {contact.email}</h4>
      <div>
        <h5>{contact.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
        <button 
          onClick={changeConnection}
        >Change Connection</button>
      </div>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
