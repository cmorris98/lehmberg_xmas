var currentQuestion = 0;
var numberQuestions = 4;

$(document).ready(function() {
    next();
});

function wrongAnswer() {
    alert("Wrong Answer");
}

function rightAnswer() {
    console.log("rightAnswer");
    next();
}

function displayQuestion() {
    var value = "question" + currentQuestion;
    console.log("displayQuestion: " + value);
    document.getElementById(value).hidden = false;
}

function hideAllQuestions() {
    document.getElementById("success").hidden = true;

    for (var i = 1; i <= numberQuestions; i++) {
        var value = "question" + i;
        console.log("hideAllQuestions: " + value);
        document.getElementById(value).hidden = true;
    }
}

function displaySuccess() {
    document.getElementById("success").hidden = false;
}

function next() {
    hideAllQuestions();
    currentQuestion++;

    if (currentQuestion > numberQuestions) {
        displaySuccess();
    } else {
        displayQuestion();
    }
}