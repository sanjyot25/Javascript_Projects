var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;
var started = false;

var userClickedPattern = [];

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playAudio(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        console.log(userClickedPattern);
  
        if (userClickedPattern.length === gamePattern.length){
  
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
        playAudio("wrong")
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      
      startOver()
  
      }
  

}

function nextSequence(){
    // userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4)
    var randomChoosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColor);
    console.log('====================================');
    console.log(randomChoosenColor);
    console.log('====================================');
    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playAudio(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = []
}

// nextSequence();