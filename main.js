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


//kl. 11.00 


// Copy list :- array 



// vi vill ha original lista kvar /inte ska ändras 
// får ändra original lista 
/*
const songList =["song 1", "song 2", "song 3"];
console.log(songList)
const copySongList = Array.from(songList)
console.log("copied list " , copySongList)
copySongList.push("song 4");
console.log(songList)
console.log("copied list " , copySongList)
const songList = ["song 1", "song 2", "song 3"];
const copySongList= [];
songList.concat(copySongList);
console.log(songList);
copySongList.push("song 4");
console.log(copySongList);

*/

// string.split("").reverse().join("")


//Palidrom

function palindrom (ord) {
    const ordTolowerCase= ord.toLowerCase();
    //console.log(ordTolowerCase);
    if (ordTolowerCase == ordTolowerCase.split("").reverse().join("")) {
        console.log(ord, "ordet är en palindrom")
    }
    else {   
        console.log(ord, "ordet är inte en palindrom")
 
    }

 }

 palindrom("Anna");
 palindrom("hej");


// 10.

function searchAndReplace(searchWord, replaceWord, text) {
    // search() ,split(), slice()
    // replace() 
    // text
    // leta efter searchWord i text var
    // replace searchWord med replaceWord 
   console.log(text.replace(searchWord, replaceWord))
   return text.replace(searchWord, replaceWord);
    // return  ändrat texten/console.log(new text)
}
searchAndReplace("hello", "hallå", "hello, wie21s")

/*
let text= "something something dark side..";
const newText= text.replace(/something/gi,function (re) {
return re= "someotherthing";
})
document.querySelector(".replacedText").textContent= " Resultat = "+ newText;
*/

// Handledning 
