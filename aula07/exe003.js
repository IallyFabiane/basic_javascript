const nome = 'Ially Fabiane';
const sobrenome = 'da Silva';
const idade = 28;
const peso = 60;
const alturaEmM = 1.54;
let anoNascimento;
anoNascimento = 2022 - idade
let IMC = peso / (alturaEmM * alturaEmM)
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg')
console.log(`possui ${alturaEmM} metros de altura e seu IMC é de', ${IMC}`)
console.log(nome, 'nasceu em', anoNascimento)