const filePath = 'jsonObject.json';

    function retriveData(){
        fetch('jsonObject.json') 
    .then(response => {
        if (!response.ok) {
        throw new Error('error');
        }
        return response.json(); 
    })
    .then(data => {
        var table = document.getElementById("table");
        const users = data.users;
        users.forEach(user => {
        var newRow = table.insertRow();
        var firstName = newRow.insertCell(0);
        var lastName = newRow.insertCell(1);
        var email = newRow.insertCell(2);
        var phone = newRow.insertCell(3);
        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        email.textContent = user.email;
        phone.textContent = user.phone;


        

        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
    retriveData();
    function toggleTable() {
    document.getElementById("table").classList.toggle("hidden");
}
