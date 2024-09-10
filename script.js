/* Author: Selvahini Kamalarajan 
Date: December 5, 2023 
File Name: script 
Description: Informational website about the implications of privacy and information technology usage */

function phishing() {
  // Function to display correct answer for phishing email question
  var question = document.quiz2.question.value;

  if (question == "yes") {
    document.getElementById("message").innerHTML = "Correct! This is a spoof email coming from a fake sender address (i.e. 'myuniversity.edu') and redirects the user to a bogus page that appears to be legitimate.";
  }

  if (question == "no") {
    document.getElementById("message").innerHTML = "Incorrect. This is a spoof email coming from a fake sender address (i.e. 'myuniversity.edu') and redirects the user to a bogus page that appears to be legitimate. Your privacy can be compromised due to malicious script activities.";
  }
  document.getElementById("after_submit").style.visibility = "visible";  //Set element visibility to visible 
}

function check() {
  // Function to check answers for Privacy Policy Question
  var question = document.quiz.question.value;

  // Output message and picture if user answers yes/no
  if (question == "yes") {
    document.getElementById("message").innerHTML = "Nice! You are one of 9% of people who read privacy policies often.";
    document.getElementById("picture").src = "policy.png";
  }

  if (question == "no") {
    document.getElementById("message").innerHTML = "Just like you, 91% of consumers accept the terms and conditions without reading them.";
    document.getElementById("picture").src = "policies-stats.jpg";
  }
  document.getElementById("after_submit").style.visibility = "visible";
}

function checkAns() {
  // Function to check answers for quiz 
   var correctAns = ["b", "b", "a", "d", "b", "d", "b", "b", "c", "d"]; 

  var correct = 0;
 
  var questions = [document.quiz.q1.value, document.quiz.q2.value, document.quiz.q3.value, document.quiz.q4.value, document.quiz.q5.value, document.quiz.q6.value, document.quiz.q7.value, document.quiz.q8.value, document.quiz.q9.value, document.quiz.q10.value];
  
  for (let i = 0; i < correctAns.length; i++) {
    if (questions[i] == correctAns[i]) {
      correct++;
    }
  }
// Declare winner for answering more than 5 questions correctly
  if (correct >= 5) {
    document.getElementById("message").innerHTML = "Congratulations! You are now a privacy expert.";
    document.getElementById("picture").src = "winner.png";
  }
  // Prompt user to review website information again 
  if (correct < 5) {
    document.getElementById("message").innerHTML = "Unfortunately, you didn't pass the quiz. Feel free to browse through the website and try again.";
    document.getElementById("picture").src = "fail.png";
  }
// Make messages and score visible after submit 
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got " + correct + " questions correct.";
}

//Hide quiz elements when clicking button 
function start() {
  // Function for making quiz elements visible when clicking button
  var element = document.getElementById("quiz");
  if (element.style.display == "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}