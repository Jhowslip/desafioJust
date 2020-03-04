export function numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

export function somaItems(value1, value2) {
    if (value1) {
        value1 = value1.replace(/[^0-9,]*/g, '').replace(',', '.');
        let result = parseFloat(value1) + parseFloat(value2);

        return result;
    }
}

export function subtraiItems(value1, value2) {
    if (value1) {
        value1 = value1.replace(/[^0-9,]*/g, '').replace(',', '.');
        let result = parseFloat(value1) - parseFloat(value2);

        return result;
    }
}