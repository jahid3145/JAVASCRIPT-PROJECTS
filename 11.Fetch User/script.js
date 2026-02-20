fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {

    let container = document.getElementById("usercontainer");

    users.forEach(user => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;

        container.appendChild(card);
    });

})
.catch(error => {
    console.log("Error:", error);
});
