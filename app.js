const form = document.querySelector(".todo-form");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const clearBtn = document.querySelector(".clear-btn");
const todo = document.getElementById("todo");


let id = 0;
let editelement;
let editflag = false;
let editID = "";

form.addEventListener("submit", additem);
clearBtn.addEventListener("click", deletelista);

function additem(e){
    e.preventDefault();
    const value = todo.value;
    addToLocalStorage(value);
    recarregarItensNaTela();

}

function recarregarItensNaTela(){
    container.classList.add("show-container");
    const list = document.querySelector(".todo-list");
    const valores = getLocalStorage();
    let linha = ``;
    valores.forEach(function(item){
        linha +=`
        <article class="todo-item">
            <p class="title">${item.value}</p>
            <div class="btn-container">
                <!-- delete btn -->
                <button  onclick="deletaritem('${item.value}')"type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </article>
        `
    })

    list.innerHTML = linha
    console.log(linha);

}

function deletelista(){
    localStorage.removeItem("lista");
    recarregarItensNaTela();
}

function addToLocalStorage(value){
    const todo = {value};  
    let itens = getLocalStorage();
    itens.push(todo);
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

function setBackToDefault() {
    todo.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
  }


function deletaritem(nomeItem) {

    const lista = getLocalStorage();
    const listaFiltrada = lista.filter(function(item){
        const deveSerMantido = item.value != nomeItem;
        return deveSerMantido;

    });
    localStorage.setItem("lista", JSON.stringify(listaFiltrada));
    recarregarItensNaTela();
}