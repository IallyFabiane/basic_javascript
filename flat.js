const arr1 = [ 1, 2, [3, 4] ]; // tudo concatendado no nível default = 1
console.log(arr1.flat()); 

const arr3 = [1, 2, [3, 4, [5, 6]]]; // tudo concatenado até o nível 2
console.log(arr3.flat(2));


const arr4 = [1, 2, [3, 4, [5, 6, [7, 8]]]]; //tudo concatenado em único array independentemente do número de níveis do array multidimensional
console.log(arr4.flat(Infinity));