import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact'

function ContactListComponent(props) {

  const defaultContact = new Contact('Jose', 'Alvarado', 'josealvarado@correo.com', false);
  const [contact, setContact] = useState(defaultContact)

  console.log(contact)

  const changeConnection = () => {
    setContact({
      ...contact,
        conectado : !contact.conectado
    })
  }

  return (
    <div>
      <h1>Your contacts: </h1>

      {/* TODO: Aplicar un For/Map para renderizar una lista de contactos */}
      <ContactComponent 
        contact={contact}
        changeConnection={changeConnection}
      />
    </div>
  )
}


export default ContactListComponent

