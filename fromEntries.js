const array = [
    ["a", 1],
    ["b", 2],
];
  
const newObj = Object.fromEntries(array); //transformando array em objeto
  
console.log(newObj);