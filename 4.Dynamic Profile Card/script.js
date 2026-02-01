function create() {
    let name=document.getElementById("name").value;
    let role=document.getElementById("role").value;

    if (name==="" || role==="") {
        alert("Please Enter Both Name and Role! ");
        return;
    }

    document.getElementById("profile").innerHTML = `<div class="card">
        <h3>${name}</h3>
        <p>ROLE=${role}</p>
    </div>
    `;

      
} 