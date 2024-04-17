/*-----------------------------------------------------------------------------------

    Diet By Tannu - Nutrition Health and Diet for you
    Description: Nutrition Health and Diet HTML Template

        
    ---------------------------------- */

!(function (o) {
  "use strict";
  var s = o(window);
  o("#preloader").fadeOut("normall", function () {
    o(this).remove();
  }),
    s.on("scroll", function () {
      var e = s.scrollTop(),
        t = o(".navbar-brand img"),
        a = o(".navbar-brand.logodefault img");
      e <= 50
        ? (o("header").removeClass("scrollHeader").addClass("fixedHeader"),
          t.attr("src", "img/logos/logo-inner.png"))
        : (o("header").removeClass("fixedHeader").addClass("scrollHeader"),
          t.attr("src", "img/logos/logo.png")),
        a.attr("src", "img/logos/logo.png");
    }),
    s.on("scroll", function () {
      500 < o(this).scrollTop()
        ? o(".scroll-to-top").fadeIn(400)
        : o(".scroll-to-top").fadeOut(400);
    }),
    o(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), o("html, body").animate({ scrollTop: 0 }, 600);
    }),
    o(".parallax,.bg-img").each(function (e) {
      o(this).attr("data-background") &&
        o(this).css(
          "background-image",
          "url(" + o(this).data("background") + ")"
        );
    }),
    o(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    o(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    o(".form_date").datetimepicker({
      language: "en",
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0,
    }),
    o(".form_time").datetimepicker({
      language: "en",
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 1,
      minView: 0,
      maxView: 1,
      forceParse: 0,
    }),
    0 !== o(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      o(".copy-clipboard").on("click", function () {
        var e = o(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    o(document).ready(function () {
      o(".service-carousel").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        smartSpeed: 1500,
        nav: !1,
        dots: !0,
        center: !1,
        margin: 0,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 2 },
          1200: { items: 3 },
        },
      }),
        o(".client-style1").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          autoplay: !0,
          smartSpeed: 800,
          autoplayTimeout: 3e3,
          responsiveClass: !0,
          autoplayHoverPause: !1,
          responsive: {
            0: { items: 2, margin: 10 },
            481: { items: 2, margin: 15 },
            576: { items: 4, margin: 20 },
            992: { items: 5, margin: 30 },
            1200: { items: 6, margin: 50 },
          },
        }),
        o(".testimonial-style1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          smartSpeed: 1e3,
          nav: !1,
          dots: !1,
          center: !0,
          items: 1,
          margin: 0,
        }),
        o(".blog-client").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          thumbs: !0,
          thumbsPrerendered: !0,
          smartSpeed: 800,
          nav: !1,
          dots: !1,
          center: !0,
          items: 1,
          margin: 0,
        }),
        o(".certificate-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 15,
          responsive: {
            0: { items: 1, margin: 0 },
            768: { items: 2 },
            1200: { items: 3 },
          },
        }),
        o(".portfolio-details-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 800,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            767: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
          },
        }),
        o(".portfolio-carousel1").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 20,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 },
          },
        }),
        o(".testimonial-style2").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            992: { items: 1 },
            1200: { items: 1 },
          },
        }),
        o(".slider-fade-02").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 767: { nav: !1 }, 992: { nav: !0, dots: !1 } },
        }),
        o(".slider-fade").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 767: { nav: !1 }, 992: { nav: !0, dots: !1 } },
        }),
        o(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !1,
          smartSpeed: 500,
        }),
        0 !== o(".horizontaltab").length &&
          o(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var t = o(this),
                a = o("#nested-tabInfo");
              o("span", a).text(t.text()), a.show();
            },
          }),
        0 !== o(".verticaltab").length &&
          o(".verticaltab").easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            closed: "accordion",
            tabidentify: "hor_1",
            activate: function (e) {
              var t = o(this),
                a = o("#nested-tabInfo2");
              o("span", a).text(t.text()), a.show();
            },
          }),
        o(".countup").counterUp({ delay: 25, time: 2e3 }),
        o(".countdown").countdown({
          date: "01 Dec 2024 00:01:00",
          format: "on",
        }),
        o(".current-year").text(new Date().getFullYear());
    }),
    s.on("load", function () {
      var t = o(".portfolio-gallery-isotope").isotope({});
      o(".filtering").on("click", "span", function () {
        var e = o(this).attr("data-filter");
        t.isotope({ filter: e });
      }),
        o(".filtering").on("click", "span", function () {
          o(this).addClass("active").siblings().removeClass("active");
        }),
        o(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        }),
        o(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(),
        s.stellar();
    });
})(jQuery);
