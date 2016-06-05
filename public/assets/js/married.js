$(document).ready(function(){

  var thanks = function(noOfTimes){

    var thanksHolder = $("#thanks-holder");

    for (var i=0 ;i < noOfTimes ;i++){

      var thanksMessage = '<h3 class="thanks">Thank you!</h3>';

      thanksHolder.append(thanksMessage);
    }

  }

  thanks(200);

  function isScrolledIntoView(elem)
  {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom));
  }

  $(document).on('scroll', function(){

    if (isScrolledIntoView('#thanks-holder')) {

      thanks(200);

    }

  })

});
