const lev = document.querySelectorAll('.level__choice');
const game = document.querySelectorAll('.button');
const games = document.querySelectorAll('.game__one');
const container = document.querySelector('.game');
let gameTable = document.querySelectorAll('.game_cards');
let numberCards = 3;



lev.forEach(function(element) {
    element.classList.remove('level__choice-romb');
    element.addEventListener("click", function(){
      lev.forEach(function(element){
            element.classList.remove('level__choice-romb')  
                  })
        element.classList.add('level__choice-romb');
      let levelName = document.querySelector(".level__choice-romb").getAttribute("id");
      switch (levelName) {
        case 'easy':
          numberCards = 3;
         break;
    
        case 'medium':
          numberCards = 6;
        break;
  
         case 'hard':
          numberCards = 10;
        break;
       }
    })  
});

function random() {
	return Math.round(Math.random());
}

createCard = () => {
   let newCards = document.createElement('div');
   newCards.classList = 'card_back card';
   container.append(newCards); 
   switch (numberCards) {
       case 10:
            container.classList.toggle("level-hard");
           break;
    }
   newCards.addEventListener("click", function() {
      random () ===0 ? newCards.classList.add('card_front') : newCards.classList.add('card_bag')
   		newCards.classList.remove('card_back');
   		let block = document.createElement('div');
   		block.classList = 'block';
   		document.body.append(block);
   		block.addEventListener("click", () => {
   			games[0].classList.remove('field');
   			container.classList.remove('level-hard');
   			// container.classList.add('field');
   			block.remove();
   			let cards = document.querySelectorAll('.card');
   			cards.forEach(el => el.remove())
   		})
   });
 }

game.forEach(function(event) {
  event.classList.remove('field');
  event.addEventListener("click", function() {
  	  container.classList.remove('field');
      games.forEach(function (event) {
      event.classList.add('field');
    })

    for (let i = 0; i < numberCards; i++ ) {
       createCard()
      }
    })
  });
