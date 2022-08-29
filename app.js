const form = document.querySelector(".todo-form");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");
const todo = document.getElementById("todo");

let editelement;
let editflag = false;
let editID = "";

form.addEventListener("submit", additem);
form.addEventListener(".clear-btn", deletelista);


function additem(e){
    e.preventDefault();
    const value = todo.value;
    const element = document.createElement("article");
    element.classList.add("todo-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
             <!-- delete btn -->
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
            </div>
        `;
    list.appendChild(element);
    container.classList.add("show-container");
    addToLocalStorage(value);
    
}

function deletelista(e){

    
}

function addToLocalStorage(value){
    const todo = {value};  
    let itens = getLocalStorage();
    itens.push(todo);
    console.log(itens);
    localStorage.setItem("lista", JSON.stringify(itens));

}

function getLocalStorage() {
    const listaFormatoString = window.localStorage.getItem("lista");
    if (listaFormatoString != null){
        const listaArray = JSON.parse(listaFormatoString);
        return listaArray
    }
    else{
        const listaArrayVazio = [];
        return listaArrayVazio
    }

}

