let game_header, game, game_rule, currentIndex = 0, question, select, selections, cA, cB, cC, correct = 0, correctMark = 0;

let Questions = [
    ["Who stoppped the killing of twins in Calabar?", "Mary Slessor", "Jane Woods", "Funmilayo Ransom-Kuti", "A"],
    ["Who designed the Nigerian flag?", "Taiwo Akinkunmi", "Kudi Abiola", "Bello Shaffi", "A"],
    ["What does the white color on the Nigerian flag stand for?", "Peace", "Love", "fertility", "A"],
    ["What is the premier university in Nigeria?", "University of Ibadan", "University of Lagos" , "University of Benin", "A"],
    ["When did Nigeria gain her independence?", "October 1st, 1960", "November 5th, 1965", "July 7th, 1980", "A"],
];

function displayQuestion(){
    game = document.getElementById("game");
    marks = document.getElementById("marks");

    if(currentIndex >= Questions.length){
        game.innerHTML = "<h3> "+correct+" out of "+Questions.length+" questions were answered correctly</h3><br/>";

        marks.innerHTML = "<h3>Total score is: "+correctMark+" </h3>";

        document.getElementById("game_header").innerHTML = "<ins>Thank you for playing!</ins>";
        document.getElementById("game_rule").style.display = "none";

        currentIndex = 0;
        correct = 0;
        correctMark = 0;

        return false;
}

       document.getElementById("game_header").innerHTML = ""+(currentIndex + 1)+"";
       document.getElementById("game_rule").innerHTML = "Instructions: Choose only one option in each question once";
       question = Questions[currentIndex][0];
       cA = Questions[currentIndex][1];
       cB = Questions[currentIndex][2];
       cC = Questions[currentIndex][3];

       document.getElementById("game").innerHTML = "<h2>"+question+"</h2>";

       game.innerHTML += "<input onclick='checkResult()' type='radio' name='options' value='A' id='charA'> <label for='cA'>" + cA + "</label><br>";
       game.innerHTML += "<input onclick='checkResult()' type='radio' name='options' value='B' id='charB'> <label for='cB'>" + cB + "</label><br>";
       game.innerHTML += "<input onclick='checkResult()' type='radio' name='options' value='C' id='charC'> <label for='cC'>" + cC + "</label><br><br>";
       game.innerHTML += "<button onclick='nextResult()' disabled='disabled' id='choiceNext'>Next</button>";
}

function checkResult() {
    choiceClicked = true;
    $("#choiceNext").removeAttr("disabled");
    $("#game label").css("background-color", "transparent");
    if ($("#game input:checked").val() ==Questions[currentIndex][4]) {
        $("#game input:checked+label").css("background-color", "green");
        $("#game input:checked+label").css("color", "white");
        correct++;
        correctMark+=3;
    }
    else {
        $("#game input:checked+label").css("background-color", "red");
        $("#game input:checked+label").css("color", "white"); 
        $("#game input:radio[id=charA]+label").css("background-color", "green");
        $("#game input:radio[id=charA]+label").css("color", "white");                           
    }
}

function nextResult(){
   setTimeout(function () {
       currentIndex++;
       displayQuestion();
    }, 800);
}
$("document").ready(function () {
    displayQuestion();
});

