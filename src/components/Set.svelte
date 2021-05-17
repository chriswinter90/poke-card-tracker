<div class="set hover-grow" on:click={handleSetClick}>
  <img alt="set" class="set__img" src={set.images.logo}/>
  <div class="set__name">{set.name}</div>
</div>

<script>
  import { pokemon } from '../store/pokemon';

  export let set = {};

  $: console.log($pokemon.cards)

  function handleSetClick() {
    if (!$pokemon.cards[set.id]) {
      pokemon.getSetList(set.id);
    } else {
      pokemon.setSetList(set.id);
    }
  }
</script>

<style>
  .set {
    display: flex;
    flex-direction: column;
    justify-content: center;

    cursor: pointer;
    margin: 10px;
    padding: 5px;
    height: 300px;
    width: 200px;
    background-color: red;
    border-radius: 5px;
    box-shadow: 3px 3px 10px black;
  }

  .set__img {
    /*width: 200px;*/
  }

  .set__name {
    font-weight: 900;
    font-size: 20px;
  }
</style>
