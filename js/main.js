$(document).ready(function () {
    "use strict";
    
    $('.product_main_left_slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.product_main_left_slider_nav'
    });
    
    $('.product_main_left_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_main_left_slider_for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              vertical: false,
              verticalSwiping: false,
            }
          }
        ]
    });

    $(".product_nav_mobile_title").click(function() {
      $(this).parent().toggleClass("active");
    });

    $(".product_nav_mobile_drop ul li").click(function() {
      var id = $(this).attr("data-target");
      var text = $(this).text();
      $(".product_content_item").removeClass("active");
      $(`#${id}`).addClass("active");
      $(".product_nav_mobile_title_current span").text(text);
      $(".product_nav_mobile").removeClass("active");
    });

    $(".product_nav_desktop_content_item").click(function() {
      $(".product_nav_desktop_content_item").removeClass("active");
      $(this).addClass("active");
      var id = $(this).attr("data-target");
      $(".product_content_item").removeClass("active");
      $(`#${id}`).addClass("active");
    });

    $(document).click(function(e) {
      var container = $(".product_nav");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".product_nav_mobile").removeClass("active");
      }
    });
    
});