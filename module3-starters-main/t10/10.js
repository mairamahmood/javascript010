let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    let firstName = document.querySelector('input[name="firstname"]').value;
    let lastName = document.querySelector('input[name="lastname"]').value;

    let result = "Your name is " + firstName + " " + lastName;

    document.getElementById("target").textContent = result;
});
