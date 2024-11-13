let userName = "Pedro";
let userAge = 25;
let userIsActive = true;

function dU(userName, userAge, userIsActive) {
    if (userIsActive) {
        console.log(userName + " tem " + userAge + " anos e está ativo.");
    } else {
        console.log(userName + " está inativo.");
    }
}

dU(userName, userAge, userIsActive);
