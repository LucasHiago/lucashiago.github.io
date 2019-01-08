$('.center_carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  variableWidth: true
});
$(".button").on("click", function() {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "add") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find("input").val(newVal);
});
$(document).ready(function() {
  $('.color-choose input').on('click', function() {
  	  $('.product_img-3d img[data-image = ' + shueColor + ']').addClass('inactive');
  	    	  $('.ridiculamente_simples form[data-image = ' + shueColor + ']').addClass('inactive');
      var shueColor = $(this).attr('data-image');
      $('.active').removeClass('active').addClass('inactive');
      $('.inactive .active').removeClass('active');
      $('.product_img-3d img[data-image = ' + shueColor + ']').addClass('active');
            $('.ridiculamente_simples form[data-image = ' + shueColor + ']').addClass('active');
      $(this).addClass('active');
  });
});
$(function () {
  $("#rateYo").rateYo({
    rating: 3.6,
    starWidth: "18px",
    spacing: "5px"
  });
});
