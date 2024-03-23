const searchPokemon = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const pokemonForm = document.querySelector('#pokemon-form');

const getPokemon = async () => {
    try {
        const pokemon = searchPokemon.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
        const data = await response.json();
        displayPokemon(data);
    } catch (err) {
        clearPokemon();
        alert("Pokemon not found");
        console.log(err);
    }
}

const pokemonName = document.querySelector('#pokemon-name');
const pokemonId = document.querySelector('#pokemon-id');
const pokemonWeight = document.querySelector('#weight');
const pokemonHeight = document.querySelector('#height');
const pokemonImage = document.querySelector('#image-display');
const pokemonType = document.querySelector('#types');
const pokemonStats = document.querySelector('#stats');
const pokemonHp = document.querySelector('#hp');
const pokemonAttack = document.querySelector('#attack');
const pokemonDefense = document.querySelector('#defense');
const pokemonSpecialAttack = document.querySelector('#special-attack');
const pokemonSpecialDefense = document.querySelector('#special-defense');
const pokemonSpeed = document.querySelector('#speed');

const displayPokemon = (pokemon) => {
    pokemonName.textContent = pokemon.name.toUpperCase();
    pokemonId.textContent = `#${pokemon.id}`;
    pokemonWeight.textContent = `Weight: ${pokemon.weight}`;
    pokemonHeight.textContent = `Height: ${pokemon.height}`;
    pokemonImage.innerHTML = `
        <img id="sprite" src="${pokemon.sprites.front_default}" alt="${pokemon.name} front_default" />
    `;
    pokemonType.innerHTML = pokemon.types.map(item => `<span id="type ${item.type.name}">${item.type.name}</span>`).join(' ');
    pokemonHp.textContent = `${pokemon.stats[0].base_stat}`;
    pokemonAttack.textContent = `${pokemon.stats[1].base_stat}`;
    pokemonDefense.textContent = `${pokemon.stats[2].base_stat}`;
    pokemonSpecialAttack.textContent = `${pokemon.stats[3].base_stat}`;
    pokemonSpecialDefense.textContent = `${pokemon.stats[4].base_stat}`;
    pokemonSpeed.textContent = `${pokemon.stats[5].base_stat}`;
}

const clearPokemon = () => {
    const clearImage = document.querySelector('#sprite');
    if (clearImage) {
        clearImage.remove(); 
    } 

        pokemonId.textContent = '';
        pokemonWeight.textContent = '';
        pokemonHeight.textContent = '';
        pokemonImage.innerHTML = '';
        pokemonType.textContent = '';
        pokemonHp.textContent = '';
        pokemonAttack.textContent = '';
        pokemonDefense.textContent = '';
        pokemonSpecialAttack.textContent = '';
        pokemonSpecialDefense.textContent = '';
        pokemonSpeed.textContent = '';
    
}

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getPokemon();
});
