async function obterPlanetaRecursivo(idDoPlaneta) {
    try {
        const respostaApiPlaneta = await fetch(`https://swapi.dev/api/planets/${idDoPlaneta}/`);
        if (!respostaApiPlaneta.ok) {
            throw new Error(`Erro na requisição: ${respostaApiPlaneta.status}`);
        }
        const dadosDoPlaneta = await respostaApiPlaneta.json();
        console.log(dadosDoPlaneta.name);
        obterPlanetaRecursivo(idDoPlaneta + 1);
    } catch (erro) {
        console.error(`Erro ao obter planeta: ${idDoPlaneta}`, erro);
    }
}

const idPlanetaConsulta = 1;
obterPlanetaRecursivo(idPlanetaConsulta);
