$(document).ready(function() {
    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["computer says YES", "You'd be daft not to", "YES! YES! YES!", "you won't regret it", "absolutely"];

    $("#answer").hide();

    magic8Ball.announceProphecy = function() {
      var randomNumber = Math.random();
      var randomNumberArray = randomNumber * this.listOfAnswers.length;
      var randomIndex = Math.floor(randomNumberArray);
      var answer = this.listOfAnswers[randomIndex];

      $("#8ball").effect("shake");
      $("#8ball").attr("src", "img/answerside.png");
      console.log("I show answer side immediately!");

      setTimeout(function() {
        console.log("I wait 1 second, then show answer text!");
      }, 1000);
      $("#answer").fadeIn(4000);
      $("#answer").text(answer);
      setTimeout(function() {
        console.log("I show answer text for 5 seconds!");
      }, 5000);
      $("#answer").fadeOut(4000);
    };

    var onClick = function() {
      magic8Ball.announceProphecy();
    };

    $("#answer").hide();
    $("#questionButton").click(onClick);
  });
