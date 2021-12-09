const src = localStorage.getItem("src");
const productName= localStorage.getItem("productName");



document.querySelector("div").innerHTML = "<span>" + productName +"</span>" 

+ "<img src=" +src + "  alt='image should be shown here' class='product-img'>";