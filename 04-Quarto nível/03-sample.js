async function obterInfoPersonagem() {
    const infoGeralPersonagem = "{\"nome\": \"Luke\", \"idade\":23}";
    const personagemInfo = JSON.parse(infoGeralPersonagem);
    console.log(personagemInfo.nome);
    console.log(personagemInfo.idade);
}

obterInfoPersonagem();
