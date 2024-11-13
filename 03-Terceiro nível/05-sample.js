async function buscarVeiculosECalcularCusto() {
    try {
        const resposta = await fetch('https://swapi.dev/api/vehicles/');
        const dados = await resposta.json();

        

    } catch (erro) {
        console.error('Erro ao buscar veículos:', erro);
    }
}   
 
async function calcularCusto (dados) {
    const veiculosCaros = dados.results.filter(veiculo => parseInt(veiculo.cost_in_credits) > 10000);

        console.log("Veículos caros (mais de 10.000 créditos):");
        veiculosCaros.forEach(veiculo => {
            console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
        });

        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            return total + parseInt(veiculo.cost_in_credits);
        }, 0);

        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

    
}

 var dados =buscarVeiculos();
 calcularCusto(dados)
