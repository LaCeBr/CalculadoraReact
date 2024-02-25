function Boton({ operacion, onClick }) {
    return (
      <button onClick={() => onClick(operacion)}>{operacion}</button>
    );
  }
  
  export default Boton;