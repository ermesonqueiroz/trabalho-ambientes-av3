class User {
    constructor(name, age, role, createdAt, lastLogin, active, g, loginAttempts) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.createdAt = createdAt;
        this.lastLogin = lastLogin;
        this.active = active;
        this.g = g;
        this.loginAttempts = loginAttempts;
    }

    showActive() {
        if (this.active) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    showRole() {
        if (this.role === 'admin') {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

function countAdminUsers(users) {
    let totalCount = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].role === 'admin') {
            totalCount++;
        }
    }
    return totalCount;
}

function checkLoginAttempts(user, maxAttempts) {
    if (user.loginAttempts > maxAttempts) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

function getMostRecentLoggedInUser(user1, user2) {
    if (user1.lastLogin > user2.lastLogin) {
        return user1.name + " logou mais recentemente.";
    } else {
        return user2.name + " logou mais recentemente.";
    }
}

function createdUserRecently(user) {
    let now = new Date();
    if (now - user.createdAt < 31536000000) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

let users = [
    new User("Carlos", 25, 'admin', new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new User("Ana", 30, 'guest', new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new User("José", 29, 'admin', new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new User("Maria", 35, 'guest', new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log("Usuários admin: " + countAdminUsers(users));

users[0].showActive();
users[1].showRole();

checkLoginAttempts(users[2], 4);

console.log(getMostRecentLoggedInUser(users[0], users[3]));

createdUserRecently(users[3]);
