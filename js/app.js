/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const startButton = document.querySelector("#btn__reset");
const keys = document.querySelector("#qwerty");
const game = new Game();

//commences the game
startButton.addEventListener("click", () => {
    game.startGame();
})

//Handles the guessing
keys.addEventListener("click", (e) => {
    if(e.target.nodeName === "BUTTON" ){
        game.handleInteraction(e.target)
    }
} )






