<!-- SHOWS ROUTE -->

<script>
    import FavoriteStore from '../stores/FavoriteStore.js'
    import { fade, scale } from 'svelte/transition'
    import { flip } from 'svelte/animate'

    let favorites = []
    FavoriteStore.subscribe(data =>{  
favorites = data

    });

    

    const handleDelete = (id) => {
FavoriteStore.update(current => {
return current.filter(favorite => favorite.id != id)

})
    }
</script>



<div class="container">
    <h1 class="mt-2" in:fade>Home</h1>

      <div class="row row-cols-1 row-cols-md-6 g-4 mt-3">
    {#each favorites as favorite}
    
    <div class="col">
        <div class="card h-100" in:fade out:scale>
          <img src={favorite.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">{favorite.name}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{favorite.year}</h6>
          </div>
          <div class="card-footer"><button class="btn btn-outline-primary"><a href={`/${favorite.id}`}>info</a></button><button class="btn btn-danger ms-2" on:click={() => handleDelete(favorite.id)}>X</button></div>
        </div>
      </div>

         
    {/each}
</div>
</div>