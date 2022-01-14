function criaPessoa(nome, sobrenome, idade) { // objeto dentro de uma função
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa1 = criaPessoa('Ially', 'Fabiane', 27)
const pessoa2 = criaPessoa('Wagner', 'Kazuhiko', 34)
console.log(pessoa1.idade)
console.log(pessoa2.nome)