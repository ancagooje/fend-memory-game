/*
 * Create a list that holds all of your cards
/* inspired by Mike Wales webinar at https://www.youtube.com/watch?v=_rUH-sEs68Y */
function initGame() {
    var deck = document.querySelector('.deck');
    var cardHTML = shuffle(cards).map(function(card) {
    return generateCard(card);
});
cardHTML .join('');
}

 let cards = ['heart', 'heart', 'leaf', 'leaf', 'circle', 'circle', 'anchor', 'anchor', 'plane', 'plane', 'car', 'car', 'star', 'star', 'diamond', 'diamond'],
/** const cards = document.querySelectorAll('.deck-card');
console.log(cards); */


/** 
function generateCard(card) {
    return '<li class="card" data-card= "${card}"><i class= "fa $(card)"></i></li>';
}
*/
match = 0;
moves = 0;
 /**function card.open() {
console.log('I was clicked!');
console.log(this);
 } */


 
	/**cards.forEAch(card => card.addEventListener('click',deck.card.open )) 
		console.log("hello, I-m a card!"); */
	
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/** I watched Yahya's tutorial, especially the part on matching cards, at : https://www.youtube.com/watch?v=G8J13lmApkQ */
let icons =[];
for(let i =0; i < icons.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class= "${icons[i]}">`;
    cardsContainer.appendChild(card);

}

//open only 2 cards at a time. after less than a second, flip cards back if not matched
var allCards = document.querySelectorAll('.card');
var openCards =[];
 //add click Event
allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {        
card.classList.add('open', 'show');
openCards.push(this);
console.log('Open Cards:', openCards.length);

  
 if (openCards.length === 2) {
     if (openCards[0]. dataset.card === openCards[1].dataset.card) {
         openCards[0].classList.add('match');
         openCards[0].classList.add('open');
         openCards[0].classList.add('show');

         openCards[0].classList.add('match');
         openCards[0].classList.add('open');
         openCards[0].classList.add('show');
     }


/** If there is no match, hide the cards */
    setTimeout(function() {
openCards.forEach(function(card) {
    card.classList.remove('open', 'show');
});
openCards = [];
  }, 600); 
}
});
});