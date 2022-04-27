<script>
    import FavoriteStore from '../stores/FavoriteStore'
 let searchedMovie = ''
    let movieData = fetchApiData()
    let savedMovie = []

    async function fetchApiData() {
        const response = await fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=2YFLc8ybj1SYc0aKKuuAmixVq0Gn0I5HeummEHHT&search_value=${searchedMovie}&search_type=1'`)
        const movieData = await response.json()
        console.log(movieData.results)
        const movieArray = await movieData.results
        return movieArray
    }

   function handleClick() {
      movieData = fetchApiData()
    }
    function handleSave(movies) {
        console.log (movies.name)
    }

console.log(movieData)
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Movie App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/movies">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/shows">Shows</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
        </ul>
        <form on:submit|preventDefault={handleClick} class="d-flex">
          <input bind:value={searchedMovie} class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Searched Media</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {#await movieData}
    <!-- moviData is pending -->
   <p> loading</p>
  {:then movie}
  
    {#each movie as movies, index}
    
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={movies.image_url} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{movies.name}</h5>
            <p class="card-text">{movies.year}</p>
            <button class="btn btn-primary" on:click={()=>handleSave(movies)}>SAVE</button>
          </div>
        </div>
      </div>
    </div><!-- content here -->
    {/each}

  {:catch error}
    <!-- moviData was rejected -->
  {/await}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>