let btn = document.querySelector("button");
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click", function(){
    //create a new list item
  let item = document.createElement("li");
  item.innerText = inp.value;

  //create a delete button for the list item
  let delBtn = document.createElement("button");
   delBtn.innerText= "Delete";
   delBtn.classList.add("delete");
    item.appendChild(delBtn);

  ul.appendChild(item);
  //for emptying the input field after adding the task
  inp.value="";
});

//event delegation for delete button
ul.addEventListener("click", function (event){
   if (event.target.nodeName == "BUTTON"){
      let listItem = event.target.parentElement;
      listItem.remove();
      console.log("deleted");
   }

});
//deleting the list item when delete button is clicked
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//     });
// }