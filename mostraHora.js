function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
};

function intervalo() {
    console.log(mostraHora());
}

//setInterval(intervalo, 3000); executada a cada intervalo
//setTimeout(intervalo, 3000); executada apenas uma vez