var passwordInput = document.querySelector(".password-input");
passwordInput.addEventListener("input", validatePassword);

function validatePassword() {
    // Define the regular expressions for each condition
    var conditions = [
        /\d/,            // At least 1 number (0-9)
        /.{8,}/,         // At least 8 characters length
        /[a-z]/,         // At least 1 lowercase letter (a-z)
        /[A-Z]/,         // At least 1 uppercase letter (A-Z)
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]/   // At least 1 special symbol (!...$)
    ];

    // Get the list items
    var listItems = document.querySelectorAll("li");

    // Get the password value
    var password = document.querySelector(".password-input").value;

    // Check each condition and update the style accordingly
    for (var i = 0; i < conditions.length; i++) {
        if (conditions[i].test(password)) {
            listItems[i].style.color = "white"; // Change text color to green if condition is met
        } else {
            listItems[i].style.color = "rgba(224, 224, 224, 0.37)";  // Change text color to grey if condition is not met
        }
    }
}
