
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

    // Gets the video src from the data-src on each button
    var $imageSrc;  
    $('.gallery img').click(function() {
        $imageSrc = $(this).data('bigimage');
    });
    console.log($imageSrc);
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    
    $("#image").attr('src', $imageSrc  ); 
    })
      
      
    // reset the modal image
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#image").attr('src',''); 
    }) 
        
    // document ready  
    });
    

     

