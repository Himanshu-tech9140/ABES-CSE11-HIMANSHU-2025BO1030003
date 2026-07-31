function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registering sync event");
            resolve();
        }, 5000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Logging in");
            resolve();
        }, 3000);
    });
}

function logout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Logging out");
            resolve();
        }, 7000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting data");
            resolve();
        }, 6000);
    });
}

register()
    .then(login)
    .then(logout)
    .then(getData)
    .then(() => {
        console.log("All tasks completed");
    })
    .catch((err) => {
        console.log(err);
    });