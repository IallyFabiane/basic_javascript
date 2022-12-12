function fizzBuzz(numero) {
    if (typeof numero !== "number") {
        return numero;
    };

    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 !== 0 && numero % 5 !== 0) {
        return numero;
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    };
};

for (let i = 0; i <= 100; i++) { //aplicando a função para números de 0 a 100
    console.log(i, fizzBuzz(i));
};

