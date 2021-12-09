const productList = [];

// gammalLista  + nytt lista

function addProduct(e) {
    e.preventDefault();
// vi läser in input fältet och sparar data in i localstorage
const src= document.querySelector("#imgSrc").value;
const productName= document.querySelector("#productName").value
let productObj= {
    productName:productName,
    img:src
}
 productList.push(productObj)
 localStorage.setItem("productList", JSON.stringify(productList))



 //const oldProduct= localStorage.getItem("productList");

 //productList.concat(oldProduct);

// array av object 
}



document.querySelector("button").addEventListener("click" , addProduct);