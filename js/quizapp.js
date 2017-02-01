
var currentQuestion;
var categoryID;
var score = 0 ;
var questionsSeen = 0;
var trueAnswer;
var currentCategoryID;


$(function(){


         categories = [{
             "name": "Statistics",
             "questions": [{
                 "questionText": "What is Probability",
                 "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
             }, {
                 "questionText": "What is chance",
                 "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
             }, {
                 "questionText": "What is the meaning?",
                "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
             }, {
                 "questionText": "sample question1",
                 "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
             }]

         },

             {
                 "name": "Machine Learning",
                 "questions": [{
                     "questionText": "sample question1",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]

                 }, {
                     "questionText": "sample question1",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }, {
                     "questionText": "sample question1",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }, {
                     "questionText": "sample question1",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }]
             },

             {
                 "name": "Math",
                 "questions": [{
                     "questionText": "What is 1 + 1",
                     "answers": ["2", "3", "10", "11"]
                 }, {
                     "questionText": "What 7 x 7 ",
                     "answers": ["49", "3", "21", "77"]
                 }, {
                     "questionText": "What is 100 - 9?",
                     "answers": ["81", "91", "70", "60"]
                 }, {
                     "questionText": "sample question1",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }]

             },

             {
                 "name": "Biology",
                 "questions": [{
                     "questionText": "What is Probability",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }, {
                     "questionText": "What is chance",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }, {
                     "questionText": "What is the meaning?",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }, {
                     "questionText": "sample question1",
                     "answers": ["correctanswer", "wronganswer1", "wronganswer2", "wronganswer3"]
                 }]

             },

    ];





    //id for the start menu and category menu
    var startMenu = document.getElementById('myModal');
    var categoryMenu = document.getElementById('categoryPicker');
    var categoryList = document.getElementsByClassName('categories');



    $(startMenu).modal('show').on("hidden", function () {
        displayCategory(categoryMenu, categoryList);
        showCategoryQuestion(categoryMenu);

   });






    $(".submitButton").click(function () {
        questionsSeen++;
        var answer =  $("input:radio[name=answerBTN]:checked").val();
        var sc = document.getElementsByClassName("score");
        console.log(trueAnswer);
        if( answer == trueAnswer){
            console.log("correct answer");
            score++;
        }

        console.log("deleting question");
        categories[categoryID].questions.splice(currentQuestion, 1);

        $(sc).text("Score: " + score + " out of " + questionsSeen);
        var answersList =  $(document).find(".UI > .answers");
        $(answersList).empty();



        getRandomQuestion(currentCategoryID);


    });


    $(".newCategory").click(function () {

        $(categoryMenu).modal('show');

    });



    $( ".endQuiz" ).click(function () {
        displayScore(score, questionsSeen);
    });

});



function displayCategory(categoryMenu, categoryList) {
    $(categoryMenu).modal('show');


    for (i = 0; i < categories.length; i++) {
        // choice = categories[categoryID].questions[currentQuestion].answers[i];
        choice = categories[i].name;
        $('<li><input type="radio" value=' + i + ' name="categoryBTN" />' + choice + '</li>').appendTo(categoryList);
    }
}


function  showCategoryQuestion(categoryMenu) {
    $(categoryMenu).on("hidden", function () {
        currentCategoryID = parseInt($("input:radio[name=categoryBTN]:checked").val());
        if(currentCategoryID < categories.length) {
            getRandomQuestion(currentCategoryID);
        }

    });
}


//Given a cateogory ID, this function displays a random question from that category
function getRandomQuestion(id){
    var answersList =  $(document).find(".UI > .answers");
    $(answersList).empty();
    // determine the number of questions in the current category
    var numQuestions = categories[id].questions.length;
    //if no questions left
    if(numQuestions == 0){
        //display the category menu
        var categoryMenu = document.getElementById('categoryPicker');
        $(categoryMenu).modal('show');
    }

    // create a random question id that is smaller than the number of questions
    var randomID = Math.floor((Math.random() * (numQuestions)));
    //set the categoryid and current question to the one were currently looking at
    categoryID =  id;
    currentQuestion = randomID;

    //sanity checks
    if(randomID < 0 || currentQuestion < 0){
        throw error;
    }
    //display the question
    displayQuestion(id, randomID);



}


//Give a categoryid and questionid, this function displays a question.
function displayQuestion(categoryID, currentQuestion ) {

    if(categoryID < 0 || currentQuestion < 0){
        throw error;

    }


    var num_category_questions =  $(document).find(".UI > .numCategoryQuestions");
    $(num_category_questions).text(categories[categoryID].questions.length + "/"  + categories[categoryID].questions.length +  " Questions Remaining ");




    //select the category name and add it the category section
    var category = categories[categoryID].name;
    var categoryClass = $(document).find(".UI > .category");
    //Throw error if category has no name



    $(categoryClass).text(category);

    //select the question text and add it question section
    var question =   categories[categoryID].questions[currentQuestion].questionText;
   // console.log(question);
    var questionClass = $(document).find(".UI > .questionText");
    $(questionClass).text(question);

    //determine the number of answers
    var numChoices = categories[categoryID].questions[currentQuestion].answers.length;
    var answersList =  $(document).find(".UI > .answers");


    var answerIndex = 0;
    var answersArray = categories[categoryID].questions[currentQuestion].answers;

    answersArray = shuffle(answersArray, answerIndex);



    //go through the possible number of answers and create a answer box
    var choice;
    for (i = 0; i < numChoices; i++) {
       // choice = categories[categoryID].questions[currentQuestion].answers[i];
        choice = answersArray[i];
       // $('<li><input type="radio" value=' + i + ' name= "answerBTN" class = "answerBTN" />' + choice + '</li> ').appendTo(answersList);

        $('<li><label for = "answer" >' + choice + ' </label><input type="radio" value=' + i + ' name= "answerBTN" class = "answerBTN" /></li> ').appendTo(answersList);

    }





}

//Fisher-Yates (aka Knuth) Shuffle.
function shuffle(array, answerIndex) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    var correctAnswerSeen = false;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        //If the question to moved is the first index (the real answer), and it is the first time it is moved, set that true answerIndex to
        //the current Index to be changed and set the bool to true
        if(randomIndex == 0 && correctAnswerSeen == false){
            trueAnswer = currentIndex;
            correctAnswerSeen = true;
        }

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;
}


function displayScore(score, questionsSeen) {
    var scoreboard = document.getElementById('scoreboard');
    $(scoreboard).modal("show");
    var percentage = document.getElementsByClassName("score");
    var scoreHead = document.getElementsByClassName("scoreHeader");
    //Throw error if category has no name

    if(questionsSeen == 0){
        $(percentage).text("No Questions Answered");
    }

    else{
    $(scoreHead).text("You answered " + score + " out of " + questionsSeen + " questions ");
        var finalScore = (score/questionsSeen)  * 100 ;
        $(percentage).text("For a final score of " + finalScore);
    }








}

