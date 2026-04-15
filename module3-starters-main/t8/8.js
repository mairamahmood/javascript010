let button = document.querySelector("button");

button.addEventListener("click", function () {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "sub") {
        result = num1 - num2;
    } else if (operation === "mul") {
        result = num1 * num2;
    } else if (operation === "div") {
        result = num1 / num2;
    }

    document.getElementById("result").textContent = result;
});