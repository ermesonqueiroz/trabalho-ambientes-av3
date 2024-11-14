async function obterPersonagemPorId(idDoPersonagem) {
    const apiUrl = (`https://swapi.dev/api/people/${encodeURIComponent(idDoPersonagem)}`);
    try {
        const respostaApiPersonagem = await fetch(apiUrl);
        if (!respostaApiPersonagem.ok) {
            throw new Error(`Erro na requisição: ${respostaApiPersonagem.status}`);
        }
        const personagemDados = await respostaApiPersonagem.json();
        console.log(personagemDados);
    } catch (erro) {
        console.error(`Erro ao obter personagem ${idDoPersonagem}`, erro);
    }
}

const idPersonagemConsulta = 1;
obterPersonagemPorId(idPersonagemConsulta);
