const toDoForm = document.querySelector(".js-toDoForm"),
  toDoinput = form.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
