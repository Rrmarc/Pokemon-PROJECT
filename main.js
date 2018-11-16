let pokeBallClick= document.getElementById('pokeball');
let mainPokeballImg= document.getElementsByClassName('mainPokeball')[0];

function firstChange(){
   if(mainPokeballImg.style.display=== 'none'){
     mainPokeballImg.style.display='block';
     console.log('show');
   } else{
     mainPokeballImg.style.display = 'none';
     console.log('hidde');
   }
}

pokeBallClick.addEventListener('click', firstChange );
  // end of first click event

    // conecting API

    // let nidorino = axios.get('http://fizal.me/pokeapi/api/v2/name/nidorino.json')
    //   .then(function (response){
    //         console.log(response.data);
    // })
    //
    // let steelix = axios.get('http://fizal.me/pokeapi/api/v2/name/steelix.json')
    //   .then(function (response){
    //         console.log(response.data);
    // })
    //
    // let totodile = axios.get('http://fizal.me/pokeapi/api/v2/name/totodile.json')
    //   .then(function (response){
    //         console.log(response.data);
    // })



      // objects to select pokemons from Pokemon API

    //   class Pokemon {
    //       constructor(hp,) {
    //       this.hp=hp;
    //       this.name= name;
    //       this.stats= stats;
    //       this.ability= ability;
    //       this.element= document.createElement('div');
    //       this.element.className ='pokemonInfo';
    //     }
    //   }
    // let nidorino = new Pokemon()
    //   render(){
    //       let pokemonName = document.createElement('h3');
    //       pokemonName.innerHTML = bubla.name;
    //       this.element.appendChild(pokemonName);
    //   }

class Pokemon {
      constructor(hp,name,attack,defense,abilities){
          this.hp = hp;
          this.name = name;
          this.attack = attack;
          this.defense = defense;
          this.abilities = abilities;
    }
  }

      let nidorino = new Pokemon();
      let steelix = new Pokemon();
      let totodile = new Pokemon();

function getPokemonData(){

axios.get('http://fizal.me/pokeapi/api/v2/name/nidorino.json')
    .then(function (response){
          pokemonName.innerHTML = response.data.name;
          pokemonName.src = "firstPokemon_033_nidorino.jpg";
          console.log(response.data.name,response.data.abilities,response.data.);
  })

axios.get('http://fizal.me/pokeapi/api/v2/name/steelix.json')
    .then(function (response){
          console.log(response.data);
  })

axios.get('http://fizal.me/pokeapi/api/v2/name/totodile.json')
    .then(function (response){
          console.log(response.data);
        })


function pokeobjects(){
  let nidorino = new Pokemon();
  pokemonName.innerHTML= nidorino.name;
}
}


// function putPokemon(response){
//     const pokemonData = response.data.products[index];
//     let pokemonObject = new Pokemon(pokemonData.images[0].src, productData.title);
//     productObject.renderProduct();
//
//   }
// }
