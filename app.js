var calculo = prompt('Digite a operação desejada (+, -, *, /)')
var num1 = prompt('Digite o primeiro número a se calcular')
var num2 = prompt('Digite o segundo número a se calcular')

num1 = parseInt(num1);
num2 = parseInt(num2)

var resultadoSoma = num1 + num2;
var resuldadoSubtracao = num1 - num2;
var resultadoMultiplicacao = num1 * num2;
var resultadoDivisao = num1 / num2;

if ( calculo == "+" ) {
    document.write('A soma de '+ num1 +' e ' + num2 +' é '+ resultadoSoma)
}

if ( calculo == "-" ) {
    document.write('A subtração de '+ num1 +' e ' + num2 +' é '+ resultadoSubtracao)
}

if ( calculo == "*" ) {
    document.write('A multiplicação de '+ num1 +' e ' + num2 +' é '+ resultadoMultiplicacao)
}

if ( calculo == "/" ) {
    document.write('A divisão de '+ num1 +' e ' + num2 +' é '+ resultadoDivisao)
}

alert('Obrigado por utilizar a calculadora!')