class Todo {
  constructor({ id = Date.now(), text = undefined, done = false }) {
    if (!text?.trim()) throw new Error("[Создание заметки] Текст обязателен.");
    this.id = id;
    this.text = text;
    this.done = done;
  }
}

function getTodoTemplate(todo) {
  const { text, id, done } = todo;
  return `
    <li data-role='todo' data-key="${id}" class='flex gap-2 justify-between items-center'>
      <label class="peer">
        <input class="peer" type="checkbox" ${done ? "checked" : ""}>
        <span class="peer-[:checked]:line-through">${text}</span>
      </label>
      <button class="flex peer-has-[:checked]:hidden" name="delete">
        <iconify-icon icon="material-symbols:delete"></iconify-icon>
      </button>
    </li>
  `;
}

function renderTodo(template) {
  todoListEl.insertAdjacentHTML("afterbegin", template);
}

function addTodo(text) {
  const todo = new Todo({ text });
  todoList.push(todo);
  return todo;
}

function deleteTodoById(id) {
  const todoIdx = todoList.findIndex((todo) => todo.id == id);
  if (todoIdx < 0) throw new Error("[Удаление заметки] Такой заметки нет.");
  todoList.splice(todoIdx, 1);
}

function changeStateById(id) {
  const todo = todoList.find((todo) => todo.id == id);
  todo.done = !todo.done;
}

function removeAllTodos() {
  todoList = [];
}

function handleOnload() {
  const localDataJSON = localStorage.getItem("todolist");
  if (!localDataJSON) return;
  const parsedData = JSON.parse(localDataJSON);
  todoList = parsedData;
  todoList.forEach((todo) => {
    const template = getTodoTemplate(todo);
    renderTodo(template);
  });
}

function handleRemoveAll() {
  removeAllTodos();
  todoListEl.innerHTML = "";
  updateLocalStorage();
}

function updateLocalStorage() {
  const json = JSON.stringify(todoList, null, 0);
  localStorage.setItem("todolist", json);
}

function handleAdd(e) {
  const formData = new FormData(form);
  const text = formData.get("text");
  try {
    const todo = addTodo(text);
    const template = getTodoTemplate(todo);
    renderTodo(template);
    updateLocalStorage();
  } catch (err) {
    alert(err.message);
  }
  textInputEl.value = "";
  textInputEl.focus();
}

function handleDelete(e) {
  const trigger = e.submitter;
  const todoEl = trigger.closest('[data-role="todo"]');
  const id = todoEl.dataset["key"];
  try {
    deleteTodoById(id);
    if (todoList.length) {
      todoEl.remove();
    } else {
      todoListEl.innerHTML = "";
    }
    updateLocalStorage();
  } catch (err) {
    alert(err.message);
  }
}

function handleChangeState(e) {
  const trigger = e.target;
  const todoEl = trigger.closest('[data-role="todo"]');
  const id = todoEl.dataset["key"];
  changeStateById(id);
  updateLocalStorage();
}

function handleSubmit(e) {
  e.preventDefault();
  const trigger = e.submitter;
  const event = trigger.name;
  switch (event) {
    case "remove-all":
      return handleRemoveAll();
    case "add":
      return handleAdd(e);
    case "delete":
      return handleDelete(e);
  }
}

let todoList = [];

const todoListEl = document.getElementById("todo-list");
const form = document.forms[0];
const textInputEl = form.querySelector('input[type="text"]');

window.onload = handleOnload;
form.onsubmit = handleSubmit;
todoListEl.onchange = handleChangeState;
