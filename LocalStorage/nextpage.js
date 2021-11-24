
const getItem = localStorage.getItem("text");
const items= JSON.parse(getItem);
document
.querySelector(".text-container")
.textContent= items

// kl. 10.00 