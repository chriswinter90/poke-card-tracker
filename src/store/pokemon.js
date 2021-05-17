import { writable } from 'svelte/store';

function createPokemon() {
  const { subscribe, set, update } = writable({});

  async function setInitial() {
    let setList = await fetch('https://api.pokemontcg.io/v2/sets?page=1&pageSize=5');
    setList = (await setList.json()).data;

    console.log('setList', setList);
    set({ setList, cards: {} , currentSetId: undefined });
  }

  async function getSetList(setId) {
    console.log('setId', setId);
    let setCards = await fetch(`https://api.pokemontcg.io/v2/cards/?q=set.id:${setId}`);
    setCards = (await setCards.json()).data;
    console.log('setCards', setCards);
    update(pokemon => {
      pokemon.cards[setId] = setCards;
      pokemon.currentSetId = setId;
      return pokemon;
    });
  }

  setInitial();

  return {
    subscribe,
    getSetList: (id) => getSetList(id),
    setSetList: (id) => update(pokemon => {
      pokemon.currentSetId = id;
      return pokemon;
    })
  };
}


export const pokemon = createPokemon();
