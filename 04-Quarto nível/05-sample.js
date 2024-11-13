async function buscarPersonagem(idPersonagem) {
    try {
        const respostaDoPersonagem  = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        if (!respostaDoPersonagem .ok) {
            throw new Error(`Erro na requisicao ${respostaDoPersonagem .status}`);
        }
        const dadosPersonagem = await respostaDoPersonagem .json();
        console.log(dadosPersonagem);
    } catch (erro) {
        console.error(`Erro ao buscar o personagem ${idPersonagem}`, erro);
    }
}

const buscarIdPersonagem = 1;
buscarPersonagem(buscarIdPersonagem);