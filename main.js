let pokeBallClick= document.getElementById("ball1");
let steelixInfo = document.getElementById("steelix");

function firstChange(){
   if(pokeBallClick.src === 'steelix.png'){
     pokeBallClick.src= 'pokeball_.png';
     steelixInfo.className = 'infoDiv';
     console.log('show');
   } else{
     pokeBallClick.src= 'steelix.png';
     steelixInfo.className = 'info';
     console.log('hidde');

   }
}

pokeBallClick.addEventListener('click', firstChange );



let pokeBallClick2= document.getElementById("ball2");
let nidorinoInfo = document.getElementById("nidorino");

function secondChange(){
   if(pokeBallClick2.src === 'firstPokemon_033_nidorino.png'){
     pokeBallClick2.src= 'pokeball_.png';
     nidorinoInfo.className = 'infoDiv';
     console.log('show');
   } else{
     pokeBallClick2.src= 'firstPokemon_033_nidorino.png';
     nidorinoInfo.className = 'info';
     console.log('hidde');
   }
}

pokeBallClick2.addEventListener('click', secondChange );


let pokeBallClick3= document.getElementById("ball3");
let totodileInfo = document.getElementById("totodile");

function thirdChange (){
   if(pokeBallClick3.src === 'totodile.png'){
     pokeBallClick3.src = 'pokeball.png';
     totodileInfo.className = 'infoDiv';
     console.log('show');
   } else{
     pokeBallClick3.src= 'totodile.png';
     totodileInfo.className = 'info';
     console.log('hidde');
   }
}

pokeBallClick3.addEventListener('click', thirdChange );

////////////////////////////////////////////////////////////////

// let steelixInfo = document.getElementsByClassName("steelixInfo");
//
// function showPokeInfo(){
//       if (steelixInfo.style.display === 'none'){
//         // steelixInfo.style.display = '';
//         steelixInfo.className = 'infoDiv';
//       } else{
//         // showInfo.style.display = 'none';
//         steelixInfo.className = 'steelixInfo';
//       }
// }
//
// steelixInfo.addEventListener('click', showPokeInfo);



////////////////////////////////////////////////////////////////////

// let pokeBallClick4= document.getElementById("ball3");
//
// function thirdChange (){
//    if(pokeBallClick3.src === 'totodile.png'){
//      pokeBallClick3.src= 'pokeball.png';
//      console.log('show');
//    } else{
//      pokeBallClick3.src= 'totodile.png';
//      console.log('hidde');
//    }
// }
//
// pokeBallClick3.addEventListener('click', thirdChange );
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Pokemon {
      constructor(name, hp, attack, defense, abilities, classtext){
              // this.pokephoto= pokephoto;
              this.name = name;
              this.hp = hp;
              this.attack = attack;
              this.defense = defense;
              this.abilities = abilities;
              this.classtext = classtext;
              // what div will be used to store data
              this.container= document.getElementById(name);
              // how I want the information to display onto the page
              this.element = document.createElement("ul");
              this.element.className = ("rashellHell");
    }

    display(){
      console.log("displaying " + this.name);

      let pokemonName = document.createElement('h3');
          pokemonName.innerHTML = this.name;
          this.element.appendChild(pokemonName);
          this.container.appendChild(this.element);
          this.element.className = this.classtext;

      let pokeHp = document.createElement('li');
          pokeHp.innerHTML= "HP: " + this.attack;
          this.element.appendChild(pokeHp);
          this.container.appendChild(this.element);

      let pokemonAttack = document.createElement('li');
          pokemonAttack.innerHTML ="Attack: " + this.attack;
          this.element.appendChild(pokemonAttack);
          this.container.appendChild(this.element);

      let pokemonDefense = document.createElement('li');
          pokemonDefense.innerHTML = "Defense: " + this.defense;
          this.element.appendChild(pokemonDefense);
          this.container.appendChild(this.element);

      let pokemonAbilities = document.createElement('li');
          pokemonAbilities.innerHTML = "Abilities: " + this.abilities;
          this.element.appendChild(pokemonAbilities);
          this.container.appendChild(this.element);


    }

  }




// making the API calls for the pokemon information
axios.get('http://fizal.me/pokeapi/api/v2/name/nidorino.json')
      .then(function (response){
              // let pokephoto ="firstPokemon_033_nidorino.png";
              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities= [];
                for ( let i=0; i<response.data.abilities.length; i++){
                  abilities.push(response.data.abilities[i].ability.name);
                  console.log(response.data.abilities[i]);
                }






              let nidorino = new Pokemon( name, hp, attack, defense, abilities, "ok");
              nidorino.display();
              console.log(name, hp, attack, defense);


              RashellHell.poke.push(nidorino);
            })

axios.get('http://fizal.me/pokeapi/api/v2/name/steelix.json')
    .then(function (response){
              // let pokephoto ="steelix.png";
              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities= [];
                for ( let i=0; i<response.data.abilities.length; i++){
                  abilities.push(response.data.abilities[i].ability.name);
                  console.log(response.data.abilities[i]);
                }

                let steelix = new Pokemon( name, hp, attack, defense, abilities, "ok");

                steelix.display();

                  RashellHell.poke.push(steelix);

              console.log(name, hp, attack, defense);
  })

axios.get('http://fizal.me/pokeapi/api/v2/name/totodile.json')
    .then(function (response){

              let name = response.data.name;
              let hp = response.data.stats[5].base_stat;
              let attack = response.data.stats[4].base_stat;
              let defense = response.data.stats[3].base_stat;
              let abilities= [];
                for ( let i=0; i<response.data.abilities.length; i++){
                  abilities.push(response.data.abilities[i].ability.name);
                  console.log(response.data.abilities[i]);
                }

                let totodile = new Pokemon(name, hp, attack, defense, abilities, "ok");
                totodile.display();

                  RashellHell.poke.push(totodile);

              console.log(name, hp, attack, defense);
    })



    class Trainer{
      constructor(name, height, adress, classtext){
        this.name = name;
        this.height = height;
        this.adress = adress;
        this.classtext= classtext;
        this.container = document.getElementById("trainer");
        this.element = document.createElement("ol");
        this.container.appendChild(this.element);
        this.list1 = document.createElement('h1');
        this.list2 = document.createElement('li');
        this.list3 =document.createElement('li');
        this.poke = [];

    }

    all(){
        return this.poke;
    }

    get(name){
      for(let r=0; r < this.poke.length; r++){
          if(name === this.poke[r].name){
            return this.poke[r];4
          }
      }
    }

    execute(){
      let name= this.name;
      this.element.appendChild(this.list1);
      let breaker1 = this.list1;
      breaker1.innerHTML = this.name;

       let height=this.height;
       this.element.appendChild(this.list2);
       let breaker2 = this.list2;
       breaker2.innerHTML = this.height;

      let adress= this.adress;
      this.element.appendChild(this.list3);
      let breaker3 = this.list3;
      breaker3.innerHTML = this.adress;

      let classtext= this.classtext;
      this.element.className =  classtext;

    }
  }

            let name;
            let height;
            let adress;
            let classtext;
            let breaker1;
            let breaker2;
            let breaker3;

        let RashellHell= new Trainer("RashellHell", "5'5''", "123 Seasme Street NY", "ok" );


RashellHell.execute();

////////////////////////////////////////////////////////////////

// class MoreInfo{
//     constructor(name, priority, power, accuracy, classtext){
//       this.name= name;
//       this.priority= priority;
//       this.power= power;
//       this.accuracy= accuracy;
//       this.classtext = classtext;
//       this.container=getElementById(name);
//       this.element=document.createElement("div");
//
//         }
//
//         show(){
//               console.log(this.power);
//           let showname = document.createElement('h3');
//               showname.innerHTML = this.name;
//               this.element.appendChild(showname);
//               this.container.appendChild(this.element);
//               this.element.className = this.classtext;
//
//           let showpriority = document.createElement('p');
//               priority.innerHTML =  this.priority;
//               this.element.appendChild(priority);
//               this.container.appendChild(this.element);
//               this.element.className = this.classtext;
//
//           let showpower = document.createElement('p');
//             showpower.innerHTML =  this.power;
//             this.element.appendChild(showpower);
//             this.container.appendChild(this.element);
//             this.element.className = this.classtext;
//
//
//           let showaccuracy = document.createElement('p');
//             showaccuracy.innerHTML =  this.accuracy;
//             this.element.appendChild(showaccuracy);
//             this.container.appendChild(this.element);
//             this.element.className = this.classtext;
//
//         }
//       }
