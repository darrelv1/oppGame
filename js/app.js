/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

import {Phrase} from "./Phrase.js";
import {Game} from "./Game.js";

const startButton = document.querySelector("#btn__reset");
const keys = document.querySelector("#qwerty");
const game = new Game();

startButton.addEventListener("click", () => {
    game.startGame();
})

keys.addEventListener("click", (e) => {


    if(e.target.nodeName === "BUTTON" ){

        console.log(e.target)
        console.log("Click button")
        game.handleInteraction(e.target)

    }

} )






