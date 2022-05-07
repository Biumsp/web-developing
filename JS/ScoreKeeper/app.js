const gameEnded = function () {

    button1.disabled = true;
    button2.disabled = true;

    // set class of span to "winner"
    if (score1 > score2) {
        score1Span.classList.add("winner");
        score2Span.classList.add("loser");
    } else {
        score2Span.classList.add("winner");
        score1Span.classList.add("loser");
    }
}


let score1 = 0;
let score2 = 0;

const maxScoreInput = document.querySelector('input.max_score');
const maxScoreDisplay = document.querySelector('span#max_score');
maxScoreDisplay.innerHTML = maxScoreInput.value;

maxScoreInput.addEventListener("input", function () {
    maxScoreDisplay.innerHTML = maxScoreInput.value;
});

// get button elements
const button1 = document.querySelector("button.score_1");
const button2 = document.querySelector("button.score_2");
const buttonReset = document.querySelector("button#reset");

const score1Span = document.querySelector("span.score_1");
const score2Span = document.querySelector("span.score_2");

button1.addEventListener("click", function () {
    score1++;
    score1Span.textContent = score1;
    maxScoreInput.disabled = true;

    if (score1 === parseInt(maxScoreInput.value)) {
        gameEnded()
    }
});

button2.addEventListener("click", function () {
    score2++;
    score2Span.textContent = score2;
    maxScoreInput.disabled = true;

    if (score2 === parseInt(maxScoreInput.value)) {
        gameEnded()
    }
});

buttonReset.addEventListener("click", function () {
    score1 = 0;
    score2 = 0;
    score1Span.textContent = score1;
    score2Span.textContent = score2;
    maxScoreInput.disabled = false;
    score1Span.classList.remove("winner");
    score2Span.classList.remove("winner");
    score1Span.classList.remove("loser");
    score2Span.classList.remove("loser");
    button1.disabled = false;
    button2.disabled = false;
});



