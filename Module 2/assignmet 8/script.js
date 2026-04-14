function concat(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

let names = ["Maira", "Sami", "Ira", "Cathy"];

let output = concat(names);

document.write(output);