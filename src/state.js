const state = {
	position: 0,
	pokemons: [
		{
			name: 'ivysaur',
			artwork:
				'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
			health: {
				current: 60,
				initial: 60,
				bar: 'green',
			},
			types: [
				{
					name: 'grass',
				},
				{
					name: 'poison',
				},
			],
			moves: [
				{
					name: 'swords-dance',
				},
				{
					name: 'cut',
				},
				{
					name: 'bind',
				},
				{
					name: 'vine-whip',
				},
			],
			_ui: {
				container: null,
				bar: null,
				health: null,
			},
		},
		{
			name: 'charmeleon',
			artwork:
				'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
			health: {
				current: 58,
				initial: 58,
				bar: 'green',
			},
			types: [
				{
					name: 'fire',
				},
			],
			moves: [
				{
					name: 'mega-punch',
				},
				{
					name: 'fire-punch',
				},
				{
					name: 'thunder-punch',
				},
				{
					name: 'scratch',
				},
			],
			_ui: {
				container: null,
				bar: null,
				health: null,
			},
		},
	],
};
