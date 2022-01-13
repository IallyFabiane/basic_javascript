function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam valores. Tente novamente.')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (var contador = i; contador <= f; contador+=p) {
                res.innerHTML += ` ${contador} \u{1F449} 	`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // CONTAGEM REGRESSIVA
            for (var contador = i; contador >= f; contador-=p) {
                res.innerHTML += ` ${contador} \u{1F449}    `
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}