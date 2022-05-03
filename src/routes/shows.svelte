<script>
import FavoriteStore from '../stores/FavoriteStore'

    let favorites = []
    FavoriteStore.subscribe(data =>{  
favorites = data

    });

</script>

<div class="shows">
    

    

    {#each favorites as favorite}
    {#if favorite.type === 'tv_series'}
         <p>{favorite.name}</p>
         {/if}
    {/each}
</div>