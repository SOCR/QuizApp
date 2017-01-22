/**
 * Created by jakeclose on 1/16/17.
 */


$(function(){

    categories=[
        {
            name: "Statistics",
            questions:[
                {
                    questionText:"sample question1",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]

                },
                {
                    questionText:"sample question2",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question3",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question4",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                }
            ]

        },
        {
            name: "Math",
            questions:[
                {
                    questionText:"What is 1+1",
                    answers:["2","1","11","100"]
                },
                {
                    questionText:"what is 7*5",
                    answers:["35","42","21","12"]
                }
            ]
        },


        {
            name: "Machine Learning",
            questions:[
                {
                    questionText:"sample question1",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question2",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question3",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question4",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                }
            ]
        },


        {
            name: "Biology",
            questions:[
                {
                    questionText:"sample question1",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question2",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question3",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                },
                {
                    questionText:"sample question4",
                    answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
                }
            ]
        }




    ]

});


$(document).ready(function () {

    //intialize current quest and categoryID to zero
    var currentQuestion = 0;
    var categoryID = 0;

    //id for the start menu and category menu
    var startMenu = document.getElementById('myModal');
    var categoryMenu = document.getElementById('categoryPicker');
    var categoryList = document.getElementsByClassName('categories');
    var numCategories = categories.length;

    $(startMenu).modal('show').on("hidden", function () {
        $(categoryMenu).modal('show');


        /*
        for (i = 0; i < numCategories; i++) {

            var category = categories[i].name;
            $('<li><value= "category" + choice + '</li>').appendTo(category);
        }
         */

    });



    //function to get a random question givenn category id

    getRandomQuestion(0);



});



function getRandomQuestion(id){
    // determine the number of questions in the current category
    var numQuestions = categories[id].questions.length;
    // create a random question id that is smaller than the number of questions
    var randomID = Math.floor((Math.random() * (numQuestions)));
    //set the categoryid and current question to the one were currently looking at
    categoryID =  id;
    currentQuestion = randomID;

    //display the question
    displayQuestion(id, randomID);



}



function displayQuestion(categoryID, currentQuestion ) {

    //select the category name and add it the category section
    var category = categories[categoryID].name;
    var categoryClass = $(document).find(".UI > .category");
    $(categoryClass).text(category);

    //select the question text and add it question section
    var question =   categories[categoryID].questions[currentQuestion].questionText;
    console.log(question);
    var questionClass = $(document).find(".UI > .questionText");
    $(questionClass).text(question);

    //determine the number of answers
    var numChoices = categories[categoryID].questions[currentQuestion].answers.length;
    var answersList =  $(document).find(".UI > .answers");


    //go through the possible number of answers and create a answer box
    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = categories[categoryID].questions[currentQuestion].answers[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(answersList);
    }



}






