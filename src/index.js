// const pokeBtn = document.querySelector('#pokeBtn');

// pokeBtn.addEventListener('click', getName);

// async function getName() {
//   try {
//     const getPokemanStats = await axios
//       .get('https://pokeapi.co/api/v2/pokemon/')
//       .then((res) => res.data.results)
//       .then((data) => {
//         data.map((pokeStates) => {
//           getStats(pokeStates);
//         });
//         return data;
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }
// const getMainContainer = document.querySelector('#mainContainer');

// const getStats = async (charStats) => {
//   try {
//     const inStats = await axios
//       .get(charStats.url)
//       .then((res) => res.data)
//       .then((data) => {
//         console.log();

//         const card = document.createElement('div');
//         card.className = 'card';

//         const frontShiny = data.sprites.front_shiny;
//         const img = document.createElement('img');
//         img.className = card - img - top;
//         img.src = frontShiny;
//         card.append(img);

//         //card-body
//         const cardBody = document.createElement('div');

//         cardBody.className = 'card-body';

//         //h5
//         const h5E1 = document.createElement('h5');
//         h5E1.className = 'card-title';
//         h5E1.textContent = charStats.name;
//         cardBody.append(h5E1);

//         //P element
//         const pE1 = document.createElement('p');
//         pE1.className = 'card-text';

//         pE1.textContent= data.types.map(type =>{
//            console.log(type.type.name)
//            return '  ' + type.type.name

//         })

//         cardBody.append(pE1);
//         card.append(cardBody);
//         getMainContainer.append(card);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
// // https://pokeapi.co/api/v2/pokemon/

const form = document.querySelector('form');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const hp = document.querySelector('.hp');
const attack = document.querySelector('.attack');
const defence = document.querySelector('.defence');
const spAttack = document.querySelector('.sp-attack');
const spDefence = document.querySelector('.sp-defence');
const speed = document.querySelector('.speed');
const ability1 = document.querySelector('.ability1');
const ability2 = document.querySelector('.ability2');

const main = document.querySelector('main');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  (async function () {
    try {
      const inputValue = input.value.toLowerCase().trim();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      const data = await response.json();
      console.log(data);

      if(!input.value){
        main.style.display = 'none'
        alert('There is no Input')
        throw new Error('Please enter some Value')
      }
      h1.textContent = data.name.toUpperCase();

      main.style.display = 'block';

      img.src = data.sprites.front_default;

      hp.textContent = data.stats[0].base_stat;

      attack.textContent = data.stats[1].base_stat;

      defence.textContent = data.stats[2].base_stat;

      spAttack.textContent = data.stats[3].base_stat;

      spDefence.textContent = data.stats[4].base_stat;

      speed.textContent = data.stats[5].base_stat;

      ability1.textContent = data.abilities[0].ability.name;

      ability2.textContent = data.abilities[1].ability.name;
    } catch (error) {
      console.log(`This is the Error`, error.massage);
    }

    input.value = '';
  })();
});
/////////////////// SECOND WAY
// form.addEventListener("submit", submitHandle);
// async function submitHandle () {
// try {
//     const response = await fetch('')
// } catch (error) {
// }
// }
