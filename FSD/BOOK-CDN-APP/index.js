function Book(){
    const image=React.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",width:"290px",height:"200px"});
    
    const title=React.createElement("h2",{color:"red"},"Title: The Midnight ");
    const Price=React.createElement("h3",{color:"green"},"Price: $13.99");
    const btn=React.createElement("button",{onClick:()=>alert("Added to Cart"), color:"blue"}, "Add to Cart");

    const div=React.createElement("div",{className:"book"},[image,title,Price,btn]);
    return div;
}
const bookdata=[{image:"https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",title:"Node.js",price:"$13.99"},
{image:"https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",title:"Express.js",price:"$13.99"},
{image:"https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",title:"React.js",price:"$13.99"},
{image:"https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",title:"Full Stack Development",price:"$13.99"}]; 
function App(){
    const books=bookdata.map((book)=>React.createElement(Book,{image:book.image,title:book.title,price:book.price}));
    return React.createElement("div",{id:"root"},books);
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(React.createElement(App));