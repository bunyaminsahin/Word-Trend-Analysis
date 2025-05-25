const textareaE1 = document.querySelector(".textarea");
const charactersNumberE1 = document.querySelector(".stat__number--characters");
const xNumberE1 = document.querySelector(".stat__number--x");
const facebookNumberE1 = document.querySelector(".stat__number--facebook");
const wordsNumberE1 = document.querySelector(".stat__number--words");

const inputHandler = () => {
    if (textareaE1.value.includes("<script>")) {
        alert("You can't use <script> in your text.");
        textareaE1.value = textareaE1. value.replace("<script>", "");
    }

    let numberOfWords = textareaE1.value.split(" ").length;

    if (textareaE1.value.length === 0) {
        numberOfWords = 0;
    }
    const numberOfCharacters = textareaE1.value.length;
    const xCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;

    if (xCharactersLeft < 0) {
        xNumberE1.classList.add("stat__number--limit");
    } else {
        xNumberE1.classList.remove("stat__number--limit");
    }

    if (facebookCharactersLeft < 0 ) {
        facebookNumberE1.classList.add("stat__number--limit");
    } else {
        facebookNumberE1.classList.remove("stat__number--limit");
    }

    wordsNumberE1.textContent = numberOfWords;
    charactersNumberE1.textContent = numberOfCharacters;
    xNumberE1.textContent = xCharactersLeft; 
    facebookNumberE1.textContent = facebookCharactersLeft;

};

textareaE1.addEventListener("input", inputHandler);