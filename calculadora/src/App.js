import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';
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
      <Header />
      <div className="contenedor">
        <Entrada label="Primera Cifra" num={num1} onChange={setNum1} />
        <Entrada label="Segunda Cifra" num={num2} onChange={setNum2} />
      </div>
      <div className="contenedor">
        <Boton operacion="Sumar" onClick={Opera} />
        <Boton operacion="Restar" onClick={Opera} />
        <Boton operacion="Multiplicar" onClick={Opera} />
        <Boton operacion="Dividir" onClick={Opera} />
      </div>
      <div className="contenedor">
        <p>{ultimaOperacion}: {resultado}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;