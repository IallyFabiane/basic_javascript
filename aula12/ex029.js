var agora = new Date()
var diaSem = agora.getDay()
/*
0 = DOMIGO
1 = SEGUNDA
2 = TERÇA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SÁBADO
*/
console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
    console.log('Sábado')
    break
    default:
        console.log('[ERRO] Dia inválido!')
}