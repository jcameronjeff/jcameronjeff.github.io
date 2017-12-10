
$(document).ready(function(){
  
  //GLOBAL
  var letters = ["A", "B", "C", "D", "E", "F", "G", 
  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
  "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

  var wordBank = ["JUMP", "OPEN", "CLOSE", "CRAZY", "TRAIN"];

  var wordGoal = wordBank[Math.floor(Math.random() * wordBank.length)];

  var yourWord = [];
  var correctGuesses = [];
  correct = true;
  var guessCount = 20;
  var letterInd;
  var letterGuess;
  
  //CALLING 
  letterButtons();
  printUnderlines();
  $(".letter").on("click", guesser);
  $(".clear").on("click", resetter);


  //FUNCTIONS
  function render(){
      $("#guessBox").text(yourWord);
      $("#guessCount").text("Guesses " + "Left: " + guessCount);
     }


  //make underlines

  function printUnderlines () {
    for (var i = 0; i < wordGoal.length; i++){
        var underline = "_ ";
       yourWord.push(underline);
        }
        render();
  };
  
//make letter buttons for guessing.
  function letterButtons () {
        for (var i = 0; i < letters.length; i++){
        var letterBtn = $("<button>").addClass("btn btn-danger btn-primary letter");
          letterBtn.attr("letter-data", letters[i]);
          letterBtn.text(letters[i]);
          $("#buttons" ).append(letterBtn);
        }
      
      };


  //   Guesser takes the attribute of the button to find the letter guess.

  function guesser(){
      guessedLetter = $(this).attr("letter-data");
      console.log(guessedLetter);

      if (wordGoal.indexOf(guessedLetter) > -1){
      letterInd = (wordGoal.indexOf(guessedLetter));
      yourWord.splice(letterInd, 1, guessedLetter);
      render()
      correctGuesses.push(guessedLetter);
      console.log(correctGuesses);
           }

      else {
      var wrongGuess = $("<li>");
              wrongGuess.addClass("letter");
              wrongGuess.text($(this).attr("letter-data"));    
              $("#wrong").append(wrongGuess);
              guessCount--;
          
          render();
      }
      if (guessCount < 1) {
        alert("YOU LOSE LOSER");
      }
     
      if (correctGuesses.length === wordGoal.length) {
  
        alert ("YOU WIN SMARTYPANTS!");
      }
     
      };

//reset everything on clear button. could not get it to pick a new word until I made a newWord Variable.

      function resetter() {
      guessCount = 20;
      $("#wrong").empty();
      yourWord.splice(0,yourWord.length);
      correctGuesses.splice(0,correctGuesses.length);
      $("#guessBox").empty();
      render();
     
     //choose a new random wordbank word 
      var newWord = wordBank[Math.floor(Math.random() * wordBank.length)];
      wordGoal = newWord;
  
      //reprint the underlines in guessbox
      printUnderlines();
     render();
      }
 

});
