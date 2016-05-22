$(document).ready(function(){

  var thanks = function(noOfTimes){

    var thanksHolder = $("#thanks-holder");

    var thanksMessage = $(".thanks");

    for (var i=0 ;i < noOfTimes ;i++){
      var newThanksMessage = thanksMessage.clone()

      thanksHolder.append(newThanksMessage);
    }

  }

  thanks(200);

  // Mobile Menu Open / Close

  // var mobileMenu = $("#mobile-menu");
  // var headerLinkContainer = $(".header-link-container");

  // var open = false;

  // removeWindowListeners = function() {

  //   $(document).off("mouseup.document");

  // }

  // removeMenuListener = function() {

  //   mobileMenu.off("click.toggle");

  // }

  // clickOutsideClose = function() {

  //   $(document).on("mouseup.document", function (e) {

  //     if ($(window).width() < 650 && open ) {

  //       headerLinkContainer.slideToggle(
  //         function(){
  //           mobileMenuClick();
  //           open =false;
  //           removeWindowListeners();
  //         }
  //       );

  //     }
  //   });

  // }

  // mobileMenuClick = function() {

  //   mobileMenu.on("click.toggle", function(){

  //     if (!open) {

  //       headerLinkContainer.slideToggle(
  //         function(){
  //           clickOutsideClose();
  //           open = true;
  //           removeMenuListener();
  //         }
  //       );

  //     } else {

  //       headerLinkContainer.slideToggle(function(){
  //         open = false;
  //       });

  //     }

  //   });

  // }

  // mobileMenuClick();

  //   $(window).on('resize', function () {

  //   if ($(window).width() > 650) {
  //     headerLinkContainer.show();
  //   }

  // });



});
