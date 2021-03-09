console.log('hello world')

// toevoeg knop
const addButton = document.getElementById('add-button');
const toDoEntryBox = document.getElementById('todo-entry-box');
const toDoList = document.getElementById('todo-list');
addButton.addEventListener('click', addToDoItem);

function addToDoItem() {
    const entryText = toDoEntryBox.value
    newToDoItem(entryText, false);
}


// nieuwe todo's toevoegen

function newToDoItem(entryText, completed) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(entryText);

    toDoItem.appendChild(toDoText);
    toDoList.appendChild(toDoItem);

    toDoItem.addEventListener('dblclick', toggleToDoItemState)
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

// items als klaar noteren
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed")
        console.log("incomplete")
    } else {
        this.classList.add("completed")
        console.log("completed")
    }
}


//clearen
const clearButton = document.getElementById('clear-completed-button');
clearButton.addEventListener('click', clearCompletedToDoItems);

function clearCompletedToDoItems() {
    let completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}