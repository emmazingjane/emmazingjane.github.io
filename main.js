
  var currentSlideIndex = 0;

  // Find out how many images are in the carousel wrapper
  var numberImages = $('.carousel img').length;

  // Set the width of the image wrapper and each image accordingly (responsive, baby!)
  $('.image-wrapper').css('width', numberImages * 100 + '%');
  $('.image-wrapper img').css('width', 100 / numberImages + '%');

  // Set up a timer for the carousel
  var carouselTimer = setInterval(timerTransition, 4000);

  function timerTransition () {
    
    if (currentSlideIndex ===  numberImages - 1) {
      // If we are on the last slide, we want to go back to the first 
      currentSlideIndex = 0;
    } else {
      // Otherwise advance to the next slide.
      currentSlideIndex += 1;
    };

    // Transition that baby!!
    transitionSlides();
  };

  // $('.carousel-indicators').on('click', 'li', function () {
  //   // Clear Timer for Carousel
  //   clearInterval(carouselTimer);
  //   // Restart Timer for Carousel
  //   carouselTimer = setInterval(timerTransition, 3000);

  //   // Find out which slide the user wants to go to
  //   currentSlideIndex = $(this).data('slide-number');

  //   // Transition that baby!!
  //   transitionSlides();

  // });


  function transitionSlides () {
    // Find out what percentage the slide wrapper should be transitioned
    var amountToTranslate = -((100 / numberImages) * currentSlideIndex);

    // Slide the carousel wrapper
    $('.image-wrapper').css('transform', 'translateX(' + amountToTranslate + '%)');
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX
    // Update the indicators so the user knows which slide is currently showing
    $('.carousel-indicators li').removeClass('active');
    $('.carousel-indicators li[data-slide-number="' + currentSlideIndex + '"]').addClass('active');
  };



// testimonials
  var quoteCounter = 0;
  var quoteLength = $('blockquote').length;

  setInterval(function () {
    $('blockquote').eq(quoteCounter).fadeOut(800, function () {
      if (quoteCounter === quoteLength - 1) {
        quoteCounter = 0;
      } else {
        quoteCounter += 1;
      };
      $('blockquote').eq(quoteCounter).fadeIn();
    });

  }, 7000);

// Form
$('.contact1').on('submit', function (e) {
    e.preventDefault(); // Prevent the page from reloading


      //looping through to check for validity
      $('input').each(function() {

        var $currentField = $(this);
        // if my current field is either form inoput or textarea
        var fieldType = $(this).attr('type');
        // https://api.jquery.com/attr/ this sets my attribute of the first element it matches
        // checking every part of the form
          if ($currentField.val() === '') {
            $currentField.addClass('error');
            $currentField.siblings('.error-message').fadeIn(300);
            // if the current field = and empty string the error message will fade in
            // https://api.jquery.com/val/
            // return;
          } else {
              $(this).removeClass('error');
              $(this).next().fadeOut(600); //show the error message
            };

          // if the email is valid it will not include certain charectershttps://stackoverflow.com/questions/2855865/validating-email-addresses-using-jquery-and-regex
        // set up the email type
        if (fieldType === 'email'); 
          var valid = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;     
            var isValid = valid.test($currentField.val());
            // if email is not valid
            if(!isValid) {
              $currentField.addClass('error');
              $currentField.siblings('.error-message').text('Please complete the following');
            } if(isValid) {
              $('.error-message').hide(300);
            };

            $('.error').click(function() {
              $('#target').blur();
            });
    });
  });

// hamburger drop down

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById('#myDropdown').classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// $( '.menu-btn' ).click(function(){
//         $('.responsive-menu').addClass('expand')
//         $('.hamburger').addClass('btn-none')
//       })
      
//        $( '.close-btn' ).click(function(){
//         $('.responsive-menu').removeClass('expand')
//         $('.hamburger').removeClass('btn-none')
//       })
//     })









