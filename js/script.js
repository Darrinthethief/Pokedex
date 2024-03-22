const pokemon = document.querySelector('#search-input');
const button = document.querySelector('#search-button');

const getPokemon = async () => {
    try {
        const searchPokemon = pokemon.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchPokemon}`);
        const data = await response.json();
        displayPokemon(data);
    } catch (err) {
        alert("Pokemon not found");
        console.log(err);
    }
}

const displayPokemon = (pokemon) => {
    const pokemonName = document.querySelector('#pokemon-name');
    const pokemonId = document.querySelector('#pokemon-id');
    const pokemonWeight = document.querySelector('#pokemon-weight');
    const pokemonHeight = document.querySelector('#pokemon-height');
    const pokemonImage = document.querySelector('#sprite');

    pokemonName.textContent = pokemon.name.toUpperCase();
    pokemonId.textContent = `#${pokemon.id}`;
    pokemonWeight.textContent = `Weight: ${pokemon.weight}`;
    pokemonHeight.textContent = `Height: ${pokemon.height}`;
    pokemonImage.innerHTML = `
        <img 
            src="${pokemon.sprites.front_default}"
            alt="${pokemon.name}"
            front default sprite
        >
    `
}

button.addEventListener('click', getPokemon);
