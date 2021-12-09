function addProduct(e) {

    e.preventDefault();


// vi läser in input fältet och sparar data in i localstorage

const src= document.querySelector("#imgSrc").value;

const productName= document.querySelector("#productName").value

localStorage.setItem("src", src)

localStorage.setItem("productName", productName)

// array av object 

}

document.querySelector("button").addEventListener("click" , addProduct);