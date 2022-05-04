<script>
  import FavoriteStore from "../../stores/FavoriteStore.js";
  let pathId = window.location.pathname.replace(/[^0-9]/g, "");
  let favorites = [];
  let movie = favorites.find(isMovie);

  
  FavoriteStore.subscribe((data) => {
    favorites = data;
  });

  function isMovie(movie) {
    return movie.id === parseInt(pathId);
  }

  
</script>

<div class="movie">
  <div class="container">
    <h2>{movie.name}</h2>
    <p>movie</p>
  </div>
</div>
