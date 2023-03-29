fetch("https://jfauls.github.io/mal-scores-over-time/SeasonalAnime.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
