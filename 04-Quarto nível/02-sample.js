async function obterFilmePorId(idDoFilme) {
    try {
        const respostaApiFilme = await fetch(`https://swapi.dev/api/films/${idDoFilme}/`);
        if (!respostaApiFilme.ok) {
            throw new Error(`Erro na requisição: ${respostaApiFilme.status}`);
        }
        const filmeDados = await respostaApiFilme.json();
        console.log(filmeDados);
    } catch (erro) {
        console.error(`Erro ao obter filme: ${idDoFilme}`, erro);
    }
}

const idFilmeConsulta = 1;
obterFilmePorId(idFilmeConsulta);
