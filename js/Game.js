/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

import {Phrase} from "./Phrase.js";

class Game {

    constructor() {
        //used to track the number of missed guesses by the player.
        this.missed = 0;
        //an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters
        this.phrases = [
            new Phrase("I like putting"),
            new Phrase("I dont like people"),
            new Phrase("Me gustas tu"),
            new Phrase("make it simple stupid"),
        ];
        //This is the Phrase object that’s currently in play.
        this.activePhrase = null;
    }

    startGame(){
        document.querySelector("#overlay").style.display = "none"
        this.activePhrase  = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
    }

    getRandomPhrase(){

        //randomly calls on
        const len = this.phrases.length;
        const randNum = Math.floor(Math.random()*len);
        return this.phrases[randNum];
    }




    handleInteraction(){

    }




}

const DarrelGame = new Game()
DarrelGame.startGame()

export {Game}