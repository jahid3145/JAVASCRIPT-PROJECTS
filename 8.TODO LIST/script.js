let taskinput = document.getElementById("taskinput");
let addbtn = document.getElementById("addbtn");
let tasklist = document.getElementById("task-list");
let clearbtn = document.getElementById("clearbtn");

let tasks = [];

addbtn.addEventListener("click",addTask);
clearbtn.addEventListener("click",clearTask);

function addTask() {
    let task = taskinput.value;

    if (task==="") {
        alert("Please Enter a Task");
        return;

    }

    tasks.push(task);
    taskinput.value="";
    displayTasks();
}

function displayTasks() {
    tasklist.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;
        tasklist.appendChild(li);
    });
}


function deleteTask(index) {
    tasks.splice(index,1);
    displayTasks();

}

function clearTask() {
    tasks = [];
    displayTasks();
}

