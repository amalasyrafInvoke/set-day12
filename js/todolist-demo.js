var listHolder = document.getElementById('list-holder');
var taskInput = document.getElementById('taskInput');

function addTask() {

  var createDiv = document.createElement('div');
  createDiv.classList.add('task-list');

  var createTitle = document.createElement('h1');
  createTitle.innerHTML = taskInput.value;

  var createButton = document.createElement('button');
  createButton.innerHTML = 'Done';
  createButton.onclick = deleteTask;

  listHolder.appendChild(createDiv);
  createDiv.appendChild(createTitle);
  createDiv.appendChild(createButton);

}

function deleteTask() {
  // console.log(this.parentNode);
  this.parentNode.remove();
  console.log('delete');
}