import { writable } from 'svelte/store';

/**
 * Creates the pokedex store
 */
const createPokedex = () => {
  const {subscribe, set, update} = writable(JSON.parse(localStorage.getItem('pokedex')) || {});

  /**
   * Sets and stores pokedex to store and local storage overriding the default store set
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

  const remove = (cardId) => {
    update((pokedex) => {
      delete pokedex[cardId];
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
