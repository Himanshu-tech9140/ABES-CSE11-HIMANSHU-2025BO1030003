function register(){
    waitfordelay(10000);
    console.log("Registering sync event");
}
function login(){
    waitfordelay(5000);
    console.log("Logging in");
}
function logout(){
    waitfordelay(3000);
    console.log("Logging out");
}
function getData(){
    waitfordelay(6000);
    console.log("Getting data");
}
function waitfordelay(delay) {
   const start = Date.now()+delay;
   while (Date.now() < start) {
      // busy wait
}
}
register();
login();
logout();
getData();
console.log("Sync event registered successfully");