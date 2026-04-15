let target = document.getElementById("target");

let li1 = document.createElement("li");
li1.textContent = "First item";

let li2 = document.createElement("li");
li2.textContent = "Second item";

let li3 = document.createElement("li");
li3.textContent = "Third item";

li2.classList.add("my-item");

target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);