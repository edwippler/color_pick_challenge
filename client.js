// var colorArray = [{color: 'red', idNumber: 1}, {color: 'green', idNumber: 2}, {color: 'yellow', idNumber: 3}, {color: 'blue', idNumber: 4}];
$(document).ready(function() {
  // displays color blocks on page load
  $('.colorBlock').css("display", "inline-block");

  //generate random number and check if equal to block id 
  var genNumber = randomNumber(1, 4)
  $('div').on('click', function() {
    if ($(this).data().number == genNumber) {
      $('#resultColor').text($(this).data().color);
      $('#resultMessage').text('Correct!!');
    }else {
      $('#resultColor').text($(this).data().color);
      $('#resultMessage').text('Nope! Guess again!');
    }

  });
});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
