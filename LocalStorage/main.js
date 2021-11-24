const textList = [];
// Vi kommer att läsa data från användare (input + event)
function addToLocalStorage(e){
    e.preventDefault();
    //console.log(e)
const text = document.querySelector("#text").value;
//console.log(text); 
textList.push(text);
// Stringify -> JSON 
// setItems till localstorage 
//console.log(" min lista ", );
localStorage.setItem("text", JSON.stringify(textList));
// getItems -> parse -> lägger vi till i div element

}


// läser data från localstorage
const res = localStorage.getItem("text");
const text = JSON.parse(res);
console.log(text);




document
.querySelector(".addToList")
.addEventListener("click", addToLocalStorage)

