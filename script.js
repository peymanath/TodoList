// Select Components
const d = document;
const select = (q) => { return (d.querySelectorAll(q).length <= 1) ? d.querySelector(q) : d.querySelectorAll(q); }

const todoInput = select('.form-todo input');
const addTodo = select('.add-todo');
const todoItems = select('.todo-items');
const listTodo = select('.list-todo');
const filters = select('.filters');

// Event
addTodo.addEventListener('click', addTodoHandler); // Adding event to todo button after click
todoItems.addEventListener('click', checkRemove); // Adding event to icon after click
filters.addEventListener('click', filter); // Adding event to filters after click

// Functions
function addTodoHandler(e) {

    e.preventDefault(); // Disable Submit Form

    if (!todoInput.value.trim().length) // Checks that the input is empty

        alert("Please Write Input") // If the entry is empty, this message will be displayed.

    else {
        const todoItemsDiv = d.createElement('div'); // Creating item body

        todoItemsDiv.classList.add('list-todo'); // Adding class to item body

        todoItemsDiv.innerHTML = `
        <li>${todoInput.value}</li>
        <span><i class="far check fa-square-check"></i></span>
        <span><i class="far remove fa-trash-can"></i></span>`; // adding item to item body

        todoItems.appendChild(todoItemsDiv); // Append items to DOM

        todoInput.value = ""; // Clears the input value to add a new item
    }

}

function checkRemove(e) {

    const classLis = [...e.target.classList];
    const Parent = e.target.parentElement.parentElement;

    if (classLis.find(e => e == "remove")) {
        Parent.remove();
    };
    if (classLis.find(e => e == "check")) {
        Parent.classList.toggle("completed");
    };

}

function filter(e) {

    const childListItems = [...todoItems.childNodes]

    const filterValue = e.target.value;

    childListItems.forEach(e => {
       
        if (filterValue == "2")
        e.classList.contains('completed') ? e.style.display = 'flex' : e.style.display = 'none' ;

        else if (filterValue == "3")  
        !e.classList.contains('completed')? e.style.display = 'flex' : e.style.display = 'none' ;

        else e.style.display = 'flex';

    });

}