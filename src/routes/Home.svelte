<script>
  import { pokemon } from '../store/pokemon';
  import { pokedex } from '../store/pokedex'
  import Set from '../components/Set.svelte';
  import { fade, slide } from 'svelte/transition';

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
      <div class="">
        <h2>Cards Within Set:</h2>
        <h4>(Click to add to your collection)</h4>
        <input bind:value={filter} placeholder="Filter by name">
      </div>
      <div class="sets__cards">
        {#each cardList as card}
          <div
            on:click={addCardToPokedex(card)}
            class="pokemon-card hover-grow"
            transition:fade={{duration: 200}}>
            <img alt="pokemon card" src={card.images.small}>
          </div>
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
  .pokemon-card {
    padding: 5px;
    cursor: pointer;
  }
</style>
