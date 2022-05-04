<script>

import FavoriteStore from '../../stores/FavoriteStore.js'
let pathId = window.location.pathname.replace(/[^0-9]/g, '')
    console.log(pathId)

    let favorites = []
    FavoriteStore.subscribe(data =>{  
favorites = data

    });

   
function isMovie (Testarray){
     console.log(Testarray)
    return Testarray.id === pathId
}
 console.log(favorites)
console.log(favorites.find(isMovie))

   
</script>

<div class="movie">
    
    <h2>title</h2>
    <p>movie</p>
</div>