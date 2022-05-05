<script>
  import FavoriteStore from "../../stores/FavoriteStore.js";
  let pathId = window.location.pathname.replace(/[^0-9]/g, "");
  console.log(pathId);

  let favorites = [];
  FavoriteStore.subscribe((data) => {
    favorites = data;
  });

  function isMovie(movie) {
    return movie.id === parseInt(pathId);
  }

  let movie = favorites.find(isMovie);

 let youtube = movie.trailer
 
 let tokens = youtube.split('=')
 console.log(tokens[1])
 let youtubeLink = "https://www.youtube.com/embed/" + tokens[1]

</script>

<div class="movie">
  <div class="container">

    <div class="card mb-3" style="max-width: 500px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={movie.image_url} class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="ratio ratio-4x3">
                <iframe src={youtubeLink} title="description"></iframe>
            </div>
            
          </div>
        </div>
      </div>
    <h2>{movie.name}</h2>
    <p>{movie.plot}</p>
    
    
  </div>
</div>
