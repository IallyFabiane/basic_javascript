let output = [];
let count = 1;
function fizzBuzz() {
    output.push(count);
    if (count % 3 === 0 && count % 5 === 0) {
        output.pop(count);
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.pop(count);
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.pop(count);
        output.push("Buzz");
    } 
    count++;
    console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();