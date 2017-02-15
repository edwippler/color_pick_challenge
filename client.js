var colorArray = [{color: 'Red', idNumber: 1, colorValue: '#ff0000'}, {color: 'Green', idNumber: 2, colorValue: '#00ff00'}, {color: 'Yellow', idNumber: 3, colorValue: '#ffff00'}, {color: 'Blue', idNumber: 4, colorValue: '#0000ff'}, {color: 'Aqua', idNumber: 5, colorValue: '#09c0ff'}, {color: 'Pink', idNumber: 6, colorValue: '#cc00cc'}, {color: 'Orange', idNumber: 7, colorValue: '#ffaf00'}];
$(document).ready(function() {
  // displays color blocks on page load
  alert('Please select a difficulty.')
  $('.colorBlock').css("display", "inline-block");
  // $('#easy').on('click', function(){
  //   $('body').append('<div class="colorBlock" ')
  //
  // })

  //generate random number and check if equal to block id
  var genNumber = randomNumber(1, 5)
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
