// When the user clicks on the div, open the modal
$('.vision').on('click', function() {
  $('#vision').toggle();
});

$('.membership').on('click', function() {
  $('#membership').toggle();
});

// When the user clicks on <span> (x), close the modal
$('.closeModal').on('click', function() {
    $('#vision').css('display', 'none');
    $('#membership').css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
$(window).on('click', function(event) {
  if (event.target == $('#vision')[0]) {
    $('#vision').css('display', 'none');
  }
  if (event.target == $('#membership')[0]) {
    $('#membership').css('display', 'none');
  }
});