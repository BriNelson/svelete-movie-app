import {writable} from 'svelte/store'

const FavoriteStore = writable(
    
    [
        {
            id: 'testid',
      name: 'test'
        }
    ]
);

export default FavoriteStore;