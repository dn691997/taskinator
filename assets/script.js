const formEl = document.querySelector("#task-form");

const taskItemEl = document.createElement("li");
console.log(taskItemEl);

const tasksToDoEl = document.querySelector("#tasks-to-do");
console.log(tasksToDoEl);

let taskFormHandler = (event) => {
  event.preventDefault();
  console.log(event);

  const taskNameInput = document.querySelector("input[name='task-name']").value;
  console.log(taskNameInput);

  const taskTypeInput = document.querySelector(
    "select[name='task-type']"
  ).value;
  console.log(taskTypeInput);

  if (!taskNameInput || !taskTypeInput) {
    alert("Filled out task form");
    return false;
  }

  formEl.reset();

  const taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  createTaskEL(taskDataObj);
};

let createTaskEL = (taskDataObj) => {
  const listItemEL = document.createElement("li");
  listItemEL.className = "task-item";

  const taskInfoEl = document.createElement("div");

  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEL.appendChild(taskInfoEl);
  tasksToDoEl.appendChild(listItemEL);
};

formEl.addEventListener("submit", taskFormHandler);
