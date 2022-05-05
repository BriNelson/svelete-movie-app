<script>
  import FavoriteStore from "../../stores/FavoriteStore.js";
  let pathId = window.location.pathname.replace(/[^0-9]/g, "");
  console.log(pathId);

  let favorites = [];
  // DataStore
  FavoriteStore.subscribe((data) => {
    favorites = data;
  });
// finds movie by id
  function isMovie(movie) {
    return movie.id === parseInt(pathId);
  }

  let movie = favorites.find(isMovie);
  //takes messed up youtube link and fixes it( kind of ghetto )
  let youtube = movie.trailer;

  let tokens = youtube.split("=");
  console.log(tokens[1]);
  let youtubeLink = "https://www.youtube.com/embed/" + tokens[1];
</script>
<!-- mov -->
<div class="movie">
  <div class="container" style="max-width: 500px">
    <h3 class="mt-4 mx-auto " style="max-width: 500px">{movie.name}</h3>
    <h6 class="text-secondary">
      {movie.type} - {movie.us_rating} - {movie.year}
    </h6>
    <div class="card mb-3 mx-auto" style="max-width: 500px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={movie.image_url}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="ratio ratio-4x3">
            <iframe src={youtubeLink} title="description" />
          </div>
        </div>
      </div>
    </div>
<!-- Surary and  -->
    <h5>Summary</h5>
    <p class="mx-auto" style="max-width: 500px">{movie.plot}</p>

    {#each movie.sources as source}
      {#if source.type == "sub"}
       
        <span class="badge bg-primary me-1">{source.name}</span>
      {/if}
    {/each}

    <!-- Cast Block -->
    <h5 class="mt-5">Cast</h5>
    <ul class="list-group mt-3">
      {#each movie.cast_crew as crew}
        {#if crew.order <= 20 && crew.order !== null}
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <img src={crew.headshot_url} style="max-width: 70px" />
            <div class="ms-2 me-auto">
              <div class="fw-bold">{crew.full_name}</div>
              {crew.role}
            </div>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
