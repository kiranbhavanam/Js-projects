const form = document.getElementById("todo");
const input = document.getElementById("input");
const todoUL = document.querySelector(".todos");
const todoLS = JSON.parse(localStorage.getItem("todoLS"));
if (todoLS) {
  todoLS.forEach((todo) => {
    addToDo(todo);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});
function addToDo(todo) {
  let todotext = input.value;
  if (todo) {
    todotext = todo.text;
  }
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todotext;
  if (todo && todo.state) {
    newTodo.classList.add("completed");
  }
  todoUL.appendChild(newTodo);
  input.value = "";
  newTodo.addEventListener("click", () => {
    newTodo.classList.toggle("completed");
    updateLS();
  });
  newTodo.addEventListener("contextmenu", () => {
    newTodo.remove();
    updateLS();
  });
  updateLS();
}

function updateLS() {
  const todoList = document.querySelectorAll("li");
  const todos = [];
  todoList.forEach((todo) => {
    todos.push({
      text: todo.innerHTML,
      state: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todoLS", JSON.stringify(todos));
}
