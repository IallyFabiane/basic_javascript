function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    }
    else if (a === b) {
        return "Os valores são idênticos, forneça valores diferentes um do outro"
    }
};

console.log(maiorNumero(3, 2));