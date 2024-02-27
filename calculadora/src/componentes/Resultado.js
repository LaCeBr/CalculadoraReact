function Resultado({ operacion, solucion }) {
    let ultimaOperacion= '';

    switch (operacion) {
        case '+':
            ultimaOperacion = 'Sumados';
            break;
        case '-':
            ultimaOperacion = 'Restados';
            break;
        case 'x':
            ultimaOperacion = 'Multiplicados';
            break;
        case '/':
            ultimaOperacion = 'Divididos';
            break;
        default:
            ultimaOperacion = 'Resultado';
    }
  
    return (
        <p>{ultimaOperacion}: {solucion}</p>
    );
  }
  
  export default Resultado;