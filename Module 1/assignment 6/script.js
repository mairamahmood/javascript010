let confirmResult = confirm("Should I calculate the square root?");

if (confirmResult) {
    let num = Number(prompt("Enter a number:"));

    if (num < 0) {
        document.write("The square root of a negative number is not defined");
    } else {
        let result = Math.sqrt(num);
        document.write("Square root is: " + result);
    }
} else {
    document.write("The square root is not calculated.");
}