
const REGEX_GAME = {

    spaceEXP : / /,
    lettersEXP : /\S/,
}


//differentiate between space and letter
const letterValidator = (character) => {
     if (REGEX_GAME.lettersEXP.test(character)) {
        return `<li class='hide letter ${character}'>${character}</li>`
     } else
         return `<li class='space'> </li>`
}

export {REGEX_GAME, letterValidator}