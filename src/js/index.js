$(document).ready(function() {
  // Init scroll spy
  $(".topics-scrollspy").scrollspy({ target: "#topics-navbar" });

  // Init Nice Scroll plugin
  $(".nice-scroll").niceScroll({
    cursorcolor:"rgba(99,46,98,.6)"
  });
});
