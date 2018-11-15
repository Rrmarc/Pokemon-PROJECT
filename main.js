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

axios.get('http://fizal.me/pokeapi/api/v2/name/pikachu.json')

  .then(function (response){

console.log(response.data);
})
  // .then(newfunc);
  // function firstPokeFucntion(response) {
  //   // handle success
  //   console.log(response.data);
  // }
