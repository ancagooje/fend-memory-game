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
 

/** 
function generateCard(card) {
    return '<li class="card" data-card= "${card}"><i class= "fa $(card)"></i></li>';
}
*/
match = 0;
moves = 0;
  
 
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
deck.addEventListener('click', event => {
    const clickTarget = event.target;
    if (
        clickTarget.classList.contains('card') &&
        openCards.length < 2 &&
        openCards.includes(clickTarget)
    ) { }


//open only 2 cards at a time. after less than a second, flip cards back if not matched
let allCards = document.querySelectorAll('.card');
let openCards =[];
 //add click Event
allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {        
card.classList.add('open', 'show');
openCards.push(this);
console.log('Open Cards:', openCards.length);

/** I read Matthew Cranford's tutorial on matching cards. I am still getting an error regarding last line */
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
}
  if (openCards.length === 2) {
    checkForMatch(clickTarget);}
