function register(){
   setTimeout(() => {
    console.log("Registering sync event")}, 5000);

}
function login(){
    
    setTimeout(() => {
    console.log("Logging in")}, 3000);
}
function logout(){
    
    setTimeout(() => {
    console.log("Logging out")}, 7000);
}
function getData(){
   
    setTimeout(() => {
    console.log("Getting data")}, 6000);
}


register();
login();
logout();
getData();
console.log("Sync event registered successfully");
console.log("All async functions called");