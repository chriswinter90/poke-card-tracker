<script>
 import { sortBy } from 'lodash';
 import { pokedex } from "../store/pokedex";
 import PokeCard from '../components/PokeCard.svelte';

 let filter = '';

 $: allCards = Object.keys($pokedex).map(id => $pokedex[id]);

 $: cardList = filter.length
 ? sortBy(allCards.filter(card => card.name.toLowerCase().includes(filter)), [o => o.name])
 : sortBy(allCards, [o => o.name]) || [];

 const sortCards = (cards) => cards
 const removeCardFromPokedex = (card) => {
   pokedex.remove(card);
 }
</script>
<div class="route route--pokedex">
 <h1>Pokédex</h1>
 <div class="my-cards-header">
  <h3>Cards You Have:</h3>
  <h5>(Click to remove from your collection)</h5>
  <input bind:value={filter} placeholder="Filter by name">
 </div>
 <div class="card-container">
  {#each cardList || [] as card}
   <PokeCard
     pokeCard={card}
     onClickFunction={removeCardFromPokedex}
   ></PokeCard>
  {/each}
 </div>
</div>
<style lang="scss">
 .card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 }

 .my-cards-header {
  margin-bottom: 20px;
 }

 .route--pokedex {
   :global(.pokemon-card) {
     animation: rotateCard 8s linear infinite;
   }
   @keyframes rotateCard {
    0% {
     transform: rotateY(0deg);
    }
    100% {
     transform: rotateY(360deg);
    }
   }
 }
</style>
