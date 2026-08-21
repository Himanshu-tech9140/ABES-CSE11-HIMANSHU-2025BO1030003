let btn = document.querySelector("#btn");
let box = document.querySelector("#colorBox");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();
    box.innerText = randomColor;
    box.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`;
}