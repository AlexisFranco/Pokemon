function formatPokemon(data = {}) {
	return {
		name: data.name,
		artwork: data.sprites.other['official-artwork'].front_default,
		health: {
			current: data.stats[0].base_stat,
			initial: data.stats[0].base_stat,
			bar: 'green',
		},
		types: data.types.map((item) => /* ({ name: item.type.name })*/ {
			return {
				name: item.type.name,
			};
		}),
		moves: data.moves.slice(0, 4).map((item) => ({ name: item.move.name })),
		_ui: {
			container: null,
			bar: null,
			health: null,
		},
	};
}

function getPokemon() {
	const id = getRandomNumber(150);
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	return fetch(url)
		.then((response) => response.json())
		.then((data) => formatPokemon(data));
}

async function getState() {
	const pokemons = await Promise.all([getPokemon(), getPokemon()]);
	return {
		position: 0,
		pokemons: pokemons,
	};
}
