var isMobile = false,
  win_width = 0,
  win_height = 0,
  navItem = 0,
  atH = 0,
  $menuBtn = $(".menu-handler"),
  pageNavNum = 0,
  scrollNav = 0;
var pageInit = {
    init: function () {
      win_width = $(window).width();
      win_height = $(window).height();
      if (win_width <= 1024) {
        isMobile = true;
        atH = 54;
      } else if (win_width > 1024) {
        isMobile = false;
        atH = 80;
        menu.close();
      }
    },
    setImgMax: function (img, imgW, imgH, tW, tH) {
      var tWidth = tW || win_width;
      var tHeight = tH || win_height;
      var coe = imgH / imgW;
      var coe2 = tHeight / tWidth;
      if (coe < coe2) {
        var imgWidth = tHeight / coe;
        img.css({
          height: tHeight,
          width: imgWidth,
          left: -(imgWidth - tWidth) / 2,
          top: 0,
        });
      } else {
        var imgHeight = tWidth * coe;
        img.css({
          height: imgHeight,
          width: tWidth,
          left: 0,
          top: -(imgHeight - tHeight) / 2,
        });
      }
    },
    setScroll: function (anchorCur) {
      if ($(anchorCur).length >= 1) {
        $("html,body").animate(
          { scrollTop: $(anchorCur).offset().top - atH },
          0
        );
      }
    },
    scollHeader: function () {
      function c() {
        var s = $(window).scrollTop();
        s > atH
          ? $(".top").addClass("topSroll")
          : $(".top").removeClass("topSroll");
      }
      $(window).scroll(c), c();
    },
  },
  nav = {
    init: function () {
      jQuery(".nav li").hover(
        function () {
          if (jQuery(this).find(".subnav").length > 0) {
            $(this).children("a").addClass("hov");
            $(this)
              .find(".subnav")
              .stop(false, false)
              .animate({ marginTop: "0", opacity: "show" }, 350);
          }
        },
        function () {
          $(this).children("a").removeClass("hov");
          $(this)
            .children(".subnav")
            .stop(false, false)
            .fadeOut(250, function () {
              $(this).css("marginTop", "-15px");
            });
        }
      );
      jQuery(".nav .subnav a").click(function (e) {
        var $this = jQuery(this);
        var hash = $this.attr("href").split("#")[1];
        if (hash && jQuery("#" + hash).length >= 1) {
          e.preventDefault();
          jQuery("html,body").animate(
            { scrollTop: jQuery("#" + hash).offset().top - atH },
            800,
            "easeInOutExpo"
          );
          if (isMobile) {
            jQuery(this).parent().fadeOut();
          }
        }
      });
    },
  },
  menu = {
    init: function () {
      $menuBtn.click(function () {
        if (navItem == 0) {
          jQuery(this).addClass("active");
          jQuery("html").addClass("menuOpen");
          navItem = 1;
        } else {
          jQuery(this).removeClass("active");
          jQuery("html").removeClass("menuOpen");
          navItem = 0;
        }
      });
      $(document).on("click", ".menubarM .nav-link", function (e) {
        var mnavcur = $(this);
        var mnavbox = $(this).parents("li");
        if (mnavbox.find(".subnav").length > 0) {
          if (mnavbox.hasClass("cur")) {
            mnavbox.find(".subnav").stop(false, false).slideUp();
            mnavbox.removeClass("cur");
          } else {
            jQuery(".menubarM li").removeClass("cur");
            jQuery(".subnav").stop(false, false).slideUp();
            mnavbox.find(".subnav").stop(false, false).slideDown();
            mnavbox.addClass("cur");
            e.preventDefault();
          }
        }
      });
    },
    close: function () {
      $menuBtn.removeClass("active");
      $("html").removeClass("menuOpen");
      navItem = 0;
    },
  },
  scollbanner = {
    init: function () {
      if (!isMobile) {
        $(".tbannerH").css({ height: win_height });
        pageInit.setImgMax(
          jQuery(".tbannerH .load-img"),
          1920,
          989,
          win_width,
          win_height
        );
      } else {
        $(".tbannerH").css({ height: "" });
        $(".tbannerH .load-img").attr({ style: "" });
      }
    },
    setscoll: function () {
      $(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        if (windowTop < win_height && !isMobile) {
          $(".tbanner figure").css(
            "transform",
            "translate(0px," + windowTop / 3.5 + "px)"
          );
        }
      });
    },
  },
  setscolsider = {
    init: function () {
      function b() {
        var s = $(window).scrollTop();
      }
      $(window).scroll(b), b();
    },
  };
$(window).resize(function () {
  pageInit.init();
  scollbanner.init();
});
pageInit.init();
scollbanner.init();
$(document).ready(function () {
  nav.init();
  menu.init();
  pageInit.scollHeader();
  scollbanner.setscoll();
  $(".mobile_dogs_info_card_list").hide();
  $(".mobile_dogs_info_card_list:first").show();
  $(".mobile_dogs_info_card").click(function () {
    var id = $(this).attr("tab-index");
    $(".mobile_dogs_info_card_list").css("display", "none");
    $(".mobile_dogs_info_card").removeClass("active");
    $(this).addClass("active");
    $("." + id).css("display", "block");
  });
  jQuery(".backTop").bind("click", function () {
    jQuery("html, body").stop().animate({ scrollTop: 0 }, 500, "easeInOutExpo");
  });
  jQuery(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    if (windowTop > 140) {
      jQuery(".dock-list").stop(false, false).addClass("showme");
    } else {
      jQuery(".dock-list").stop(false, false).removeClass("showme");
    }
  });
});

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const monthsElement = document.querySelector("#months");

// Get specific date and time in milliseconds from 1970 UTC
let countDownDate = new Date("aug 10, 2021").getTime() ;

setInterval(() => {
  // Get today's date and time in milliseconds from 1970 UTC
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  monthsElement.textContent = months;
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}, 1000);