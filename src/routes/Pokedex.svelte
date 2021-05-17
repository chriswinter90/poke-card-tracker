<script>
 import { pokedex } from "../store/pokedex";
</script>
<div class="route route--pokedex">
 <h1>Pokédex</h1>
 {#each Object.keys($pokedex).map((id) => $pokedex[id]) || [] as card}
  <div>{card.name}</div>
 {/each}
</div>
