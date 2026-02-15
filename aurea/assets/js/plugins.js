(function ($) {
  "use strict";
  $(function () {
    // wow init
    new WOW().init();

    // features slider
    $(".features__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-features-item"),
        nextArrow: $(".next-features-item"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // video popup
    if ($(".hero__video").length) {
      $(".hero__video").magnificPopup({
        type: "iframe",
      });
    }

    // team slider
    $(".team__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-team-item"),
        nextArrow: $(".next-team-item"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // client slider
    $(".client__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-client-item"),
        nextArrow: $(".next-client-item"),
        asNavFor: ".pagination-slider",
      });

    $(".pagination-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".client__slider",
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
    });

    $(".budget").niceSelect();

    // chart

    if ($("#donationChart").length) {
      var options = {
        chart: {
          height: 350,
          minHeight: 350,
          type: "pie",
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
            autoSelected: "zoom",
          },
          events: {
            dataPointSelection: function (event, chartContext, config) {
              console.log(config.dataPointIndex + " " + config.seriesIndex);
            },
            click: function (event, chartContext, config) {
              console.log(config.dataPointIndex + " " + config.seriesIndex);
            },
          },
        },
        series: [4, 1, 2, 3],
        colors: ["#F25133", "#EAA240", "#2A8EF1", "#B92BF1"],
        labels: [
          "Business Focused",
          "Cost Optimization",
          "Seamless Experience",
          "Dedicated Support",
        ],
      };
      var chart = new ApexCharts(
        document.querySelector("#donationChart"),
        options
      );
      chart.render();
    }

    //counter
    if (document.querySelector(".counter-number") !== null) {
      $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
      });
    }

    // team slider
    $(".testimonial__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  });
})(jQuery);
