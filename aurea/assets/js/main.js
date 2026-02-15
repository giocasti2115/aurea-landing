(function ($) {
  "use strict";
  $(function () {
    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // animated hamburger icon
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("toggle-active");
      $(".header").toggleClass("navbar-active");
    });

    // position navbar on scroll and resize
    $(window).on("scroll", function (e) {
      var scroll = $(window).scrollTop();
      if ((scroll > 10) | (scroll == 10)) {
        $(".header").addClass("header-active");
      } else {
        $(".header").removeClass("header-active");
      }
    });

    // on window scroll
    $(window).on("scroll", function () {
      // scroll bottom to top
      var scrollToTop = $(".scrollToTop");
      if ($(window).scrollTop() < 500) {
        scrollToTop.removeClass("active");
      } else {
        scrollToTop.addClass("active");
      }

      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 300) {
        $(".navbar").removeClass("sticky-active");
      } else {
        $(".navbar").addClass("sticky-active");
      }
    });

    // project filter
    $(".button--project").on("click", function () {
      $(".button--project").removeClass("button--project-active");
      $(this).addClass("button--project-active");

      var $projectItem = $(this).attr("data-project");

      if ($projectItem == "all") {
        $(".project-filter").removeClass("is-hidden");
      } else {
        $(".project-filter").addClass("is-hidden");
        $(".project-filter[data-project=" + $projectItem + "]").removeClass(
          "is-hidden"
        );
      }
    });

    // pricing
    $(".pricing__tab-content").hide();
    $(".pricing__tab-content:first").show();
    $(".pricing__tab-item").on("click", function () {
      $(".pricing__tab-item").removeClass("pricing__tab-item-active");
      $(this).addClass("pricing__tab-item-active");
      $(".pricing__tab-content").hide();
      var activePricing = $(this).attr("href");
      $(activePricing).fadeIn(300);
      return false;
    });

    // skill progress
    $(".skill__bar-box").each(function () {
      $(this).isInViewport(function (statuss) {
        if (statuss === "entered") {
          $("[data-dasharray]").each(function () {
            $(this).css("stroke-dasharray", $(this).attr('data-dasharray'));
            $(this).css("stroke-dashoffset", $(this).attr("data-dasharray") / 3);
          });
        }
      });

    });

    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  });
})(jQuery);
