
function addProduct(e) {
    e.preventDefault();



    // vi läser in info från input fält 

    const name= document.querySelector("#name").value;

    const price = document.querySelector("#price").value;
    
    //och lägger vi de i ett object

    const obj = {

        name: name,
        price: price
    }

    // vi pushar objektet in i en array
productList.push(obj);

    // array kommer att pushas in i localStorage 

localStorage.setItem("productList" , JSON.stringify(productList) )

}




document.querySelector("button").addEventListener("click", addProduct);