function choose(pokemon = {}) {
	const {
		name = '',
		health: { current = 0, initial = 0 },
		types = [],
		artwork = '',
	} = pokemon;

	const statusContainer = document.createElement('div');
	statusContainer.className = 'status';
	statusContainer.innerHTML = `
		<div class="info">
		<p class="name">${name}</p>
		</div>
		<ul class="types">
			${types
				.map((type) => `<li class="button ${type.name}">${type.name}</li>`)
				.join('')}
		</ul>
		<div class="meter">
			<span class="bar green" style="width: 100%"></span>
		</div>
		<div class="health">${current}/${initial}</div>
		`;
	const pokemonContainer = document.createElement('div');
	pokemonContainer.className = 'status';
	pokemonContainer.innerHTML = `
			<img
				src="${artwork}"
			/>
		`;

	return [statusContainer, pokemonContainer];
}

function controls(pokemon = {}, message = '', callback) {
	const { name = '', moves = [] } = pokemon;
	const dialogContainer = document.createElement('div');
	dialogContainer.className = 'dialog';
	dialogContainer.innerHTML = `
		<p>
			<span class="name">${name}</span>,
			<span class="message">${message}</span>
		</p>
	`;
	const movesContainer = document.createElement('div');
	movesContainer.className = 'moves';
	moves.forEach((move) => {
		const button = document.createElement('button');
		button.className = 'button black';
		button.textContent = move.name;
		button.addEventListener('click', callback);

		movesContainer.appendChild(button);
	});

	return [dialogContainer, movesContainer];
}
