const form = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const removeBtn = document.querySelector("#remove-todo");

// Add a new Todo

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = document.createElement("li");
  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");

  newTodo.innerText = input.value;
  newTodo.prepend(newCheckbox);
  todoList.appendChild(newTodo);
  input.value = "";
  localStorage.setItem("todoList", todoList.getInnerHTML());
});

// Mark a todo as completed

todoList.addEventListener("click", function (e) {
  const checkbox = e.target;
  if (checkbox.tagName === "INPUT") {
    checkbox.parentElement.classList.toggle("completed");
    if (checkbox.getAttribute("checked") === null) {
      checkbox.setAttribute("checked", true);
    } else {
      checkbox.removeAttribute("checked");
    }
    localStorage.setItem("todoList", todoList.getInnerHTML());
  }
});

// Remove a todo

removeBtn.addEventListener("click", function (e) {
  const completed = document.querySelectorAll(".completed");

  completed.forEach(function (li) {
    li.remove();
    localStorage.setItem("todoList", todoList.getInnerHTML());
  });
});

function loadTodoList() {
  todoList.innerHTML = localStorage.getItem("todoList");
}

loadTodoList();