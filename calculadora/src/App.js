import './App.css';
import React, { useState } from 'react';
import CampoNumerico from './componentes/CampoNumerico';

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div>
      <p>Hola</p>
      <CampoNumerico label="Valor 1" value={value1} onChange={setValue1} />
      <CampoNumerico label="Valor 2" value={value2} onChange={setValue2} />
      <br />
      <p>Suma: {value1 + value2}</p>
    </div>
  );
}

export default App;