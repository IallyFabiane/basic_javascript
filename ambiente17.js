//tela login
    let loginCadastrado = "alura";
    let senhaCadastrada = "alura321";

    for(let tentativas = 2; tentativas >= 0; tentativas--){

        let loginInformado = prompt("Informe seu login");
        let senhaInformada = prompt("Informe sua senha");

        if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {
          alert("Bem-vindo ao sistema " + loginInformado + " \u2705");
            break;

        } else if (tentativas > 0) {
          alert(`\u26D4 Acesso Negado! Login e/ou senha inválidos. \n \u26A0 Tentativas: ${tentativas}`);

        } else if (tentativas == 0){
            alert("\u26A0 Acesso Bloqueado! \n Você excedeu o número máximo de 3 tentativas. Favor contatar a nossa Central do Cliente.")
        }
    }