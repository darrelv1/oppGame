/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    startGame(){
        this.activePharse  = getRandomPhrase();
        addPhraseToDisplay(activePhrase);
    }

    getRandomPhrase(){

        //randomly calls on
        const len = this.phrases.length;
        const randNum = Math.floor(Math.random()*len);
        return this.phrases[randNum];
    }

    addPhraseToDisplay(){

    }

    handleInteraction(){


    }
}