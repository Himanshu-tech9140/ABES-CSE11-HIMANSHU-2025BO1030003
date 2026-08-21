// function SavetoDb(){
//     return new Promise ((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10)+1;
//         if(internetSpeed >4){
//             resolve("success: data was saved")
//         } else {
//             reject("error: failed to save data")
//         }
//     })
// }
// SavetoDb().then(()=>{
//     console.log("data was saved successfully");
// })
// .catch(()=>{
// //     console.log("data was not saved");
// })


//cat facts
// let btn = document.querySelector("button");
// let p = document.querySelector("#result");

// btn.addEventListener("click", async () =>{
//     let fact = await getFacts();
//     p.innerText = fact;

// })
// let url ="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log(e);
//     }
// }


//university data
let url = "http://universities.hipolabs.com/search?name=middle";
let btn =document.querySelector("button");
btn.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    console.log(input);

    getColleges(country);
})



async function getColleges(){
    try{
        let colleges = axios.get(url);
        console.log(colleges);
    }
    catch(e){    
            console.log(e);
    }
}
