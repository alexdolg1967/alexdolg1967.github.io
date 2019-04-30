
// Add scrollspy to <body>
$('body').scrollspy({target: ".top-menu", offset: 30});

// Add smooth scrolling to all links inside a navbar
$("#top-menu a").on('click', function(event){

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash (#)
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});

// Add scrollspy to <body>
$('body').scrollspy({target: ".footer-menu", offset: 30});

// Add smooth scrolling to all links inside a navbar
$("#footer-menu a").on('click', function(event){

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash (#)
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
  $('html, body').animate({
    scrollTop: $(hash).offset().bottom
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});

$(document).ready(function() {
  $(".works-filter__button[filter]").click(function() {
    if ($(this).attr("filter") && $(this).attr("filter") !== "all") {
      $(".works-wrapper > div*[filter !='" + $(this).attr('filter') + "']").fadeOut(350);
      $(".works-wrapper > div*[filter ='" + $(this).attr('filter') + "']").fadeIn(350);
    } else {
      $(".works-wrapper > div").fadeIn(350); 
    }
    $(".works-filter__button[filter]").removeClass('focused');
    $(this).addClass('focused');
  });
});

    

     

