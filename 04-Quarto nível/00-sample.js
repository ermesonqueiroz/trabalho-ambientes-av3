async function buscarPersonagem() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";
    const idPersonagem = document.getElementById("idDoPersonagem").value;

    if (!idPersonagem || idPersonagem <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        if (!respostaPersonagem.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }
        const dadosPersonagem = await respostaPersonagem.json();
        mostrarResultado(dadosPersonagem);
    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}

function mostrarErro(mensagemErro, tipoErro) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipoErro}" role="alert">${mensagemErro}</div>`;
}

function mostrarResultado(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
        <strong>Altura:</strong> ${personagem.height} cm<br>
        <strong>Peso:</strong> ${personagem.mass} kg
      </div>`;
}

buscarPersonagem();