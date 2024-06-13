document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('personal-data-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const description = document.getElementById('description').value;
        const major = document.getElementById('major').value;
        const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(cehckedItem=> cehckedItem.value);

        const formData = {
            name,
            age,
            gender,
            description,
            major,
            languages
        };

        localStorage.setItem('personalData', JSON.stringify(formData));

        alert('Data saved locally!');
        window.location.href = "display-personal-data.html";
    });
});
