const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; /*이 toDos는 로컬스토리지 부분 분류값*/

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
/*JSON.stringify는 js데이터를 스트링으로 바꿔줌. 문자열로 안바꾸면 어플리케이션 부분에서 [object]로 표기됨
JSON(JS Object Notation)은 데이터 전달시 js가 다를수있도록 객체화 해주는 기능..*/
function paintToDo(text) {
  const list = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  const newId = toDos.length;
  span.innerText = text;
  list.appendChild(delBtn);
  list.appendChild(span);
  list.id = newId;
  /* ele1.appendChild(ele2)는 el2를 ele1의 자식으로 추가하는 기능.*/
  toDoList.appendChild(list);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
  /*주의할점: saveToDos전에 toDos에 값이 입력(push)되도록 해야하기때문에 서순 중요, push는 array에 new element추가하는 명령*/
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}
/*JSON.parse는 stringify와는 정 반대의 기능*/
/* forEach는 array에 담겨있는것들을 각각 한번씩 함수실행해주는기능.*/

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
