let textarea=document.getElementById("text");
let count=document.getElementById("count");
textarea.addEventListener("keyup",function(){
    let textlenght=textarea.value.length;
    count.innerText=textlenght;
});