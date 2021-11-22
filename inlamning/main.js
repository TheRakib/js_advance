
// när anavädare trycker på add button :- 

// event :- addEventListener()

document.querySelector("button").addEventListener("click", calculateBudget)

  
let kostnadLista = [];
let inkomstLista = [];
function calculateBudget(e) {
    e.preventDefault();
  
   //console.log("button works")
// pusha kostnader i kostnadLista 
// pusha inkomster  i inkomstLista 

//Loopa igenom listorna och lagra totalt inkomst och kostnad

// vinst = inkomst -kostnad 
//  visa vinst i en  div 

const option= document.querySelector("select");
console.log(option.value);
// om användare väljer + ska description och value hamnas i inkomst-lista diven
if(option.value=="+"){    
    //console.log(addOption)

  const description =  document.querySelector("#desc").value;
  const value = document.querySelector("#num").value;
  inkomstLista.push(value)
 const div= document.querySelector(".inkomst-lista");
 // console.log(div)
 div.innerHTML   += `<li>${description}     ${value}</li>`
}
 //om användare väljer - ska description och value hamnas i kostnad-lista diven
if(option.value =="-"){
    //console.log(minusOption)
    const description = document.querySelector("#desc").value;
    const value = document.querySelector("#num").value;
    kostnadLista.push(value)
    const kostnadDiv= document.querySelector(".kostnad-lista");
   // console.log(kostnadDiv)
    kostnadDiv.innerHTML += `<li>${description}     ${value}</li>`;
 }

 console.log(inkomstLista , kostnadLista)


var kostnadSumma= 0;
 for( var i= 0; i<kostnadLista.length ; i++){
     kostnadSumma += Number(kostnadLista[i]);
 }
 var inkomstSumma=0;
 for( var i= 0; i<inkomstLista.length; i++)
 { 
     inkomstSumma += Number(inkomstLista[i])
 }
 console.log(inkomstSumma, kostnadSumma)


 const vinstDiv = document.querySelector(".vinst")
 vinstDiv.textContent = inkomstSumma-kostnadSumma
//const chooseOption = document.querySelector(".choose").textContent;
//console.log(chooseOption);
//if()
if(option.value=="choose") 
{
    alert("Hej, Du måste välja från  + och -")
}
  
}






