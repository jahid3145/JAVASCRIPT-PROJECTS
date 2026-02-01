let button = document.getElementById("btn");

button.addEventListener("click", calculateGrade);

function calculateGrade() {
    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    // Convert string to number
    marks = Number(marks);

    if (marks === "") {
        result.innerText = "Please enter marks";
        result.style.color = "red";
    }
    else if (marks >= 90 && marks <= 100) {
        result.innerText = "Grade: A";
        result.style.color = "green";
    }
    else if (marks >= 75 && marks < 90) {
        result.innerText = "Grade: B";
        result.style.color = "blue";
    }
    else if (marks >= 50 && marks < 75) {
        result.innerText = "Grade: C";
        result.style.color = "orange";
    }
    else if (marks < 50) {
        result.innerText = "Fail";
        result.style.color = "red";
    }
    else {
        result.innerText = "Invalid marks";
        result.style.color = "red";
    }
}
