//START - VARIABLE DECLARATIONS

var gamePattern = [];


var buttonColors = ["red", "blue", "green", "yellow"];


var userClickedPattern = [];


var gameInitiate = 0;

var level = 0;

//END - VARIABLE DECLARATIONS


//START - FUNCTIONS CALLED




gameStarter();





//END - FUNCTIONS CALLED

//START - Listens for key press, starts game if pressed, stops if key pressed once
function gameStarter() {

  $(document).keydown(function() {

    if (gameInitiate <= 0) {
      console.log(gameInitiate);

      $("#level-title").text("Level " + level);
      nextSequence();

      gameInitiate++;

    }

  });

}
//END - Listens for key press, starts game if pressed, stops if key pressed once








//START - Adds colour of clicked tile to user array. Tile flashes. Play sound.
$(".btn").click(function() {

  var userChosenColor = [];

  userChosenColor.push(this.id);

  userClickedPattern.push(userChosenColor[0]);


  playSound();

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);


  console.log(userClickedPattern);
  console.log(gamePattern);
});
//END - Adds colour of clicked tile to user array. Tile flashes. Play sound. 




//START - This function chooses a random color and adds it to an array (gamePattern).
function nextSequence() {


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  level++;


  $("#level-title").text("Level " + level);


  gamePattern.push(randomChosenColor);

  console.log(gamePattern);

  // console.log("Hello");

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);




}
//END - Chooses a random colour and adds to array


//START - Play sound
function playSound() {

  $(".btn").click(function() {


    var playColorClickSound = new Audio("sounds/" + this.id + ".mp3")

    playColorClickSound.play();

  });




}

//END - Plays a sound

//START - Tiles flash when pressed
function animatePress(currentColor) {


  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 120);


}
//END - Tile colour change when clicked

//START - Check if user click pattern same as game pattern
function checkAnswer(currentLevel) {




  if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]) {


    console.log("First condition met");

    if (userClickedPattern.length === gamePattern.length) {


      console.log("Second condition met");

      console.log("Success");

      setTimeout(function() {
        nextSequence();
      }, 1000);

      userClickedPattern = [];

    }
  }


else {

  gameInitiate = 0;

  $("#level-title").text("GAME OVER");

  userClickedPattern = [];

  gamePattern = [];



}

// clean both arrays, flash red, turn game off but only allow new game, change gameInitiate to = 0;

}
//END - Check if user array same as game pattern array
