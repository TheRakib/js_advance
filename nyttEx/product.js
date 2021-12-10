
     products = localStorage.getItem("productList");



console.log(products)

const productList = JSON.parse(products)
console.log(productList)


productList.map(  (product)=> {

    console.log(product)

    document.querySelector("div").innerHTML  += 
    "<div> " + product.name + "</div>" +  product.price

}     )