
let rows = 8;
let columns = ['a', 'b', 1, 2];
let arr = [];

for (let i = 0; i < rows; i++) {
     arr[i] = [];
    for (let j = 0; j < columns.length; j++) {
      arr[i][j] = columns;
    }
}

console.log(arr);

let frutas = [
    ['maçã', 'pêra'],
    ['uva', 'banana']
]


let valores = '';
for (let i = 0; i < frutas.length; i++) {
    for (let j = 0; j < frutas[1].length; j++) {

      console.log(valores += frutas[i][j] + '\t\t');
        
    }
}

