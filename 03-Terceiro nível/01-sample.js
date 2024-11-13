async function buscarNave() {
    try {
        const resposta = await fetch('https://swapi.dev/api/starships/9/');
        const nave = await resposta.json();
        return nave 

    } catch (erro) {
        console.error('Erro ao buscar a nave:', erro);
    }
}
   async function detalharNave(nave) {

    const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

        console.log("Detalhes da Nave:");
        console.log(detalhesNave);

        const tamanhoTripulacao = parseInt(nave.crew);
        if (tamanhoTripulacao > 100) {
            console.log('Esta é uma nave grande.');
        } else {
            console.log('Esta é uma nave pequena.');
        }
    
   }

var nave = buscarNave()
detalharNave(nave)
