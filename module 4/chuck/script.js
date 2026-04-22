let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let value = document.getElementById("query").value;

    fetch(`https://api.chucknorris.io/jokes/search?query=${value}`)
        .then(res => res.json())
        .then(data => {

            let results = document.getElementById("results");
            results.innerHTML = "";

            for (let i = 0; i < data.result.length; i++) {
                let article = document.createElement("article");

                let p = document.createElement("p");
                p.textContent = data.result[i].value;

                article.appendChild(p);
                results.appendChild(article);
            }
        });
});
