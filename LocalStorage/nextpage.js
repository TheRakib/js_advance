
const getItem = localStorage.getItem("text");
const items= JSON.parse(getItem);
document
.querySelector(".text-container")
.textContent= items



const Lista= ["rakib", "eddie", 3];

//console.log(Lista);
//console.log();
Lista.splice( Lista.indexOf("rakib"), 2);

console.log(Lista);
//divEl.setAttribute("class", "ersätt")
//divEl.classList.add("extension");


document.querySelector("button").addEventListener("click", function(){



  const element=  document.querySelector(".example")

  element.classList.toggle("text-container");




    //const divEl = document.querySelector(".text-container")


    //divEl.classList.add("background")

    /*
function saveTodos(todo) {

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        console.log(todos)
        todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todos)
    }
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
}
   
saveTodos("test")
*/

})


