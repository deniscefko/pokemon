const getPokemon = async function () {
  const baseUrl = 'file:///E:/new_desktop/coding/pokemon/index.html'
  const root = document.getElementById('root')
  const randomPokeId = Math.floor(Math.random() * 151)
  const url = `https://pokeapi.co/api/v2/pokemon/${randomPokeId}`
  const result = await window.fetch(url)
  const pokemon = await result.json()
  console.log(pokemon)

  const container = document.createElement('div')
  container.setAttribute('class', 'container')
  container.setAttribute('data-id', pokemon.id)
  container.setAttribute('data-name', pokemon.name)
  root.appendChild(container)

  const pokeAvatar = document.getElementById('pokeAvatar')
  console.log(pokeAvatar)

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokeId}.png`
  pokeAvatar.setAttribute('src', imgUrl)
}

const guessBtn = document.getElementById('guessBtn')
guessBtn.addEventListener('click', function (e) {
  const inputValue = (document.getElementById('input').value).toLowerCase()
  const [, container] = document.getElementsByClassName('container')
  const pokeId = container.getAttribute('data-id')
  const pokeName = container.getAttribute('data-name')
  if (inputValue === pokeName) {
    window.localStorage.setItem(pokeName, pokeId)
    console.log(1, 'guessed')
    e.preventDefault()
    getPokemon()
  } else {
    e.preventDefault()
    console.log(1, 'wrong')
    getPokemon()
  }
})

const input = document.getElementById('input')
input.addEventListener('keypress', function (e) {
  const [, container] = document.getElementsByClassName('container')
  const pokeId = container.getAttribute('data-id')
  const pokeName = container.getAttribute('data-name')
  if (e.keyCode === 13) {
    const inputValue = (input.value).toLowerCase()
    if (inputValue === pokeName) {
      window.localStorage.setItem(pokeName, pokeId)
      e.preventDefault()
      console.log(2, 'guessed')
      getPokemon()
    } else {
      e.preventDefault()
      console.log(2, 'wrong')
      getPokemon()
    }
  }
})

// function guessPokemon(event, pokemon) {

//   // console.log(event)

//   // const inputValue = (event.target.form[0].value).toLowerCase()
//   // if (inputValue === pokemon.name) {
//   //   window.localStorage.setItem(pokemon.id)
//   //   console.log('guessed')
//   // }

//   console.log('missed')
// }

function openPokedex() {
  console.log('pokedex opend')
}