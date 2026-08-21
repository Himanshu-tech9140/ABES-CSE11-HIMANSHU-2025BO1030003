const max = prompt("Enter the maximum number");
console.log(max);

const random= Math.floor(Math.random() * max) +1;
console.log(random);


let guess=prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("quitting the game");
        break;
    }

    if(guess == random){
        console.log("You are right! congrats!!", random);
        break;
    }
    else if(guess < random){  
        guess = prompt("hint: Too low, try again");
    }
    else { 
        guess = prompt("hint: Too high, try again");
    }
}