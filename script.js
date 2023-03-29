fetch("https://jfauls.github.io/mal-scores-over-time/SeasonalAnime.json")
  .then((response) => response.json())
  .then((data) => {
    var news = document.getElementsByClassName("news-story")[0];
    var items = data;
    console.log(data)
    for(var i = 0; i < items.length; i++) {
        var h5 = document.createElement("h5");
        h5.innerHTML = items[i].title;
        news.appendChild(h5);
        var p = document.createElement("p");
        p.innerHTML = items[i].author;
        news.appendChild(p);
    }
  });
