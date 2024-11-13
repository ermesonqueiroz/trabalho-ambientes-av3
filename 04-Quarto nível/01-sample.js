async function obterPlaneta() {
    const respostaApi = await fetch("https://swapi.dev/api/planets/1/");
    const dadosPlaneta = await respostaApi.json();
    console.log(dadosPlaneta.name);

    mostrarNomePlaneta(dadosPlaneta.name);
}

obterPlaneta();