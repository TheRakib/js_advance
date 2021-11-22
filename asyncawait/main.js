
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
    //const src ="https://images.unsplash.com/photo-1633115384130-49f50dd42ff0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"  
    const response = await fetch("https://api.unsplash.com//photos/random?client_id=IQP84MhEUy4biTV0H2iqzsVkO_MRv_tgppvDf86BNHU")
  
    // hanterar vi promise
    response.json()

    /*
    
    Json: {"name":"rakib"}

    Object : { name: "rakib"}

    
    */
    .then( res=> {  //callback function i promise som extraherar response
    console.log(res.urls) // response object har urls key och urls har small, raw keys 
    // raw keys har bildadressen 
    const img = document.createElement("img"); 
    img.setAttribute("src", res.urls.small );
    img.setAttribute("alt", "pictures from unsplash")
    img.height="400"
    img.width="600"
    document.querySelector("body").appendChild(img)
  } )  
}
/*document
.querySelector("button")
.addEventListener("click", fetchPicture)
//kl.11.00 
*/ 




async function fetchImg() {
  const Urls="https://api.unsplash.com/photos/random?";
  const client_id="client_id=StO9sFglhemQt_JdSRJytAsx971OWI5FKJa9B2yDfO4"
  const response = await fetch(Urls+client_id);
  response.json().then( res=> console.log(res.urls.small))
}

document
.querySelector("button")
.addEventListener("click", fetchImg)

