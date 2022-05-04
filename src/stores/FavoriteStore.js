import {writable} from 'svelte/store'

const FavoriteStore = writable(
    
    [
      {
        "name": "Harry Potter 20th Anniversary: Return to Hogwarts",
        "image_url": "https://cdn.watchmode.com/posters/0543171_poster_w185.jpg",
        "id": 543171,
        "year": 2022,
        "type": "movie"
    },
    {
      "name": "Star Wars",
      "image_url": "https://cdn.watchmode.com/posters/01359293_poster_w185.jpg",
      "id": 1359293,
      "year": 1977,
      "type": "movie"
  }
      
    ]
);

export default FavoriteStore;