function principal() {
    let itens = [10, 20, 30, 40, 50];
    let total = 0;
    
    let x = 1;
    let y = 2;
    let z = 3;
    
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * z;
    }

    let usuario = obterUsuario(42);

    if (x === 1 && y === 2 && usuario.ativo === 1) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    const usuarios = [
        {
            id: 42,
            nome: "João Silva",
            idade: 25,
            ativo: 1
        },
        {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: 0
        }
    ];

    const usuario = usuarios.find((dados) => id === dados.id);

    if (!usuario) {
        console.log("Usuário não encontrado");
        return null;
    }

    return usuario;
}

function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

function atualizarDados(usuario) {
    if (usuario !== null && usuario.idade > 18) {
        console.log("Atualizando usuário:", usuario.id);

        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(a, b, c) {
    let d = 0;

    if (a === 1) {
        d = b + c;
    } else if (a === 2) {
        d = b * c;
    } else if (a === 3) {
        d = b - c;
    } else {
        d = b / c;
    }

    return d;
}

function inverterString(entrada) {
    return entrada.toString().split('').reverse().join('');
}

function processarDados(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    return resultado;
}

function exibirDados() {
    let dados = ["Valor 1", "Valor 2", "Valor 3"];
    for (let i = 0; i < dados.length; i++) {
        console.log("Dados:", dados[i]);
    }
}

function calcularDados() {
    let itens = [5, 7, 9, 11];
    let x = 0;
    for (let i = 0; i < itens.length; i++) {
        x += itens[i] * 3;
    }
    
    console.log("Cálculo total:", x);
    return x;
}

function mostrarInfo() {
    let valores = ["Dado 1", "Dado 2", "Dado 3"];
    for (let j = 0; j < valores.length; j++) {
        console.log("Info:", valores[j]);
    }
}

principal();
console.log("Resultado do cálculo:", inverterString(calcular(1, 2, 3)));
exibirDados();
console.log("Resultado do processamento de dados:", processarDados(10));
mostrarInfo();
console.log("Resultado da função:", calcularDados());
