
// blocking code 
/*
console.log("hej hej ");

/*
}

console.log("hej efter loop");
document
.querySelector("button")
.addEventListener("click", ()=> console.log("hej från event"))


// async await 
async function testAsync() {
   const response =  await fetch('https://pokeapi.co/api/v2/berry/1');
   console.log(response)
  // response.then(e => console.log(e));
      //return response;
}

//promises: - 
testAsync();

// promises (Vi återkommer igen till promises)
function testPromises() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( res=> res.json())
    .then( json=> console.log(json))
}

testPromises();
*/

//setTimeout(testAsync, 10000)
//testAsync();




//setTimeout( async ()=> await fetch('https://pokeapi.co/api/v2/berry/1'), 1000)
//kl. 10.00 


// fetch Unplash api  och hämta random bilder 
async function fetchPicture() {
    const src ="https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"  // await fetch("https://api.unsplash.com/")
    // createElement("img");
    const img = document.createElement("img"); 
    img.setAttribute("src", src );
    img.setAttribute("alt", "pictures from unsplash")
    // img element i body taggen
    document.querySelector("body").appendChild(img)

}
document
.querySelector("button")
.addEventListener("click", fetchPicture)

