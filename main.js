const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".fa-circle-plus");
const todoList = document.querySelector(".list-item");
const todoFilter = document.getElementsByTagName("p");

 const isEmpty = (str) => !str.trim().length;
todoButton.addEventListener("click", (e) => {
  if (isEmpty(todoInput.value)) {
    todoInput.value = "";
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list-item");
    //completed
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "+";
    completedButton.classList.add("completed-button");
    todoDiv.append(completedButton);
    //list-item
    const newTodo = document.createElement("p");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("item");
    todoDiv.appendChild(newTodo);
    //remove
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "X";
    removeBtn.classList.add("remove-button");
    todoDiv.append(removeBtn);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  const item = e.target;

  if (item.classList[0] === "remove-button") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "completed-button") {
    const todo = item.parentElement;
    todo.classList.add("completed");
  }
});

// todoFilter.addEventListener('click', (e) => {
//     const todos = todoList.childNodes;
//     for (let i=0; i < todos.length; i++) {
//     console.log(todos[i].target);
//     }
//     })

///DARK MODE
let body = document.querySelector("body");
const darkMode = document.querySelector(".toggle-switch");
const enterTodo = document.querySelector(".create-todo");
const listItems = document.querySelector(".todo-list");
const listFilter = document.querySelector(".filter-list");
const todosText = document.querySelector(".item");
const header = document.querySelector(".header");
const filterText = document.querySelectorAll(".filterText");
console.log(filterText);

let toggle = true;
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
  enterTodo.classList.toggle("darkList")
  todoInput.classList.toggle("darkList")
  listItems.classList.toggle("darkList")
  listFilter.classList.toggle("darkList")
//   filterText.classList.toggle("filterDark")

  if (darkMode.getAttribute("src") == "img/img2.png") {
    darkMode.src = "img/img1.png";
  } else {
    darkMode.src = "img/img2.png";
  }
});


