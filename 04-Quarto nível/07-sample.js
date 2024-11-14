async function obterDadosEspecie(idDaEspecie) {
    try {
        const respostaApiEspecie = await fetch(`https://swapi.dev/api/species/${idDaEspecie}/`);
        if (!respostaApiEspecie.ok) {
            throw new Error(`Erro na requisição ${respostaApiEspecie.status}`);
        }
        const especieDados = await respostaApiEspecie.json();
        console.log(especieDados); 
    } catch (erro) {
        console.error(`Erro ao obter a espécie: ${idDaEspecie}`, erro);
    }
}

const idEspecieConsulta = 1;
obterDadosEspecie(idEspecieConsulta);
