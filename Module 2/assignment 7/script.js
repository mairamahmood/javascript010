function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter number of sides:"));

let result;

document.write("<ul>");

do {
    result = rollDice(sides);
    document.write("<li>" + result + "</li>");
} while (result !== sides);

document.write("</ul>");