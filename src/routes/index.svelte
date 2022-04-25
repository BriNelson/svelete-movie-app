<script>
    let searchedMovie = ''
    let movieDataArray= handleClick()
    async function handleClick() {
        const response = await fetch(`https://api.watchmode.com/v1/autocomplete-search/?apiKey=2YFLc8ybj1SYc0aKKuuAmixVq0Gn0I5HeummEHHT&search_value=${searchedMovie}&search_type=1'`)
        const movieData = await response.json()
        return movieData
        
    }
</script>

<div>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form on:submit|preventDefault={handleClick} class="d-flex">
            <input bind:value={searchedMovie} class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </nav>
      


</div>