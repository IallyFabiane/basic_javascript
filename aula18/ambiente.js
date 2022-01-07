let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Nosso vetor é o ${num}.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
for (var posicao = 0;posicao < num.length;posicao++) {
    console.log(num[posicao])
}