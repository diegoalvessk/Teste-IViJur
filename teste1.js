function verificaMaiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        maior = num1;
    } else if (num2 > num1 && num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }
    console.log("O maior número é:", maior);
}

var num1 = parseFloat(prompt("Digite o número 1: "));
var num2 = parseFloat(prompt("Digite o número 2: "));
var num3 = parseFloat(prompt("Digite o número 3: "));

verificaMaiorNumero(num1, num2, num3);