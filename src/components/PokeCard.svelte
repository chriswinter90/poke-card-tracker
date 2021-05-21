<div
  on:click={onClickFunction(pokeCard)}
  class="pokemon-card hover-grow"
  transition:fade={{duration: 200}}
>
  <img alt="pokemon card front" class="front" src={pokeCard.images.small}>
  <img alt="pokemon card back" class="back" src="./backCover.png">
</div>

<script>
  import { pokedex } from "../store/pokedex";
  import { fade } from 'svelte/transition';

  export let pokeCard;
  export let onClickFunction;
</script>

<style lang="scss">
  .pokemon-card {
    padding: 5px;
    cursor: pointer;
    position: relative;
    width: 240px;
    height: 330px;
    backface-visibility: visible;
    transform-style: preserve-3d;
  }
  .pokemon-card:hover {
    animation: none;
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    height: 330px;
    backface-visibility: hidden;
  }

  .front {
    z-index: 10;
  }
  .back {
    z-index: 1;
    transform: rotateY(180deg);
  }
</style>
