let studentinput = document.getElementById("studentinput");

let addbtn = document.getElementById("addbtn");

let studentlist = document.getElementById("studentlist");

let student = [];

addbtn.addEventListener("click",addstudent);

function addstudent() {
    let name = studentinput.value.trim();

    if (name ==="")  {
        alert ("please enter student name ");
        return;
    }

    student.push(name);
    studentinput.value = "";
    displaystudent();
}

function displaystudent() {
    studentlist.innerHtml = "";

    student.forEach(function(student,index) {
        let li = document.createElement("li");

        li.innerText = ` ${index+1} . ${student} `;

        studentlist.appendChild(li);


    });
}