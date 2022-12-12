/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
import {letterValidator} from './Tools.js'


class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


   addPhraseToDisplay(chosenPhrase) {
        const listing = document.querySelector("#phrase ul")

       const phraseArray = chosenPhrase.phrase.split("")
       const result = phraseArray.reduce((listing, word) =>{
           return listing.concat("\n"+letterValidator(word))
           }, "");

        listing.innerHTML = result

    }



    // checkLetter() {
    //
    // }
    //
    // showMatchedLetter(){
    //
    // }
}
//testing
// const test = new Phrase("Hello World")
// test.addPhraseToDisplay()


export {Phrase}