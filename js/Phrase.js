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


    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    showMatchedLetter(letter){
        //Collection of nodes which match the correct letter
        const charsCollection = Array.from(document.querySelectorAll(`.${letter}`))

       charsCollection.forEach( char => {
               char.classList.remove("hide");
               char.classList.add("show");

       })

    }
}


export {Phrase}