let timer = document.querySelector("#timer");
let scoreLink = document.querySelector("#see-scores");
let title = document.querySelector("#title");
let start = document.querySelector("#start");
let wrapper = document.querySelector("#wrapper");
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Which built-in method calls a function for each element in the array?",
    choices: ["while()", "loop()", "forEach()", "None of the above"],
    answer: "forEach()"
  },
  {
    title: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
    choices: ["toSource()", "valueOf()", "toString()", "None of the above"],
    answer: "valueOf()"
  },
  {
    title: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
    choices: ["slice()", "split()", "substr()", "substring()"],
    answer: "substring()"
  }
];


start.addEventListener("click", function startQuiz(){
  let qnumber = 0;
  let timeDown;
  let answerChoice;
  start.style.display = "none";
  document.getElementById("instructions").style.display = "none";
  wrapper.style.textAlign = "left";
  timer.textContent = questions.length * 15;
  function showQ() {

    title.textContent = questions[qnumber].title;
    let qlist = document.createElement("ol");
    wrapper.appendChild(qlist);
    for (var j = questions[qnumber].choices.length - 1; j >= 0; j--) {
      let listChoice = document.createElement("li");
      let choiceButton = document.createElement("button");
      $(choiceButton).addClass('btn btn-outline-dark');
      choiceButton.id = "choiceB";
      let choice = document.createTextNode(questions[qnumber].choices[j]);
      choiceButton.appendChild(choice);
      listChoice.appendChild(choiceButton);
      qlist.appendChild(listChoice);
    }
      let answerChoices = document.getElementById("choiceB");
      answerChoices.addEventListener("click", function(){
        answerChoice = answerChoices.textContent;
      });
      if (answerChoice == questions[qnumber].answer) {
          let correct = document.createElement("p");
          correct.textContent = "Correct!";
          correct.id = "correct";
          wrapper.appendChild(correct);
          setTimeout(function(){
            $("#correct").fadeOut().empty()
          }, 1000);
        }
      else {
        let incorrect = document.createElement("p");
        incorrect.textContent = "Correct!";
        incorrect.id = "incorrect";
        wrapper.appendChild(incorrect);
        timeDown -= 10;
        setTimeout(function(){
          $("#incorrect").fadeOut().empty()
        }, 1000);
      }
  }
  for (let i = 0; i < questions.length; i++) {
    showQ();
    qnumber++;
  }
  setInterval(function(){
    timeDown = parseInt(timer.textContent) - 1;
    timer.textContent = timeDown;
    if (timeDown == 0) {
      return;
    } 
  }, 1000);
});