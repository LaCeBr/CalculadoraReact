function Calculo(num1, num2, operacion) {
    switch (operacion) {
        case 'Sumar':
            return num1 + num2;
        case 'Restar':
            return num1 - num2;
        case 'Multiplicar':
            return num1 * num2;
        case 'Dividir':
            return num1 / num2;
        default:
            return 0;
    }
}

export default Calculo;