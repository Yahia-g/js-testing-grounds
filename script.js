const todoList = document.getElementById('thelist');
const addButton = document.getElementById('addButton');
const inputField = document.getElementById('todoInput');
const clearButton = document.getElementById('clearAllButton');

let array = [];

addButton.addEventListener('click', addtodo);

  
function addtodo() { const todoText = inputField.value.trim();
    array.push(todoText);
    inputField.value = '';
    updateList();
  }

  
function updateList() {
    todoList.innerHTML = '';
    array.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        todoList.append(listItem);
    })
};


clearButton.addEventListener('click', clearall);

function clearall() {
    array = [];
    updateList();
}