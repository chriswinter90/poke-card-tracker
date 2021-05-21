import { writable } from 'svelte/store';

/**
 * Creates the pokedex store
 */
const createPokedex = () => {
  const {subscribe, update} = writable(JSON.parse(localStorage.getItem('pokedex')) || {});

  /**
   * Adds card to store and local storage overriding
   * @param  card
   */
  const add = (card) => {
    update((pokedex) => {
      pokedex = {
        ...pokedex,
        [card.id]: card,
      }
      save(pokedex);
      return pokedex;
    })
  };

  const remove = (card) => {
    update((pokedex) => {
      delete pokedex[card.id];
      save(pokedex)
      return pokedex;
    })
  }

  /**
   * Save pokedex to local storage
   *
   * @param pokedex - pokedex to save
   */
  const save = (pokedex) => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex));
  }

  return {
    subscribe,
    add,
    remove,
  }
}

export const pokedex = createPokedex();
