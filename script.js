const addTask = document.querySelector('#taskForm');
const taskList = document.querySelector('#taskList');
const clrbtn = document.querySelector('#clear')
const taskInput = document.querySelector('#taskInput');
const search = document.getElementById('search-bar');

styleSearch(search);

// Add task
addTask.addEventListener('submit',addNewTask);

// Remove a Task
taskList.addEventListener('click',removeTask);

// Clearing all tasks at once
clrbtn.addEventListener('click',clearAll);

search.addEventListener('keyup',searchTask);

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
        if(confirm('Are you sure to delete it?')){
            e.target.parentElement.parentElement.remove();
        }
    }

}

function clearAll(){

    taskList.innerHTML ='';

}

function searchTask(e){

    const searchText = e.target.value.toUpperCase();

    document.querySelectorAll('.group').forEach(function(task){
        const text = task.firstChild.textContent;
        console.log(text);
        if(text.toUpperCase().indexOf(searchText) != -1){
            task.style.display = 'flex';
        }else{
            task.style.display = 'none';
        }
    });

}

function styleSearch(s){

    s.style.background = '#777';
    s.style.color = '#fff';
    s.style.border = 'none';
    s.style.borderBottom = '0.2rem solid #fff';
    s.style.marginBottom = '2rem';
    
}