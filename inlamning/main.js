
// när anavädare trycker på add button :- 

// event :- addEventListener()

document.querySelector("button").addEventListener("click", calculateBudget)

function calculateBudget(e) {
    e.preventDefault();
  
   console.log("button works")
    

const addOption= document.querySelector(".plus").textContent;
console.log(addOption);
// om användare väljer + ska description och value hamnas i inkomst-lista diven
if(addOption=="+"){
      
  const description =  document.querySelector("#desc").value;
  const value = document.querySelector("#num").value;

  const div= document.querySelector(".inkomst-lista")
  
  div.innerHTML   += `<li>${description}     ${value}</li>`


}

const minusOption =document.querySelector(".minus").textContent;
console.log(minusOption);
const chooseOption = document.querySelector(".choose").textContent;
console.log(chooseOption);
//if()
   //om användare väljer - ska description och value hamnas i kostnad-lista diven

}






