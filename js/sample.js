//this is a sample version of the JS object used to store the list of questions. The real question list should be at least 20 questions, split among at least 4 categories. Content of the questions list is not important right now

//all javascript code should be enclosed inside a $(function(){ statement. This causes the code to wait until the entire page is loaded before running
$(function(){

   categories=[
       {
           name: "Sample Category",
           questions:[
               {
                   questionText:"sample question1",
                   answers:["correctanswer","wronganswer1","wronganswer2","wronganswer3"]
               },
               {
                   questionText:"sample question2",
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
       }
       
   ]

}); 
