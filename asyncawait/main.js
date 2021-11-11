
// blocking code 
/*
console.log("hej hej ");

/*
}

console.log("hej efter loop");
document
.querySelector("button")
.addEventListener("click", ()=> console.log("hej från event"))
*/

// async await 

async function testAsync() {
 
   const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
     
      return response;
}

const res = testAsync();
console.log("response ", res.then( e=> console.log(e)))