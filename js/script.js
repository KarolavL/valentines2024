const noBtn = document.querySelector(".no-btn")
const yesBtn = document.querySelector(".yes-btn")


const noAnswers = ["Na pewno?", "Czy aby na pewno, na pewno?", "Jesteś tego tak na pewno pewna?", "Na 100%?", "Na 102%?", "No nie daj się prosić", "Ja bym kliknął Tak", "Co Ty robisz???", "No klikaj te TAK", "<---- TAAAAK JEST TUTAJ", "JAK TO NIEE", "No nie wyczymie"]

let answerIndex = 0;

const changeButtons = () => {
    let fontSize = parseFloat(getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (fontSize + 15) + "px";
};

const changeNoText = () => {
    noBtn.textContent = noAnswers[answerIndex];
    answerIndex = (answerIndex + 1) % noAnswers.length;
};

noBtn.addEventListener('click', () => {
    changeButtons();
    changeNoText();
});