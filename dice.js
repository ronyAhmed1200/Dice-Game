var player1Img = document.querySelector('.img1');
var player2Img = document.querySelector('.img2');
var header = document.querySelector('h1');
let randomImg1 = Math.floor(Math.random() * 6) + 1;
let randomImgSource1 = `images/dice${randomImg1}.png`;
let randomImg2 = Math.floor(Math.random() * 6) + 1;
let randomImgSource2 = `images/dice${randomImg2}.png`;

function diceGame() {
    player1Img.setAttribute('src', randomImgSource1);
    player2Img.setAttribute('src', randomImgSource2);

    if (randomImg1 > randomImg2) {
        header.innerHTML = 'Player 1 wins';
    } else if (randomImg1 === randomImg2) {
        header.innerHTML = 'Match is draw!';
    } else if (randomImg1 < randomImg2) {
        header.innerHTML = 'player 2 wins';
    }
}
diceGame();