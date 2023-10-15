const toDoform = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
// const toDoInput = toDoform.querySelector('input');
const toDoList = document.getElementById('todo-list');
let toDos = [];

const TODOS_KEY = 'todos';

deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  // element에서 불러온 건 타입이 string임
  saveTodo();
};

saveTodo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

paintToDo = (newTodo) => {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText = newTodo.text;
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodo();

  //   console.log(toDoInput.value);
}

toDoform.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // parsedToDos.forEach((item) => console.log('this is the turn of', item));
  // parsedToDos.forEach((item) => paintToDo(item));
  parsedToDos.forEach(paintToDo);
}
