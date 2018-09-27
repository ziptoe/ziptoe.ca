// When the user clicks on the div, open the modal
$('.vision').on('click', function() {
  $('#vision').toggle();
});

$('.membership').on('click', function() {
  $('#membership').toggle();
});

$('.developers').on('click', function() {
  $('#developers').toggle();
});

$('.game').on('click', function() {
  $('#game').toggle();
});

$('.internetOfThings').on('click', function() {
  $('#internetOfThings').toggle();
});

// When the user clicks on <span> (x), close the modal
$('.closeModal').on('click', function() {
  $('#vision').css('display', 'none');
  $('#membership').css('display', 'none');
  $('#developers').css('display', 'none');
  $('#game').css('display', 'none');
  $('#internetOfThings').css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
$(window).on('click', function(event) {
  if (event.target == $('#vision')[0]) {
    $('#vision').css('display', 'none');
  }
  if (event.target == $('#membership')[0]) {
    $('#membership').css('display', 'none');
  }
  if (event.target == $('#developers')[0]) {
    $('#developers').css('display', 'none');
  }
  if (event.target == $('#game')[0]) {
    $('#game').css('display', 'none');
  }
  if (event.target == $('#internetOfThings')[0]) {
    $('#internetOfThings').css('display', 'none');
  }
});
