// localstorage:-  lagrar i klient , 

// för kunna använda localstorage:- 

//camel case 
localStorage.setItem("key", [12, 3,445]);

const localstorageValue = localStorage.getItem("key");
console.log(localstorageValue);

// vi ska lagra ett object 

const kundInfo= {
    name:"Kalle",
    kundNummer:12345, 
    orderList: ["product_1", "product_2"]
}

localStorage.setItem("kundInfo", JSON.stringify( kundInfo));
const kundInfoFromLocalStorage = localStorage.getItem("kundInfo");


// vi använda JSON format 
// JSON stringify för att kunna konvertera js_object till json
// JSON parse för att kunna konvertera till object 

console.log( JSON.parse(kundInfoFromLocalStorage) ) 



//paus till Kl. 10.00

// JS coersion 
const object = {
    name:"Kalle",
    kundNummer:12345, 
    orderList: ["product_1", "product_2"]   
}
console.log("rakib" + object)


// Math 
const random = Math.random()*10;
console.log(Math.ceil(random))

// DOM upprepning  
const div = document.querySelector("div");
//document.createElement("") // alternative :

const list = [1, 2 , 3, 4]
list.map(   (e)=> {
    div.innerHTML += `<h1 class=hej id=${e}> lite text </h1> <p>  beskrivning </p>
  <button> click </button>`

});



/*
document
.querySelector("form")
.addEventListener("submit", functionsnamn/callback);


document
.querySelector("button")
.addEventListener("click",functionsnamn/callback );


*/












// Copy list 
// Handledning 