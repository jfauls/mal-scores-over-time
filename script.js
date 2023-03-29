fetch("https://github.com/jfauls/mal-scores-over-time/blob/main/SeasonalAnime.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
