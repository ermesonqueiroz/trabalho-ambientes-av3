async function buscarPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        const planeta = await resposta.json();
        return planeta

       
    } catch (erro) {
        console.error('Erro ao buscar o planeta:', erro);
    }
} 

async function detalharPlaneta (planeta) {
    const detalhesPlaneta = `
    Nome: ${planeta.name}
    Clima: ${planeta.climate}
    População: ${planeta.population}
    `;

    console.log("Detalhes do Planeta:");
    console.log(detalhesPlaneta);

    const populacao = parseInt(planeta.population);
    if (populacao > 1000000) {
        console.log("Este planeta é muito populado.");
    } else {
        console.log("Este planeta tem uma população pequena.");
    }
}
    


 var planeta = buscarPlaneta(1);
detalharPlaneta(planeta)
