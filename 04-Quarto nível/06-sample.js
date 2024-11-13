async function obterDadosNave(idDaNave) {
    try {
        const respostaApiNave = await fetch(`https://swapi.dev/api/starships/${idDaNave}/`);
        if (!respostaApiNave.ok) {
            throw new Error(`Erro na requisição: ${respostaApiNave.status}`);
        }
        const naveDados = await respostaApiNave.json();
        console.log(naveDados);
    } catch (erro) {
        console.error(`Erro ao obter dados da nave ${idDaNave}:`, erro);
    }
}

const idNaveConsulta = 2;
obterDadosNave(idNaveConsulta);
