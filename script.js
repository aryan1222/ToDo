const addTask = document.querySelector('#taskForm');
const taskList = document.querySelector('#taskList');
const clrbtn = document.querySelector('#clear')
const taskInput = document.querySelector('#taskInput');

// Add task
addTask.addEventListener('submit',addNewTask);

// Remove a Task
taskList.addEventListener('click',removeTask);

// Clearing all tasks at once
clrbtn.addEventListener('click',clearAll);

function addNewTask(e){

    if(taskInput.value ===''){
        alert('Add Task')
    }else{
        const div = document.createElement('div');
        div.className = 'group';

        const li = document.createElement('li');
        li.className = 'task-content';
        li.appendChild(document.createTextNode(taskInput.value))
        div.appendChild(li);

        const link = document.createElement('a');
        link.className = 'delete-task';
        link.innerHTML = '<button class="delete group">-</button>';
        div.appendChild(link);

        taskList.appendChild(div);

        taskInput.value = '';        
    }
    e.preventDefault();

}

function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-task')){
        e.target.parentElement.parentElement.remove();
    }

}

function clearAll(){

    taskList.innerHTML ='';

}