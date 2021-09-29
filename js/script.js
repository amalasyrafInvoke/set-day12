var listHolder = document.getElementById('list-holder');
var uncompletedList = document.getElementById('uncompleted-list');
var completedList = document.getElementById('completed-list');
var taskInput = document.getElementById('taskInput');
var activeTab = 'to-do-list';
var sliderPos = 0;
var todo = document.getElementById('todo');
var invoice = document.getElementById('invoice');
var appHolder = document.getElementById('app-holder');

//for invoice app 
var listHolder2 = document.getElementById('list-holder2');
var grandTotal = 0;
var indexNum = 0;
///////////////////

todo.addEventListener('click', () => changeTab('to-do-list'));
invoice.addEventListener('click', () => changeTab('invoice'));

function changeTab(tabName) {
  if (tabName === 'to-do-list') {
    activeTab = 'to-do-list';
    todo.querySelector('span').classList.add('active');
    invoice.querySelector('span').classList.remove('active');
    sliderPos += 100;
    appHolder.style.transform = `translateX(${sliderPos}vw)`;
    todo.onclick = null;
    return
  }
  if (tabName === 'invoice') {
    activeTab = 'invoice';
    todo.querySelector('span').classList.remove('active');
    invoice.querySelector('span').classList.add('active');
    sliderPos -= 100;
    appHolder.style.transform = `translateX(${sliderPos}vw)`;
    invoice.onclick = null;
    return
  }
}

function addTask() {
  if (taskInput.value === '') {
    return;
  }
  var createDiv = document.createElement('div');
  createDiv.classList.add('task-list');

  var createTitle = document.createElement('h1');
  createTitle.innerHTML = taskInput.value;

  var createButton = document.createElement('button');
  createButton.classList.add('fa');
  createButton.classList.add('fa-square');
  createButton.onclick = completeTask;

  var createDelButton = document.createElement('button');
  createDelButton.classList.add('fa');
  createDelButton.classList.add('fa-trash');
  createDelButton.onclick = deleteTask;

  uncompletedList.appendChild(createDiv);
  createDiv.appendChild(createTitle);
  createDiv.appendChild(createButton);
  createDiv.appendChild(createDelButton);
}

function deleteTask() {
  // console.log(this.parentNode);
  this.parentNode.remove();
  console.log('delete');
}

function completeTask() {
  // console.log(this.parentNode);
  var parentNode = this.parentNode;

  // from completed to uncomplete
  if (parentNode.classList.contains('completed')) {
    parentNode.classList.remove('completed');
    parentNode.classList.add('moveAniLeft');

    setTimeout(() => {
      this.classList.replace('fa-check', 'fa-square');
      uncompletedList.appendChild(parentNode);
      parentNode.classList.remove('moveAniLeft');
      parentNode.childNodes[0].style.textDecoration = 'none';
    }, 500);
  } else {
    // uncomplete to complete
    setTimeout(() => {
      completedList.appendChild(parentNode);
      parentNode.classList.remove('moveAni');
      this.classList.replace('fa-square', 'fa-check');
      parentNode.childNodes[0].style.textDecoration = 'line-through';
    }, 500);
    parentNode.classList.add('completed');
    parentNode.classList.add('moveAni');
  }
}

//for invoice app
function addNewItem() {
  indexNum++;
  var createDiv = document.createElement('div');
  createDiv.classList.add('item-list');

  var createInput1 = document.createElement('input');
  createInput1.setAttribute('id', `amountInput${indexNum}`);
  createInput1.setAttribute('type', `number`);
  createInput1.setAttribute('placeholder', `Amount`);

  var createInput2 = document.createElement('input');
  createInput2.setAttribute('id', `qtyInput${indexNum}`);
  createInput2.setAttribute('type', `number`);
  createInput2.setAttribute('placeholder', `Quantity`);

  var createP = document.createElement('p');
  createP.setAttribute('id', `subtotal${indexNum}`);
  createP.innerHTML = '0';

  listHolder2.appendChild(createDiv);
  createDiv.appendChild(createInput1);
  createDiv.appendChild(createInput2);
  createDiv.appendChild(createP);

  // createInput1.addEventListener('change', () => doSubTotalCalc(indexNum));
  // createInput2.addEventListener('change', () => doSubTotalCalc(indexNum));

  createInput1.onchange = doSubTotalCalc;
  createInput2.onchange = doSubTotalCalc;
}

function doSubTotalCalc() {
  console.log(this.parentNode);
  var childNodes = this.parentNode.childNodes;

  childNodes[2].innerHTML =
    childNodes[0].valueAsNumber * childNodes[1].valueAsNumber;

  grandTotalCalc();

  // subtotal = document.getElementById(`subtotal${index}`);
  // amountInput = document.getElementById(`amountInput${index}`);
  // qty = document.getElementById(`qtyInput${index}`);

  // subtotal.value = Number(amountInput.value) + Number(qty.value);
}

function grandTotalCalc() {

  var child = listHolder2.childNodes;
  var total = 0;

  for (var i = 0; i < child.length; i++) {
    console.log(child[i].childNodes[1])
    var test = Number(child[i].childNodes[2].innerHTML);
    total += test;
  }

  grandTotal = total;
  console.log(grandTotal);

  document.getElementById('amount').innerHTML = `RM ${grandTotal}`;
}
///////
