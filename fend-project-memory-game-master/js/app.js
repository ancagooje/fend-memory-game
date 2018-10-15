/*
 * Create a list that holds all of your cards
/* inspired by Mike Wales webinar at https://www.youtube.com/watch?v=_rUH-sEs68Y */
const deck = document.querySelector('.deck');
let toggledCards = [];
let moves = 0;
let time = 0;
let clockId;
let clockOff = true;
let matched = 0;
 
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

	/** I read Matthew Cranford's tutorial on toggling cards:https://matthewcranford.com/memory-game-walkthrough-part-2-toggling-cards/ */
	deck.addEventListener('click', event => {
		const clickTarget = event.target;
		if (clockOff) {
			startClock();
			clockOff = false;
		}
		toggleCard(clickTarget);
		addToggleCard(clickTarget);
		
		
		if (toggledCards.length === 2){
			checkForMatch(clickTarget);
			addMove();
		    checkScore();					
	    }
		})
	
	

function toggleCard(card){
	card.classList.toggle('open');
	card.classList.toggle('show');
}

function addToggleCard(clickTarget){
	toggledCards.push(clickTarget);
	console.log(toggledCards);	
}

function isClickValid(clickTarget){
	return (
		clickTarget.classList.contains('card') &&
		!clickTarget.classList.contains('match') &&
		toggledCards.length < 2 &&
		!toggledCards.includes(clickTarget));
}	
	/** Function for checking the match of two open cards. 
	 * If the cards do not match, they flip back after 1 second. */
function checkForMatch(){
	if (
	    toggledCards[0].firstElementChild.className ===
		toggledCards[1].firstElementChild.className
	) {
		toggledCards[0].classList.toggle('match');
		toggledCards[1].classList.toggle('match');
		toggledCards = [];	
		matched++;		
		console.log('Match!');
		if (matched === 8) {
			checkWin();
		}
	}else{
	  setTimeout(()=>{
		toggleCard(toggledCards[0]);
		toggleCard(toggledCards[1]);
		toggledCards=[];
		}, 1000);		
		
}
}
function shuffleDeck() {
	const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
	const shuffledCards = shuffle(cardsToShuffle);
	for (card of shuffledCards) {
		deck.appendChild(card);
	}
}
/**  Function for adding moves for each two cards clicked.
 * I consulted Matthew Cranford's tutorial on moves and stars: https://matthewcranford.com/memory-game-walkthrough-part-5-moves-stars/
 */
function addMove(){
	moves++;
	const movesText = document.querySelector('.moves');
	movesText.innerHTML = moves;
}

/** This function checks the score. */
function checkScore() {
	if(moves===14 || moves===23) { hideStar();
	}
}
 /** This function hides stars after certain number of moves: removes 1 star after 14 moves and 
  * second star after 23 moves.
  * I was inspired by Matthew Cranford's approach 
  * in removing stars through a "hiding" function through a .style property
  * https://matthewcranford.com/memory-game-walkthrough-part-5-moves-stars/ */
function hideStar(){
	const starList = document.querySelectorAll('.stars li');
	for (star of starList) {
		if (star.style.display !='none'){
			star.style.display = 'none';
			break;
		}
	}
}

function getStars() {
    stars = document.querySelectorAll('.stars li');
    starCount = 0;
    for (star of stars) {
        if (star.style.display != 'none') {
            starCount++;
        }
    }
console.log(starCount);
return starCount;
}
 
 /** i read this article on timing events with setInterval() https://www.w3schools.com/js/js_timing.asp */
function startClock() {
	clockId = setInterval(() => {
	time++;
	displayTime();
}, 1000);
}

function displayTime() {
const clock = document.querySelector('.clock');
const minutes = Math.floor(time / 60);
const seconds = time % 60;
if (seconds < 10) {
	clock.innerHTML = `${minutes}:0${seconds}`;
} else {
	clock.innerHTML = `${minutes}:${seconds}`;
}
}

function stopClock() {
clearInterval(clockId);
}
/** The modal for displaying the congratulations message at the end of the game */
function toggleModal(){
	const modal = document.querySelector('.modal_background');
	modal.classList.toggle('hide');
}

function writeModalStats() {
    const timeStat = document.querySelector('.modal_time');
    const clockTime = document.querySelector('.clock').innerHTML;
    const movesStat = document.querySelector('.modal_moves');
    const starsStat = document.querySelector('.modal_stars');
    const stars = getStars();
  
    timeStat.innerHTML = `Time = ${clockTime}`;
    movesStat.innerHTML = `Moves = ${moves}`;
    starsStat.innerHTML = `Stars = ${stars}`;
}
document.querySelector('.modal__cancel').addEventListener('click', toggleModal);
document.querySelector('.modal__replay').addEventListener('click', replayGame);
document.querySelector('.modal__replay').addEventListener('click', resetGame);
document.querySelector('.restart').addEventListener('click', resetGame);

function resetGame() {
	resetClockAndTime();
	resetMoves();
	resetStars();
	resetCards();
	shuffleDeck();
}

function replayGame() {
	matched = 0;
	resetGame();
	toggleModal();
	resetCards();
	resetStars();
}

/** Function for resetting the cards when resetting the game */
function resetCards() {
	const cards = document.querySelectorAll('.deck li');
	for (let card of cards) {
		card.className = 'card';
	}
}

/** Function for resetting the timer */
function resetClockAndTime() {
	stopClock();
	clockOff = true;
	time = 0;
	displayTime();
}

/** Function for resetting the number of moves */
function resetMoves() {
	moves = 0;
	document.querySelector('.moves').innerHTML = moves;
}

/** Function for resetting the number of stars */
function resetStars() {
	stars = 0;
	const starList = document.querySelectorAll('.stars li');
	for (star of starList) {
		star.style.display = 'inline';
	}
}

function checkWin() {
        gameOver();
};

function gameOver() {
	stopClock();
	writeModalStats();
	toggleModal();
}

shuffleDeck();
writeModalStats();
checkWin();		
	
