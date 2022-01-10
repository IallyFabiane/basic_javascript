let amigo = {
    name:'José',
     sex:'M', 
     age:15, 
     weight:85.4,
     fatten (w=0) {
         console.log('Engordou')
         this.weight += w
     }
    }

console.log(typeof amigo)
console.log(amigo)
console.log(amigo.name)
amigo.fatten (2)
console.log(`${amigo.name} pesa ${amigo.weight}`)