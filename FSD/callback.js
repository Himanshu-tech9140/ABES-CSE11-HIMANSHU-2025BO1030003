function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registering sync event");
            resolve();
        }, 5000);
    });
}

function login() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Logging in");
        callback();
    }, 3000);

})
}


function logout() {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("Logging out");
        callback();
    }, 7000);
    })
   
}

function getData() {

    return new Promise((resolve,reject)=>{
setTimeout(() => {
        console.log("Getting data");
    }, 6000);
    })
    
}

register().then(login).then(logout).then(getData);
   .catch