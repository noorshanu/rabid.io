$(function () {
  $("#toggle").click(function () {
    $(this).html(
      $("#content").is(":hidden")
        ? '<a class="iconmore"  href="javascript:;">FARMS HIDE<svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM OCaiv animate-bounce-down1"><path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path></svg></a>'
        : '<a class="iconmore"  href="javascript:;">FARMS MORE<svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM OCaiv animate-bounce-down"> <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path> </svg></a>'
    );
    $("#content").slideToggle();
  });
  $(".sc-ljsmAU").on("click", function () {
    if ($(this).next(".sc-kizEQm").hasClass("emLlLs")) {
      $(this).children("div").html("Hide");
      $(this).next(".sc-kizEQm").removeClass("emLlLs").addClass("emLlLs2");
    } else if ($(this).next(".sc-kizEQm").hasClass("emLlLs2")) {
      $(this).children("div").html("Details");
      $(this).next(".sc-kizEQm").removeClass("emLlLs2").addClass("emLlLs");
    }
  });
  $(".help").hover(
    function () {
      $(this).parents().prev(".kAanRB").show();
    },
    function () {
      $(this).parents().prev(".kAanRB").hide();
    }
  );
  $(".blue_btn").on("click", function () {
    alert("success");
    return false;
  });
  $(".bmovin").on("click", function () {
    $(".gmORUi").hide();
    $(".tanchuang2").hide();
  });
  $(".jYafBm2").on("click", function () {
    $(".gmORUi").hide();
  });
  $(".gBGSmg").on("click", function () {
    $(".gmORUi").hide();
  });
  $(".llmgHW").on("click", function () {});
  $(".apr-icon").on("click", function () {
    $(".tanchuang2").show();
  });
  $(".withdraw-btn").on("click", function () {});
  $(".poster_img").click(function () {
    $(this).hide();
    var videos = $(this).siblings("video");
    videos[0].play();
  });
  $(".video").click(function () {
    $(this).siblings("img").show();
    $(this)[0].pause();
  });
  $(".feature_row_video").each(function () {
    $(this).click(function () {
      var img = $(this).attr("vpath");
      var video = $(this).attr("ipath");
      $(".videos").html(
        '<video id="video_close"  poster=\'' +
          img +
          "' style='width: 100%;' src='" +
          video +
          '\' preload="auto" controls="controls" autoplay="autoplay"></video><img onClick="close1()" class="vclose" src="images/close.png"/>'
      );
      $(".Celebrities-video").show();
      $(".videos").show();
      $(".video-box").show();
    });
  });
  $(".feature_row_video2").each(function () {
    $(this).click(function () {
      var img = $(this).attr("vpath");
      var video = $(this).attr("ipath");
      $(".videos2").html(
        '<video id="video_close2"  poster=\'' +
          img +
          "' style='width: 100%;' src='" +
          video +
          '\' preload="auto" controls="controls" autoplay="autoplay"></video><img onClick="close2()" class="vclose" src="images/close.png"/>'
      );
      $(".Celebrities-video").show();
      $(".videos2").show();
      $(".video-box2").show();
    });
  });
});
function close1() {
  var v = document.getElementById("video_close");
  $(".Celebrities-video").css("display", "none");
  $(".videos").css("display", "none");
  $(".video-box").css("display", "none");
  v.pause();
  $(".videos").html();
}
function close2() {
  var v2 = document.getElementById("video_close2");
  $(".Celebrities-video").css("display", "none");
  $(".videos2").css("display", "none");
  $(".video-box2").css("display", "none");
  v2.pause();
  $(".videos2").html();
}
function copyText() {
  var text = document.getElementById("text").innerText;
  var input = document.getElementById("input");
  input.value = text;
  input.select();
  document.execCommand("copy");
  alert("Copy succeeded");
}
