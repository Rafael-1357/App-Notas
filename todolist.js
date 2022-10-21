var inputNewTodo = document.querySelector('#input--new--todo');
var btnNewTodo = document.querySelector('#btn--new--todo');
var todoList = document.querySelector('#todo--list')

inputNewTodo.addEventListener('keypress', (e) => {

    if(e.keyCode == 13){

        var task = {
            nome: inputNewTodo.value,
            id: idGenerator(),
        }
        addTask(task);
    }
});

btnNewTodo.addEventListener('click', (e) =>{

    var task = {
        nome: inputNewTodo.value,
        id: idGenerator(),
    }    
    addTask(task);
});

function idGenerator(){

    return Math.floor(Math.random() * 3000);
}

function addTask(task){

    var li = createTagLi(task);
    todoList.appendChild(li);
    inputNewTodo.value = '';
}

function createTagLi(task){

    var li = document.createElement('li');
    li.id = task.id;

    var btnChecked = document.createElement('button');
    btnChecked.classList.add('finish-todo')
    btnChecked.innerHTML = '<span class="material-symbols-sharp">done</span >'

    var taskTitle = document.createElement('h3');
    taskTitle.classList.add('task--title');
    taskTitle.innerHTML = task.nome;

    var btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-todo')
    btnEdit.innerHTML = '<span class="material-symbols-sharp">edit</span >'
    btnEdit.setAttribute('onclick', 'edit('+task.id+')');

    var btnDelete = document.createElement('button');
    btnDelete.classList.add('remove-todo')
    btnDelete.innerHTML = '<span class="material-symbols-sharp">close</span >'
    btnDelete.setAttribute('onclick', 'deletar(' + task.id + ')');

    li.appendChild(btnChecked);
    li.appendChild(taskTitle);
    li.appendChild(btnEdit)
    li.appendChild(btnDelete);
    return li;
}

function edit(idTask){
    
}

function deletar(idTask) {
        var li = document.getElementById('' + idTask + '')
        if(li){
            todoList.removeChild(li)
        }
}