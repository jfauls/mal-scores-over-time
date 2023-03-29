fetch("https://jfauls.github.io/mal-scores-over-time/SeasonalAnime.json")
  .then((response) => response.json())
  .then((data) => {
    var news = document.getElementsByClassName("news-story")[0];
    var items = data;
    console.log(data);
    console.log(Object.keys(items));
    keys = Object.keys(items);
    console.log(items[keys[i]].score[0])
    for(var i = 0; i < keys.length; i++) {
        var h5 = document.createElement("h5");
        h5.innerHTML = keys[i];
        news.appendChild(h5);
        var p = document.createElement("p");
        p.innerHTML = items[keys[i]].score[0];
        news.appendChild(p);
    }
  });
