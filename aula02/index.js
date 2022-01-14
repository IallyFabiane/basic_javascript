const nomes = ['Ially', 'Wagner', 'Severina']
nomes[nomes.length] = 'José' //adiciona um valor no fim do array
nomes.push('Antonia') // adiciona um valor no fim do array
nomes.unshift('Fabiane') //adiciona um valor no começo do array, modificandoos índices
const removido = nomes.pop() // remove valor do final do array
const left = nomes.shift() // remove valor do começo do array
console.log(left)
console.log(removido)
console.log(nomes)
delete nomes [0]
console.log(nomes)
console.log(nomes instanceof Array) // retorna se é ou não um Array