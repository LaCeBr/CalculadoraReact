import './App.css';
import React, { useState } from 'react';
import Entrada from './componentes/CampoNumerico';
import Boton from './componentes/Boton';
import Calculo from './componentes/Calculo';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [ultimaOperacion, setUltimaOperacion] = useState('Resultado');

  const Opera = (operacion) => {
    setResultado(Calculo(num1, num2, operacion));
    setUltimaOperacion(operacion);
  };

  return (
    <div>
      <Entrada label="Primera Cifra" num={num1} onChange={setNum1} />
      <Entrada label="Segunda Cifra" num={num2} onChange={setNum2} />

      <Boton operacion="Sumar" onClick={Opera} />
      <Boton operacion="Restar" onClick={Opera} />
      <Boton operacion="Multiplicar" onClick={Opera} />
      <Boton operacion="Dividir" onClick={Opera} />
      
      <p>{ultimaOperacion}: {resultado}</p>
    </div>
  );
}

export default App;