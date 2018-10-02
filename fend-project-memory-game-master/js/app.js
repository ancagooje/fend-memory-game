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
 

match = 0;
moves = 0;
  
function toggleCard(card) {
    card.classList.toggle('open');
    card.classList.toggle('show');

}

function addToggleCard(clickTarget) {
    toggledCards.push(clickTarget);
    console.log(toggledCards);
}

 
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

/** I watched Yahya's tutorial, especially the part on matching cards, at : https://www.youtube.com/watch?v=G8J13lmApkQ  Used it as general inspiration.*/
/** 
for(let i =0; i < cards.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class= "${icons[i]}">`;
    cardsContainer.appendChild(card);

}
*/

deck.addEventListener('click', event => {
    const clickTarget = event.target;
    if (clickTarget.classList.contains('card') && toggledCards.length < 2) {
        toggleCard(clickTarget);
        addToggleCard(clickTarget);
        if (toggledCards.length === 2) {
            console.log('2 cards!');
        }
    }
}); 

/** I read Matthew Cranford's tutorial on matching cards. https://matthewcranford.com/memory-game-walkthrough-part-3-matching-pairs/   */
function checkForMatch() {
    if (toggledCards[0].firstElementChild.className===
       toggledCards[1].firstElementChild.className)
       {
           console.log('Match!');
           toggledCards[0].classList.toggle('Match!');
           toggledCards[1].classList.toggle('Match!');
           toggledCards = [];
       } else {
           console.log('not a match!');
          setTimeout(() => {
          toggledCards(toggleCards[0]);
          toggleCards(toggleCards[1]);
           toggledCards = [];
       }, 900);
    }}

    if (toggledCards.length === 2) {
        checkForMatch(clickTarget);}


//open only 2 cards at a time. after less than a second, flip cards back if not matched
let allCards = document.querySelectorAll('.card');
let toggledCards =[];
 //add click Event
allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {        
card.classList.add('open', 'show');
openCards.push(this);
console.log('Open Cards:', openCards.length);
    })
})


/**  Function for adding moves*/
function addMove() {
    moves++;
    const movesText = document.querySelector('.moves');
    movesText.innerHTML = moves;
}

/** Function to check the score.  */
if (moves === 16 || moves === 24)
{ removeStar ();
}
    }
     function removeStar() {
         const starList = document.querySelectorAll('.stars li');
         for (star of starList) {
             star.style.display = 'none';
             break;

         }
     }
removeStar();
removeStar();

/** I read Matthew Cranford's tutorial on matching cards.  */
function checkForMatch() {
    if (openCards[0].firstElementChild.className===
       openCards[1].firstElementChild.className)
       {
           openCards[0].classList.open('Match!');
           openCards[1].classList.open('Match!');
       } else {
          setTimeout(() => {
          openCards(openCards[0]);
          openCards(openCards[1]);
           openCards = [];
       }, 800);
    }}
