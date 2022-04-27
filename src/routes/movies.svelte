<script>
    import FavoriteStore from '../stores/FavoriteStore'

    let favorites = []
    FavoriteStore.subscribe(data =>{  
favorites = data

    });

    console.log(favorites)
</script>



<div class="about">
    <p>{favorites[0].id}</p>
</div>