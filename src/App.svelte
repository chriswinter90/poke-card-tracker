<script>
	import { routes } from './routes/routes';
	import Router from 'svelte-spa-router';
	import { link } from 'svelte-spa-router';
</script>

<main>
	<header>
		<h1>Poké Card Tracker</h1>
		<nav>
			<div class="link hover-grow">
				<a href="/" use:link>Card Sets</a>
			</div>
			<div class="divider"></div>
			<div class="link hover-grow">
				<a href="/pokedex" use:link>Pokédex</a>
			</div>
		</nav>
	</header>
	<section>
		<Router routes={routes}/>
	</section>
</main>

<style lang="scss">
	main {
		text-align: center;
	}

	header {
		margin-bottom: 20px;

		nav {
			display: flex;
			justify-content: center;
		}

		.link {
			padding: 5px 20px;
			background-color: red;
			border-radius: 5px;
			box-shadow: inset -2px -2px 5px black, inset 2px 2px 5px black;

			a {
				color: white;
				text-decoration: none;
				font-weight: bold;
				font-size: 20px;
			}
		}

		.divider  {
			margin: 0 15px;
			width: 3px;
			background-color: white;
		}
	}
</style>
