const getPokemon = async function () {
  const root = document.getElementById('root')
  const randomPokeId = Math.floor(Math.random() * 151)
  const url = `https://pokeapi.co/api/v2/pokemon/${randomPokeId}`
  const result = await window.fetch(url)
  const pokemon = await result.json()
  console.log(pokemon)

  const container = document.createElement('div')
  container.setAttribute('class', 'container')
  root.appendChild(container)

  const pokeAvatar = document.getElementsByClassName('pokeAvatar')
  console.log(pokeAvatar)

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokeId}.png`
  pokeAvatar[0].setAttribute('src', imgUrl)
}

function guessPokemon(event, pokemon) {
  const inputValue = (event.target.form[0].value).toLowerCase()
  // if (inputValue === pokemon.name) {
  //   window.localStorage.setItem(pokemon.id)
  // }
  console.log(event)
  
}

function openPokedex() {
  console.log('pokedex opend')
}