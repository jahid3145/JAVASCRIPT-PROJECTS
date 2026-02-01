function add() {
    let n1=document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;
    let result = Number(n1) + Number(n2);
    document.getElementById("result").innerText="RESULT :"+result;
}

function sub() {

    let n1=document.getElementById("num1").ariaValueMax;
    let n2=document.getElementById("num2").ariaValueMax;
    let result = Number(n1) - Number(n2);
    document.getElementById("result").innerText="RESULT :"+result;


}