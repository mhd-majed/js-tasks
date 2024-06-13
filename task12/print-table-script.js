document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form1").addEventListener("submit", function(event) {
        event.preventDefault();

        let usersJSON = localStorage.getItem('usersData');
        let users = usersJSON ? JSON.parse(usersJSON) : [];

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        let user = {
            name: name,
            email: email,
            phone: phone
        };

        document.getElementById("nameHeader").textContent += name;
        document.getElementById("emailHeader").textContent += email;
        document.getElementById("phoneHeader").textContent += phone;

        users.push(user);
        localStorage.setItem('usersData', JSON.stringify(users));
        updateTable();

        document.getElementById("form1").reset();
    });

    updateTable();
});

function updateTable(){
    let usersJSON = localStorage.getItem('usersData');
    let users = usersJSON ? JSON.parse(usersJSON) : [];
    let table = document.getElementById("table");

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
        </tr>
    `;

    users.forEach(user => {
        var newRow = table.insertRow();
        var name = newRow.insertCell(0);
        var email = newRow.insertCell(1);
        var phone = newRow.insertCell(2);
        name.textContent = user.name;
        email.textContent = user.email;
        phone.textContent = user.phone;
    });

    // Show the table if it has content
    if (users.length > 0) {
        table.classList.remove("hidden");
    }
}
