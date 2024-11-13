let allowAdmin = true;

function checkPermission(user) {
    if (allowAdmin && user.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let user = { nome: "João", admin: true };
checkPermission(user);
