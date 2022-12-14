/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



class Game {

    constructor() {
        //used to track the number of missed guesses by the player.
        this.missed = 0;
        //an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters
        this.phrases = [
            new Phrase("Make a wish"),
            new Phrase("Another one bites the dust"),
            new Phrase("Viva los vegas"),
            new Phrase("dont worry be happy"),
            new Phrase("break a leg"),
        ];
        //This is the Phrase object that’s currently in play.
        this.activePhrase = null;
    }

    //Commence the game
    startGame() {
        document.querySelector("#overlay").style.display = "none"
        this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay(this.activePhrase);
    }

    //automatically picks out a random phrase
    getRandomPhrase() {
        //randomly calls on
        const len = this.phrases.length;
        const randNum = Math.floor(Math.random() * len);
        return this.phrases[randNum];
    }
    //checks for wins
    handleInteraction(letterObj) {
        letterObj.disabled = true;
        if (this.activePhrase.checkLetter(letterObj.innerText)) {
            letterObj.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letterObj.innerText)
            if (this.checkForWin()) {
                this.gameOver()
            }
        } else {
            letterObj.classList.add("wrong");
            this.removeLife();
        }
    }
    //moderates the css hearts and the missed counter property
    removeLife() {
        const hearts = document.querySelector("#scoreboard ol").children;
        const lives = hearts.length
        this.missed += 1;

        if (this.missed < lives) {
            hearts[this.missed - 1].firstChild.src = "images/lostHeart.png"
        } else {
            hearts[this.missed - 1].firstChild.src = "images/lostHeart.png"
            this.gameOver();
        }
    }

    //counts the number of hidden li's to determine if player won
    checkForWin() {
        const countOfHide = document.querySelectorAll(".letter.hide").length;
        return (countOfHide === 0) && (this.missed < 5)
    }

    //overlay, condiitonal message of win or lose, will reset the game
    gameOver() {
        document.querySelector("#overlay").style.display = "block"
        let win_Loser = document.querySelector("#game-over-message")
        document.querySelector("#overlay").classList.remove = "start"

        if (this.checkForWin()) {
            win_Loser.innerHTML = "WINNNER!"
            document.querySelector("#overlay").classList.add = "win"
        } else {
            win_Loser.innerHTML = "LOSER!"
            document.querySelector("#overlay").classList.add = "lose"
        }

        this.reset();


    }
    //resets the keys, phrase to display , missed prop and  hearts variable
    reset() {
        //clear all the css adjustment for keys
        const allKeys = Array.from(document.querySelectorAll(".key"))

        allKeys.forEach(ele => {
                ele.disabled = false;
                ele.classList.contains("wrong") && ele.classList.remove("wrong")
                ele.classList.contains("chosen") && ele.classList.remove("chosen")
            }
        )

        // reset missed prop
        this.missed = 0;

        //reset the hearts
        const imgs = Array.from(document.querySelectorAll("#scoreboard ol img"))
        imgs.forEach(x => {
            x.src = "images/liveHeart.png"
        })

        //reset phrase to display
        document.querySelector("#phrase ul").innerHTML= "";



    }




}

