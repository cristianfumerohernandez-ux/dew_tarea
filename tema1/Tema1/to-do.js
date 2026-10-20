const ulTodoList = document.getElementById("todo-list");
let inputTask = document.getElementById('new-task');

function buttonInsertTask() {
    let newTask = inputTask.value.trim();
    if (!getListTasks().includes(newTask)) {
        insertTask(newTask);
    }
}

function toggleSelect(task) {
    task.classList.toggle("selected");
}

function insertTask(newTask) {
    let liTask = document.createElement('li');
    liTask.textContent = newTask;

    liTask.onclick = () => toggleSelect(liTask)
    liTask.ondblclick = () => deleteTask(liTask);
    ulTodoList.appendChild(liTask);

}

function deleteTask(task) {
    console.log(task);
    task.remove();
}

function getListTasks() {
    return [...ulTodoList.querySelectorAll('li')]
        .map(li => li.textContent);
}

// function sortTask() {
//     let sorted = getListTasks();
//     sorted.sort((a,b) => a.localeCompare(b));
//     ulTodoList.innerHTML = '';
//     sorted.forEach(task =>{
//         insertTask(task);
//     })
// }

function sortTask() {
    let liListTask = [...ulTodoList.querySelectorAll('li')];
    liListTask.sort((liA,liB) => 
        liA.textContent.localeCompare(liB.textContent));
    liListTask.forEach(li =>{
        ulTodoList.appendChild(li);
    })
    }

function setSelectAll(select = true){
    let liListTask = [...ulTodoList.querySelectorAll('li')];
    liListTask.forEach(li => {
        if(select){
            li.classList.add('selected');
        }else{

            li.classList.remove('selected');
        }
    })
}

function deleteSelected(){
    let liListTask = [...ulTodoList.querySelectorAll('li.selected')];
    liListTask.forEach(li =>{
        li.remove();
    })
    
}





