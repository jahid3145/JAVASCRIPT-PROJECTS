function greetuser(){
    let name = document.getElementById("username").value;
    if(name ===""){
        document.getElementById("output").innerText="Please enter Your Name";
    }

    else{

        document.getElementById("output").innerText="hello," +name+"Welcome";
        
    }
}