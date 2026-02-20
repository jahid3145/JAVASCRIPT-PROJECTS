let user = {
    username : "jahid",
    fullname : "D.Jahid Basha",
    email : "jahid@gmail.com",
    role : "python Developer",
    Active : true,
};






document.getElementById("name").innerText ="Full Name : " + user.fullname;
document.getElementById("username").innerText ="User Name : @" +  user.username;
document.getElementById("email").innerText ="Email : " + user.email;
document.getElementById("role").innerText ="Role : " + user.role;


let st = document.getElementById("status");


if (user.Active) {
    st.innerText = "Active"


    st.style.backgroundColor ="green";
    st.style.color = "white";

}

else {
    st.innerText = "InActive"


    st.style.backgroundColor ="red";
    st.style.color = "white";


}