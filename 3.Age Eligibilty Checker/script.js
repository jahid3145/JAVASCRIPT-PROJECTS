function check() {

    let age=document.getElementById("age").value;
    age=Number(age);

    if (age>=18) {
        document.getElementById("result").innerText="Your Eligible To Vote"
    }
    else {
        document.getElementById("result").innerText="Your Are pilla bacha  Not Eligible"
    }

}