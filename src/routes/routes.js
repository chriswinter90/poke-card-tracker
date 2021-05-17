import Home from './Home.svelte';
import Pokedex from './Pokedex.svelte';


export const routes = {
  // Exact path
  '/': Home,

  '/pokedex': Pokedex,
}
