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

// class Pokemon {
//       constructor(hp,name,attack,defense,abilities){
//           this.hp = hp;
//           this.name = name;
//           this.attack = attack;
//           this.defense = defense;
//           this.abilities = abilities;
//     }
//   }
//
//       let nidorino = new Pokemon();
//       let steelix = new Pokemon();
//       let totodile = new Pokemon();


function pokemonData(){uj8
axios.get('http://fizal.me/pokeapi/api/v2/name/nidorino.json')
    .then(function (response){
          let firstPoke = document.getElementById('firstPoke');
          firstPoke.innerHTML= response.data.name;

            console.log(response.data.name);
  })
}


axios.get('http://fizal.me/pokeapi/api/v2/name/steelix.json')
    .then(function (response){
          console.log(response.data);
  })

axios.get('http://fizal.me/pokeapi/api/v2/name/totodile.json')
    .then(function (response){
          console.log(response);
        })

pokemonData();
// function pokeobjects(){
//   let nidorino = new Pokemon();
//   pokemonName.innerHTML= nidorino.name;
// }
// }

// function putPokemon(response){
//     const pokemonData = response.data.products[index];
//     let pokemonObject = new Pokemon(pokemonData.images[0].src, productData.title);
//     productObject.renderProduct();0
//   }
// }
