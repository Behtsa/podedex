const $form = $('#search-form');
const $searchField = $('#search-keyword');
const $responseContainer = $('#response-container');
const $responseImg = $('#response-img');
let $searchedForText;

loadPage = () => {
	$responseContainer.html(" ");
	$searchedForText = $searchField.val();
	getPokemons();
};

const handleError = () => {
	console.log('Se ha presentado un error');
};

const addPokemons = function(pokemons) {
	const pokemonList = pokemons.pokemon_entries;
	console.log(pokemons)
	let pokemonTs = ' ';

	pokemonList.forEach(function(pokemon, index){
		if(index < 50) {
			// console.log(pokemon)
		let name = pokemon.pokemon_species.name;
		let url = pokemon.pokemon_species.url;
		// const name = pokemon.pokemon_species.name;
		const src = "https://dummyimage.com/100x100/000/fff";

		pokemonTs += `<li>
		<figure>
		<img src = ${src}>
		<figcaption>${name}</figcaption>
		<span>${url}</span>
		</figure>
		</li>`
		$responseContainer.html(pokemonTs);
		//console.log($responseContainer)
		}
		// let $li = document.createElement('li');
		// $li.className = 'articleClass';
		// $li.innerText = name;

		// let $img = document.createElement('img');
		// $img.src = src;
		// $responseContainer.append($li);
		// $responseContainer.append($img);
	})
};

const getPokemons = () => {
	$.ajax({
		url : `https://pokeapi.co/api/v2/pokedex/1/`
	}).done(addPokemons)
	.fail(handleError);
};

$(document).ready(loadPage);


