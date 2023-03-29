fetch("https://github.com/jfauls/mal-scores-over-time/SeasonalAnime.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
