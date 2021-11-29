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


// varje if körs av compiler/översättare
// else if 
// else 
/* 
if(false) {
    console.log("kommer att köras om if är sant")
}
else if(false){
    console
    .log("kommer att köras om ovanstående villkoret inte är sant")
}
else{
    console.log("kommer att köras om if/else if inte är sant")
}

console.log("......")
*/

const array = [1, 23,455, 66,677,"sista value"]
console.log(array[array.length-1]) //viktigt för kunskapkontrollen 

//tar bort första value från array
console.log(array.shift())
// tar bort sista value från array
console.log(array.pop())

const multiArray = [[12,22], [33,45]]
console.log(multiArray[0][0])
// Loopa igenom array:en ??
for(var i = 0; i<multiArray.length; i++){
    //console.log(multiArray[i])
     for(var j=0; j<multiArray[i].length; j++)
    {
        console.log(multiArray[i][j])
    }
}
// konvertering en data type till annan datatype
// split("") : string/text till array
// join(""): array till string/text 
console.log(array.join(""))


Number("12")
//svar: 12
parseInt("12")
// svar: 12
parseFloat("12")
// svar: 12
parseFloat("12.4123")
// svar : 12.4123
parseInt("12.4123")
// svar: 12
Number("12.4123")
// svar: 12.4123

// kl. 10.00 
// undefined + siffror
undefined + 10
// Svar: NaN
"text" /10
//Svar: NaN
"text" *10
// Svar: NaN
var a=0; 
var b= 0;
console.log(a/b);


/************######***********/
// passing data by value and reference
// Math.min och Math.max
// array destructuring 

/************#####*************/