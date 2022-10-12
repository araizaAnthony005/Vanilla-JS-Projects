const btn = document.querySelector('#btn');
const inputField = document.querySelector('#input');
const todoList = document.querySelector('.todoList');
const filterTodo = document.querySelector('#selectTodo');

document.addEventListener('DOMContentLoaded', () => getTodos())
btn.addEventListener('click', (e) => addTodo(e));
todoList.addEventListener('click', (e) => handleTodo(e));
filterTodo.addEventListener('click', (e) => handleFilter(e));


const addTodo = (e) => {
    e.preventDefault();

    buildHtml();
    saveToStorage(inputField.value);

    inputField.value = '';
}

const handleTodo = (e) => {
    const target = e.target;
    const todo = target.parentElement;

    if(target.classList[0] === 'deleteBtn') {
        todo.parentElement.classList.add('fall');
        removeTodo(todo.parentElement);
        todo.parentElement.addEventListener('transitionend', () => {
            todo.parentElement.remove();
        });
    }

    if(target.classList[0] === 'checkBtn') {
        todo.parentElement.classList.toggle('checkedBtn');
    }
}

const removeTodo = (todo) => {
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const indexOf = todo.children[0].innerText;

    todos.splice(todos.indexOf(indexOf), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const handleFilter = (e) => {
    const todo = todoList.children;

    switch(e.target.value) {
        case 'all':
            for (i = 0; i < todo.length; i++) {
                todo[i].style.display = 'flex';
            }
            break;
        case 'completed':
            for (i = 0; i < todo.length; i++) {
                if(todo[i].classList.contains('checkedBtn')) {
                    todo[i].style.display = 'flex';
                } else {
                    todo[i].style.display = 'none';
                }
            }
            break;
        case 'uncompleted':
            for (i = 0; i < todo.length; i++) {
                if(!todo[i].classList.contains('checkedBtn')) {
                    todo[i].style.display = 'flex';
                } else {
                    todo[i].style.display = 'none';
                }
            }
            break;
    }
}

const saveToStorage = (todo) => {
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => {
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        const BtnWrapper = document.createElement('div');
        const todoItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const checkBtn = document.createElement('button');
    
        todoDiv.classList.add('firstDiv');
        BtnWrapper.classList.add('secondDiv');
        todoItem.innerText = todo;
        deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
        deleteBtn.classList.add('deleteBtn');
        checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        checkBtn.classList.add('checkBtn');
        
        todoDiv.appendChild(todoItem);
        BtnWrapper.appendChild(checkBtn);
        BtnWrapper.appendChild(deleteBtn);
        todoDiv.appendChild(BtnWrapper);
        todoList.appendChild(todoDiv);
    })
}

const buildHtml = () => {
    const todoDiv = document.createElement('div');
    const BtnWrapper = document.createElement('div');
    const todoItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const checkBtn = document.createElement('button');

    todoDiv.classList.add('firstDiv');
    BtnWrapper.classList.add('secondDiv');
    todoItem.innerText = inputField.value;
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    deleteBtn.classList.add('deleteBtn');
    checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    checkBtn.classList.add('checkBtn');

    todoDiv.appendChild(todoItem);
    BtnWrapper.appendChild(checkBtn);
    BtnWrapper.appendChild(deleteBtn);
    todoDiv.appendChild(BtnWrapper);
    todoList.appendChild(todoDiv);
}
