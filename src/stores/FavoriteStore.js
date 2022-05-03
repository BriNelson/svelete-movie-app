import {writable} from 'svelte/store'

const FavoriteStore = writable(
    
    [
        {
        id: 'testid',
        name: 'test',
      year: 2014,
        }
    ]
);

export default FavoriteStore;