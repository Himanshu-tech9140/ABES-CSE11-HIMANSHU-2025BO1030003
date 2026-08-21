// const favMovie="avatar";

// let guess= prompt("Guess the movie");

// while((guess!=favMovie)  && (guess !="quit")){
//            guess=prompt("Wrong guess, try again");  
// }

// if(guess== favMovie){
//     console.log("congrats, you guessed it right");
// }

// // 

let todo = [];

let req = prompt("What do you want to do?");

while(true){
    if(req =="quit"){
        console.log("quitting the app");
         break;
    }

         if(req =="list"){
            console.log("--------------");
            for(let i=0; i<todo.length; i++){
                console.log(i, todo[i]);
            }
            console.log("--------------");

         } else if(req =="add"){
           let task= prompt("Enter the task to add");
           todo.push(task);
           console.log("task added");
         }

            else if(req =="delete"){
                let idx = prompt("please enter the task index");
                todo.splice(idx,1);
                console.log("task deleted");
            } 
            
            else{
                console.log("wrong request");
            }

         req = prompt("What do you want to do?");
}
