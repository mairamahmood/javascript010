let numbers = [];
let num;

while (true) {
    num = Number(prompt("Enter a number (0 to stop):"));

    if (num === 0) {
        break;
    }

    numbers.push(num);
}

numbers.sort(function(a, b) {
    return b - a;
});

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}