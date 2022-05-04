<script>
    import FavoriteStore from '../stores/FavoriteStore'

    let favorites = []
    FavoriteStore.subscribe(data =>{  
favorites = data

    });

    console.log(favorites)

    const handleDelete = (id) => {
FavoriteStore.update(current => {

})
    }
</script>



<div class="container">
    

      <div class="row row-cols-1 row-cols-md-6 g-4">
    {#each favorites as favorite}
    {#if favorite.type !== 'tv_series'}
    <div class="col">
        <div class="card h-100">
          <img src={favorite.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{favorite.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{favorite.year}</h6>
          </div>
          <div class="card-footer"><button class="btn btn-outline-primary">info</button><button class="btn btn-danger ms-2" on:click={() => handleDelete(favorite.id)}>X</button></div>
        </div>
      </div>

         {/if}
    {/each}
</div>
</div>