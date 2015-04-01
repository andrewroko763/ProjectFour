function locationOne () {
  var message;
  message = "You are home and safe in Winterfell!";
  updateDisplay(message);
  enableAll();
}
function locationTwo() {
    var message;
    message = "You have now reached The Wall, be weary of what lies behind it!";
    if (locationTwoScore === 0)
    {
    score = score + 5;
    }
    locationTwoScore++;
    updateScore();
    updateDisplay(message);
    enableAll();
    disableButton("n");
    disableButton("e");
    disableButton("w");
}
function locationThree () {
    var message;
    message = "You have now enetered Essos, home to the Dothraki!";
    if (locationThreeScore == 0)
    {
    score = score + 5;
    }
    locationThreeScore++;
    updateScore();
    updateDisplay(message);
    enableAll();
    disableButton("n");
}
function locationFour () {
    var message;
    message = "You have now enetered King's Landing!";
    if (locationFourScore == 0)
    {
    score = score + 5;
    }
    locationFourScore++;
    updateScore();
    updateDisplay(message);
    enableAll();
    disableButton("w");
    disableButton("e");
}
function locationFive () {
    var message;
    message = "You have now enetered Westeros home to the Seven Kingdoms, but filled with political turmoil and war!";
    updateDisplay(message);
    if (locationFiveScore == 0)
    {
    score = score + 5;
    }
    locationFiveScore++;
    updateScore();
    enableAll();
    disableButton("n");
    disableButton("w");
}
function locationSix () {
    var message;
    message = "You have now enetered Sothoryos, you are in grave danger of the plague!";
    updateDisplay(message);
    if (locationSixScore == 0)
    {
    score = score + 5;
    }
    locationSixScore++;
    updateScore();
    enableAll();
    disableButton("s");
    disableButton("w");
}
function locationSeven () {
    var message;
    message = "You have now enetered The Stormlands, you notice a bag of gold in the burried in the mud... Use the take command to pick it up";
    updateDisplay(message);
    if (locationSevenScore == 0)
    {
    score = score + 5;
    }
    locationSevenScore++;
    updateScore();
    enableAll();
    disableButton("e");
    disableButton("s");
    disableButton("w");
}
function locationEight () {
    var message;
    message = "You have now enetered The Shadowlands, you are in grave danger from the shadows!";
    updateDisplay(message);
    if (locationEightScore == 0)
    {
    score = score + 5;
    }
    locationEightScore++;
    updateScore();
    enableAll();
    disableButton("e");
    disableButton("s");
    disableButton("w");
}
function locationNine () {
    var message;
    message = "You have now enetered Ulthos, you notice a dragon egg... use the take command to pick it up";
    updateDisplay(message);
    if (locationNineScore == 0)
    {
    score = score + 5;
    }
    locationNineScore++;
    updateScore();
    enableAll();
    disableButton("e");
    disableButton("s");
    disableButton("n");
}
function locationTen () {
    var message;
    message = "You have now enetered Summer Isles, in the warm sand you find a trident... use the take command to pick it up";
    updateDisplay(message);
    if (locationTenScore == 0)
    {
    score = score + 5;
    }
    locationTenScore++;
    updateScore();
    enableAll();
    disableButton("e");
    disableButton("s");
    disableButton("n");
}
