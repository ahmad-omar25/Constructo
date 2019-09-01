/*global $, window*/
$(function () {

    "use strict";

    //LOADER PAGE
    $(window).on("load", function () {
        $("body").css("overflow", "auto");
        $(".loader").fadeOut(1000);
    });

    //COSTUM HEIGHT
    $(".our-slider").height($(window).height());
    $(".project").height($(".project .project-face img").height());
    $(".managers .item .image").height($(".managers .item .image img").height());
    $(".testimonials").height($(window).height());
    $(window).resize(function () {
        $(".our-slider").height($(window).height());
        $(".project").height($(".project .project-face img").height());
        $(".managers .item .image").height($(".managers .item .image img").height());
        $(".testimonials").height($(window).height());
    });


    // ADD CLASS
    //FIXED NAV
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $(".our-nav").offset().top + 150) {
            $(".our-nav").addClass("fx-top");
        } else if ($(window).scrollTop() === 0) {
            $(".our-nav").removeClass("fx-top");
        }
    });
    //TESTIMONIALS
    $(".testimonials .slider-btn span").on('click', function () {
        $('.testimonials .active').fadeOut(300, function () {
            $(this).removeClass('active').siblings('.testi').addClass('active').fadeIn(300);
        });
    });
    //LIST ITEMS
    $(".collapse li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //SCROLLING
    //CHEVRON TOP
    $(document).ready(function () {
        $(window).scroll(function () {
            var scrollHeigt = $(window).scrollTop();
            if (scrollHeigt > $(window).height()) {
                $(".chevron-up").fadeIn(500);
            } else if (scrollHeigt < $(window).height()) {
                $(".chevron-up").fadeOut(500);
            }
        });
        $(".chevron-up").on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
    });
    //SCROLL TO SECTION
    $(".collapse li a, .about button, .carousel-caption a").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 49
        }, 1000);
    });
    $(".contact button").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 49
        }, 1000);
    });

    //COUNTER UP
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $(".counter").offset().top - ($(window).height() - 100)) {
            $('.counter').each(function () {
                var count = $(this),
                    countTo = count.attr('data-count');
                $({
                    countNum: count.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1500,
                    easing: 'linear',
                    step: function () {
                        count.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        count.text(this.countNum);
                    }
                });

            });
        }
    });

    //FADE TOGGLE
    $(".testimonials .testi:last-child").fadeOut();
    $(".testimonials .slider-btn a").on("click", function () {
        $(".testimonials .testi").fadeToggle();
    });

    $(".navbar-toggle2").on("click", function () {
        $(".top-nav").fadeToggle(500);
    });

    $(".navbar-toggle1").on("click", function () {
        $(this).toggleClass("xtoggle");
    });

    $(".navbar-toggle2").on("click", function () {
        $(this).toggleClass("ltoggle");
    });

    $(".navbar-toggle").on('click', function () {
        $('.collapse').slideToggle();
    });
});