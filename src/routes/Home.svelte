<script>
  import { pokemon } from '../store/pokemon';
  import Set from '../components/Set.svelte';
  import PokeCard from '../components/PokeCard.svelte';
  import { pokedex } from "../store/pokedex";

  let filter = '';

  $: cardList = filter.length
    ? $pokemon.cards[$pokemon.currentSetId].filter((card) => card.name.toLowerCase().includes(filter))
    : $pokemon?.cards?.[$pokemon.currentSetId] || [];

  function addCardToPokedex(card) {
    pokedex.add(card);
  }

</script>

<div class="route route--home">
  <div class="sets">
    <div class="sets__setlist">
      {#each $pokemon.setList || [] as set}
        <Set set="{set}" />
      {/each}
    </div>


    {#if $pokemon.currentSetId}
      <div class="sets__card-set-header">
        <h2>Cards Within Set:</h2>
        <h4>(Click to add to your collection)</h4>
        <input bind:value={filter} placeholder="Filter by name">
      </div>
      <div class="sets__cards">
        {#each cardList as card}
          <PokeCard
            pokeCard="{card}"
            onClickFunction={addCardToPokedex}
          ></PokeCard>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .sets__setlist,
  .sets__cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .sets__card-set-header {
    margin-bottom: 20px
  }
</style>
