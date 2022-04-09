import { useState } from 'react'
import './App.css'
import ComponenteA from './components/ComponenteA';
import { Contact } from './models/contact.class';

function App() {

  const contacto = new Contact('Jose', 'Alvarado', 'alvarado@email.com', false);

  return (
    <div className="App">
      <ComponenteA 
        contacto={contacto}
      />
    </div>
  )
}

export default App
