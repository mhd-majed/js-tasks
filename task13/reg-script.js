 document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("registration_form");

            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent form submission

                // Validate form fields
                const firstName = form.first_name.value.trim();
                const lastName = form.last_name.value.trim();
                const birthDate = form.birth_date.value;
                const email = form.email.value.trim();
                const confirmEmail = form.confirm_email.value.trim();
                const phone = form.phone.value.trim();
                const password = form.password.value;
                const confirmPassword = form.confirm_password.value;

                let isValid = true;

                // Validate first name
                const firstNameError = document.getElementById("first_name_error");
                if (!/^[a-zA-Z]+$/.test(firstName)) {
                    firstNameError.textContent = "The first name should only contain letters";
                    isValid = false;
                } else {
                    firstNameError.textContent = "";
                }

                // Validate last name
                const lastNameError = document.getElementById("last_name_error");
                if (!/^[a-zA-Z]+$/.test(lastName)) {
                    lastNameError.textContent = "The last name should only contain letters";
                    isValid = false;
                } else {
                    lastNameError.textContent = "";
                }

                // Validate birth date (optional)
                const birthDateError = document.getElementById("birth_date_error");
                if (!birthDate) {
                    birthDateError.textContent = "Please enter a valid birth date";
                    isValid = false;
                } else {
                    birthDateError.textContent = "";
                }

                // Validate email
                const emailError = document.getElementById("email_error");
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    emailError.textContent = "Invalid email address";
                    isValid = false;
                } else {
                    emailError.textContent = "";
                }

                // Validate confirm email
                const confirmEmailError = document.getElementById("confirm_email_error");
                if (email !== confirmEmail) {
                    confirmEmailError.textContent = "Emails do not match";
                    isValid = false;
                } else {
                    confirmEmailError.textContent = "";
                }

                // Validate phone number
                const phoneError = document.getElementById("phone_error");
                if (!/^[0-9]{10}$/.test(phone)) {
                    phoneError.textContent = "Please enter a 10-digit phone number";
                    isValid = false;
                } else {
                    phoneError.textContent = "";
                }

                // Validate password
                const passwordError = document.getElementById("password_error");
                if (!/(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,32}/.test(password)) {
                    passwordError.textContent = "Password must contain 1 uppercase letter, 2 numbers, 1 special character, and be 8-32 characters long.";
                    isValid = false;
                } else {
                    passwordError.textContent = "";
                }

                // Validate confirm password
                const confirmPasswordError = document.getElementById("confirm_password_error");
                if (password !== confirmPassword) {
                    confirmPasswordError.textContent = "Passwords do not match";
                    isValid = false;
                } else {
                    confirmPasswordError.textContent = "";
                }

                
                if (isValid) {
                    const formData = {
                        firstName: firstName,
                        lastName: lastName,
                        birthDate: birthDate,
                        email: email,
                        phone: phone,
                        password: password
                    };

                    localStorage.setItem('formData', JSON.stringify(formData));

                    alert('Form submitted successfully and data stored in localStorage!');
                    form.reset(); 
                    window.location.href = "login-page.html";

                }
            });
        });