let varA = 'a'
let varB = 'b'
let varC = 'c'

const varATemp = varA
varA = varB
varB = varC
varC = varATemp
console.log(varA, varB, varC)

