const textList = [];
const object = {}
// Vi kommer att läsa data från användare (input + event)
function addToLocalStorage(e){
    e.preventDefault();
    //console.log(e)
const text = document.querySelector("#text").value;
const number = document.querySelector("#number").value;
console.log(text); 

textList.push(text)
// text och number i objectet???:- 
/*object.keynamn="value"
console.log(object);
object["keynamn2"]="value 2"
console.log(object);*/
object[text] = number
console.log(object);
// Stringify -> JSON 
// setItems till localstorage 
//console.log(" min lista ", );
localStorage.setItem("text", JSON.stringify(textList));
// getItems -> parse -> lägger vi till i div element
localStorage.setItem("obj", JSON.stringify(object))

}

// läser data från localstorage


function changeList(i){
    const res = localStorage.getItem("text");
    // If res is not undefined/null :- 
    // Try catch 
    const text = JSON.parse(res);

    const objRes = localStorage.getItem("obj");
    const parsedObj = JSON.parse(objRes);
    console.log(parsedObj);  
    // arrayName.shift()  tar bort första item i lista
    //console.log(text.shift());
    // arrayName.pop();' tar bort sista item i lista
    //console.log(text.pop());
// tar bort en specific 
text.splice(i, 1)
console.log( JSON.stringify(  text));
localStorage.setItem("text",JSON.stringify(text))
// filter 
//text.filter


// ta bort en data från object ?? 

// remove an item from object 
 // object keys och values till en array 

// removeItem from localstorage
 

// Kl. 11.00 


}
changeList(2);


document
.querySelector(".addToList")
.addEventListener("click", addToLocalStorage)

