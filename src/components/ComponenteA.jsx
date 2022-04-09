import React from 'react'
import PropTypes from 'prop-types'
import ComponenteB from './ComponenteB'
import { Contact } from '../models/contact.class'

function ComponenteA({ contacto }) {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h3>Apellido: {contacto.apellido}</h3>
      <h4>Email: {contacto.email}</h4>
      <ComponenteB estado={true} />
    </div>
  )
}

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
}

export default ComponenteA

