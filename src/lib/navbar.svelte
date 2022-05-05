<script>
  import FavoriteStore from "../stores/FavoriteStore";
  import { onMount } from "svelte";
  let searchedMovie = "";
  let movieData = fetchApiData();
  let savedMovie = [];
  let movieList; 
  let showList;
  // let savedMovieData = getMovieById()
  let test

  async function fetchApiData() {
    const response = await fetch(
      `https://api.watchmode.com/v1/autocomplete-search/?apiKey=2YFLc8ybj1SYc0aKKuuAmixVq0Gn0I5HeummEHHT&search_value=${searchedMovie}&search_type=1'`
    );
    const movieData = await response.json();
    const movieArray = await movieData.results;
    return movieArray;
  }

  async function getMovieById(id) {
    const response = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=2YFLc8ybj1SYc0aKKuuAmixVq0Gn0I5HeummEHHT&append_to_response=sources`)
const savedMovieData2 = await response.json();
console.log(savedMovieData2)


return savedMovieData2
    
}

  function handleClick() {
    movieData = fetchApiData();
  }


  async function handleSave (movies) {


   

test = await getMovieById(movies.id)
console.log(test)

    let newMovie = {
      name: movies.name,
      image_url: movies.image_url,
      id: movies.id,
      year: movies.year,
      type: movies.type,
      plot: test.plot_overview,
      sources: test.sources,
      trailer: test.trailer,
      trailer_thumbnail: test.trailer_thumbnail,
      runtime_minutes: test.runtime_minutes,
      us_ratings: test.us_ratings,
      genre_names: test.genre_names,
      

      
    };

    // savedMovie = [...savedMovie, newMovie]

    FavoriteStore.subscribe((data) => {
      let movies = data.filter(
        (word) => word.type !== "tv_series" && word.type !== "tv_miniseries"
      );
      movieList = movies.length;

      let tvSeries = data.filter(
        (word) => word.type === "tv_series" || word.type === "tv_miniseries"
      );
      showList = tvSeries.length;
    });

    FavoriteStore.update((current) => {
      return [newMovie, ...current];
    });
    console.log(newMovie);
  }

  console.log(movieData);
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Movie App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active position-relative "
            aria-current="page"
            href="/">Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/movies"
            >Movies <span class="badge bg-danger">{movieList}</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/shows"
            >Shows <span class="badge bg-danger">{showList}</span></a
          >
        </li>
      </ul>
      <form on:submit|preventDefault={handleClick} class="d-flex">
        <input
          bind:value={searchedMovie}
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          type="submit">Search</button
        >
      </form>
    </div>
  </div>
</nav>

<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Searched Media</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        {#await movieData}
          <!-- moviData is pending -->
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        {:then movie}
          {#each movie as movies, index}
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={movies.image_url}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{movies.name}</h5>
                    <p class="card-text">{movies.year}</p>
                    <button
                      class="btn btn-primary"
                      on:click={() => handleSave(movies)}>SAVE</button
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- content here -->
          {/each}
        {:catch error}
          <!-- moviData was rejected -->
        {/await}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>
