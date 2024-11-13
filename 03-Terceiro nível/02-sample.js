async function buscarPessoas() {
    try {
        const resposta = await fetch('https://swapi.dev/api/people/');
        const dados = await resposta.json();
        return dados

       

    } catch (erro) {
        console.error('Erro ao buscar pessoas:', erro);
    }
} 
async function filtrarPessoas (pessoas) {
    const pessoasComL = dados.results.filter(pessoa => pessoa.name.startsWith('L'));

        console.log('Pessoas cujo nome começa com L:');
        pessoasComL.forEach(pessoa => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas: ${dados.results.length}`);
    
}

var pessoas = buscarPessoas();
filtrarPessoas(pessoas)