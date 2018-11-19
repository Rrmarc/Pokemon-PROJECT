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








class Pokemon {
      constructor(name,hp,attack,defense){
            this.name = name
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            // this.conatiner = document.getElementById();
            this.element = document.createElement('ul');
            this.container = appendChild(this.element);
            this.element.className = 'pokecard' ;
    }
  }



  axios.get('http://fizal.me/pokeapi/api/v2/name/nidorino.json')
      .then(pokeInfo){
              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;


  }

            function pokeInfo(){
                    let pokeName = document.createElement('li');
                    pokemonName.innerHTML = this.name ;
                    this.element.appendChild('pokeName');

                    let pokeHp = document.createElement('li');
                    pokeHp.innerHTML= this.attack;
                    this.element.appendChild('pokeHp');

                    let pokeAttack = document.createElement('li');
                    pokeAttack.innerHTML= this.attack;
                    this.element.appendChild('pokeAttack');

                    let pokeDefense =  document.createElement('li');
                    pokeDefense .innerHTML= this.attack;
                    this.element.appendChild('pokeDefense ');
            }


function pokemonData(){
axios.get('http://fizal.me/pokeapi/api/v2/name/nidorino.json')
    .then(function (response){
            let name = response.data.name;
            let hp = response.data.stats[5].base_stat;
            let attack = response.data.stats[4].base_stat;
            let defense = response.data.stats[3].base_stat;

                  console.log(name, hp, attack, defense);
                              console.log(response.data);

                  let = new Pokemon(name,hp,attack,defense);

if(let i= 0; i<hp.length; 1++){
  console.log(h);
}

  })
}


axios.get('http://fizal.me/pokeapi/api/v2/name/steelix.json')
    .then(function (response){
      let name = response.data.name;
      let hp = response.data.stats[5].base_stat;
      let attack = response.data.stats[4].base_stat;
      let defense = response.data.stats[3].base_stat;

            console.log(name, hp, attack, defense);

  })

axios.get('http://fizal.me/pokeapi/api/v2/name/totodile.json')
    .then(function (response){
      let name = response.data.name;
      let hp = response.data.stats[5].base_stat;
      let attack = response.data.stats[4].base_stat;
      let defense = response.data.stats[3].base_stat;

            console.log(name, hp, attack, defense);
        })




pokemonData();
