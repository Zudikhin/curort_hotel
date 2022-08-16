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


    $('.product_nav_desktop_content_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      arrows: true,
      focusOnSelect: true,
      prevArrow: $('.product_nav_desktop_content_prev'),
      nextArrow: $('.product_nav_desktop_content_next')
    });

    $(".product_nav_mobile_title").click(function() {
      $(this).parent().toggleClass("active");
    });

    $(".header_block_drop").click(function() {
      $(".dropdown").addClass("active");
    });

    $(".dropdown_btn").click(function() {
      $(".dropdown").removeClass("active");
    });

    $(".product_content_item_fund_content_body_form_btn_call").click(function() {
      $(".back_modal").addClass("active");
      $(".modal_callback").addClass("active");
    });

    $(".modal_callback_close").click(function() {
      $(".back_modal").removeClass("active");
      $(".modal_callback").removeClass("active");
    });

    $(".back_modal").click(function() {
      $(this).removeClass("active");
      $(".modal_callback").removeClass("active");
    });

    $(".product_content_item_fund_content_body_icons_drop").click(function() {
      $(this).toggleClass("active");
      $(this).parent().parent().find(".product_content_item_fund_content_body_info").toggleClass("active");
    });

    $(".product_content_item_fund_content input[type='date']").change(function() {
      var date = $(this).val();
      var arrayDate = date.split("-");
      var textDate = arrayDate[2] + '.' + arrayDate[1] + '.' + arrayDate[0];
      $(this).siblings("p").text(textDate);
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
      var elementSameAttr = $(".product_nav_desktop_content_item[data-target='"+id +"']");
      elementSameAttr.each(function() {
        $(this).addClass("active");
      });
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