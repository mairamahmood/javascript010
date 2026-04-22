let form = document.getElementById("searchForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let value = document.getElementById("query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(data => {

            let results = document.getElementById("results");
            results.innerHTML = "";

            for (let i = 0; i < data.length; i++) {

                let show = data[i].show;

                let article = document.createElement("article");

                let h2 = document.createElement("h2");
                h2.textContent = show.name;

                let link = document.createElement("a");
                link.href = show.url;
                link.target = "_blank";
                link.textContent = "More info";

                let img = document.createElement("img");

                if (show.image) {
                    img.src = show.image.medium;
                } else {
                    img.src = "https://placehold.co/210x295?text=Not%20Found";
                }

                img.alt = show.name;

                let summary = document.createElement("div");
                summary.innerHTML = show.summary;

                article.appendChild(h2);
                article.appendChild(link);
                article.appendChild(img);
                article.appendChild(summary);

                results.appendChild(article);
            }
        });
});