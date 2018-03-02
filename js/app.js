const form = $('#search-form');
const $searchField = $('#search-keyword');
const $responseContainer = $('#response-container');
const $responseImg = $('#response-img');
let $searchedForText;

form.submit(function(e) {
	e.preventDefault();
	$responseContainer.html(" ");
	$searchedForText = $searchField.val();
	getPokemons();
})

const handleError = () => {
	console.log('Se ha presentado un error');
}

const addPokemons = function(pokemons) {
	const pokemonList = pokemons.pokemon_entries;
	

	pokemonList.forEach(function(pokemon){
		const name = pokemon.pokemon_species.name;
		const src = "https://dummyimage.com/600x400/000/fff";

		let $li = document.createElement('li');
		$li.className = 'articleClass';
		$li.innerText = name;

		let $img = document.createElement('img');
		// $img.attr('src', "https://dummyimage.com/600x400/000/fff");
		$responseContainer.append($li);
		// $responseContainer.append($img);
	})
	// // console.log(this);
	// const data = JSON.parse(this.responseText);
	// // console.log(data);
	// const response = data.response.docs;
	// console.log(response);

	// response.forEach(element => {
	// 	console.log(element);
	// 	const title = element.headline.main;
	// 	const snippet = element.snippet;
	// 	// const src = element.multimedia[0].url;
	// 	// console.log(src);

	// 	let li = document.createElement('li');
	// 	li.className = 'articleClass';
	// 	li.innerText = snippet;

	// 	responseContainer.appendChild(li);
	// });

	// let img = document.createElement('img');
	// let info = img.setAttribute = ('src', src);
	// console.log(info);
	// responseContainer.appendChild(img);
}

const getPokemons = () => {
	$.ajax({
		url : `https://pokeapi.co/api/v2/pokedex/1/`
	}).done(addPokemons)
	.fail(handleError);
}


