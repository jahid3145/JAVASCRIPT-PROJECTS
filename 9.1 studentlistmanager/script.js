let studentinput = document.getElementById("studentinput");
let addbtn = document.getElementById("addbtn");
let studentlist = document.getElementById("studentlist");
let count = document.getElementById("count");
let emptyMsg = document.getElementById("emptyMsg");

let students = [];

// Add Student
addbtn.addEventListener("click", addStudent);

studentinput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addStudent();
    }
});

function addStudent() {
    let name = studentinput.value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    students.push(name);
    studentinput.value = "";
    displayStudents();
}

// Display Students
function displayStudents() {
    studentlist.innerHTML = "";

    students.forEach(function(student, index) {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${index + 1}. ${student}</span>
            <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
        `;

        studentlist.appendChild(li);
    });

    count.innerText = students.length;

    // Show / Hide empty message
    emptyMsg.style.display = students.length === 0 ? "block" : "none";
}

// Delete Student
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
