console.log('hello world')

// toevoeg knop
const addButton = document.getElementById('add-button');
const toDoEntryBox = document.getElementById('todo-entry-box');
const toDoList = document.getElementById('todo-list');
addButton.addEventListener('click', addToDoItem);

function addToDoItem() {
    const entryText = toDoEntryBox.value
    newToDoItem(entryText);
}


// nieuwe todo's toevoegen

function newToDoItem(entryText) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(entryText);

    toDoItem.appendChild(toDoText);
    toDoList.appendChild(toDoItem);
}

// leegmaken
const emptyButton = document.getElementById('empty-button');
emptyButton.addEventListener('click', emptyList);

function emptyList() {
    let toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}