/* 
    Project Name : CameraX - Ecommerce Website
    Designed & Coded by : Gulshan Songara
*/

$(window).on("load", function () {
  $("#preloader").fadeOut(1e3);
}),
  $(document).ready(function () {
    "use strict";
    const e = $(window).scrollTop(),
      s = $("html, body"),
      o = $("#header"),
      i = $("#sidebar"),
      t = $(".goTop"),
      l = $(".mobile_search"),
      r = $("#account_modal"),
      a = $(".product_modal"),
      c = $(".product_swiper"),
      n = $(".thumb_swiper");
    $(window).on("scroll", function () {
      const e = $(this).scrollTop();
      e > 100 ? o.addClass("sticky") : o.removeClass("sticky"),
        e > 800 ? t.addClass("popped") : t.removeClass("popped");
    }),
      e > 100 ? o.addClass("sticky") : o.removeClass("sticky"),
      e > 800 ? t.addClass("popped") : t.removeClass("popped"),
      t.click(function () {
        return s.animate({ scrollTop: 0 }, "fast"), !1;
      }),
      $(".sidebar_toggler").click(function () {
        i.addClass("show");
      }),
      $(".drop_down_head").click(function () {
        let e = $(this).children("i");
        $(".drop_down_body").slideToggle(300),
          e.hasClass("bi-plus")
            ? e.attr("class", "bi-dash")
            : e.attr("class", "bi-plus");
      }),
      $(".sidebar_close").click(function () {
        i.removeClass("show");
      }),
      $(document).mouseup(function (e) {
        0 === $(e.target).closest(i).length && i.removeClass("show");
      }),
      $(".search-icon").click(function () {
        $(".search_field").toggle(400);
      }),
      $(".mob-search").click(function () {
        l.addClass("visible");
      }),
      $(".mob_search_close").click(function () {
        l.removeClass("visible");
      }),
      $(".user-icon, .checkout_btn").click(function () {
        s.addClass("overflow_hide"),
          r.fadeIn(),
          $(".account_swiper").slideDown();
      });
    new Swiper(".account_swiper", {
      effect: "flip",
      autoHeight: !0,
      speed: 500,
      allowTouchMove: !1,
      navigation: {
        nextEl: ".account_swiper .swiper-button-next",
        prevEl: ".account_swiper .swiper-button-prev",
      },
    });
    $(".account_close").click(function () {
      s.removeClass("overflow_hide"),
        r.fadeOut(),
        $(".account_swiper").slideUp();
    }),
      $(window).on("keydown", function (e) {
        "Escape" === e.key &&
          (s.removeClass("overflow_hide"),
          r.fadeOut(),
          $(".account_swiper").slideUp());
      }),
      $(".foot_subscribe form").on("submit", function () {
        alert("You are subscribed to receive our Daily Newsletter."),
          location.reload();
      });
    new Swiper(".hero_swiper", {
      speed: 500,
      loop: !0,
      loopedSlides: 3,
      slidesPerView: 1,
      navigation: {
        nextEl: ".hero_swiper .swiper-button-next",
        prevEl: ".hero_swiper .swiper-button-prev",
      },
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      keyboard: { enabled: !0, onlyInViewport: !1 },
    });
    function d(e) {
      s.animate({ scrollTop: $(e).offset().top }, "fast");
    }
    function p(e) {
      let s = $(".toast_msg");
      $(".toast_msg span").text(e),
        s.addClass("pop"),
        setTimeout(function () {
          s.removeClass("pop");
        }, 3e3);
    }
    $(".hero_btn").click(function () {
      return d("#popular"), !1;
    }),
      $(".scroll_down_btn").click(function () {
        return d("#products"), !1;
      }),
      $(".cart_btn").click(function () {
        p("Added to Cart");
      }),
      $(".buy_btn, .compare_btn").click(function () {
        p("Login First");
      }),
      $(".bi-heart").click(function () {
        let e = $(this);
        e.hasClass("bi-heart")
          ? (e.attr("class", "bi-heart-fill"), p("Added to wishlist"))
          : (e.attr("class", "bi-heart"), p("Removed from wishlist"));
      }),
      $(".bi-share").click(function () {
        prompt(
          "Press Ctrl + C, then Enter to copy link to clipboard",
          $(location).attr("href")
        ) && p("Link Copied");
      });
    new Swiper(".reviews_swiper", {
      speed: 400,
      loop: !0,
      loopedSlides: 4,
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: ".reviews_swiper .swiper-button-next",
        prevEl: ".reviews_swiper .swiper-button-prev",
      },
      keyboard: { enabled: !0, onlyInViewport: !1 },
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      },
    });
    $(".popular_quick_btn").click(function () {
      let e = $(this).attr("data-filter");
      s.addClass("overflow_hide"), a.filter("." + e).addClass("view");
    });
    for (let e = 0; e < c.length; e++) {
      c[e].classList.add("gallery-top-" + e),
        n[e].classList.add("gallery-thumbs-" + e);
      const s = new Swiper(".gallery-thumbs-" + e, {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: !0,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
      });
      new Swiper(".gallery-top-" + e, {
        effect: "cube",
        speed: 500,
        slidesPerView: 1,
        grabCursor: !0,
        cubeEffect: {
          shadow: !0,
          slideShadows: !1,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        thumbs: { swiper: s },
      });
    }
    $(".product_close").click(function () {
      s.removeClass("overflow_hide"), a.removeClass("view");
    }),
      $(window).on("click keydown", function (e) {
        ($(e.target).is(".product_modal .modal_centered") ||
          "Escape" === e.key) &&
          (s.removeClass("overflow_hide"), a.removeClass("view"));
      });
  });
