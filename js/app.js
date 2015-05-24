$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '520px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  $(document).keydown(function(e) {
    if (88 == e.which) {
      if ($('.ryu-ready').is(':visible')){
        $('.ryu-ready').hide();
      } else if ( $($('.ryu-throwing').is(':visible')) ) {
        $('.ryu-throwing').hide();
      } else {
        $('.ryu-still').hide();
      }
      $('.ryu-cool').show();
    }
  })
  .keyup(function(e) {
    if (88 == e.which) {
      if ($('.ryu').mouseenter()) {
        $('.ryu-ready').show();
      } else {
        $('.ryu-still').show();
      }
      $('.ryu-cool').hide();
    }
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
