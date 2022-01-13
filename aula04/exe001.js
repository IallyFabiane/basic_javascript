let num1 = 0.7;
let num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2;
num1 = Number(num1.toFixed(2)); //para eliminar a imprecisão de cálculos com múltiplas casas decimais em JavaScript
console.log(num1)