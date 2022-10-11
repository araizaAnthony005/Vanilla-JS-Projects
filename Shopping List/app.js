const btn = document.querySelector('#btn');
const inputField = document.querySelector('#input');
const todoList = document.querySelector('.todoList');
const filterTodo = document.querySelector('#selectTodo');

btn.addEventListener('click', (e) => addTodo(e));
todoList.addEventListener('click', (e) => handleTodo(e));
filterTodo.addEventListener('click', (e) => handleFilter(e));


const addTodo = (e) => {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.style.display = 'flex';
    const todoItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const checkBtn = document.createElement('button');

    todoItem.innerText = inputField.value;
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    deleteBtn.classList.add('deleteBtn');
    checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    checkBtn.classList.add('checkBtn');
    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(deleteBtn);
    todoDiv.appendChild(checkBtn);
    todoList.appendChild(todoDiv);
    inputField.value = '';
}

const handleTodo = (e) => {
    const target = e.target;
    const todo = target.parentElement;
    if(target.classList[0] === 'deleteBtn') {
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }
    if(target.classList[0] === 'checkBtn') {
        todo.classList.toggle('checkedBtn');
    }
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