$(function () {
  function mobile() {
    $(".mobile-slide").stop().animate({ marginTop: "-521px" }, function () {
        $(".mobile-slide li:first").appendTo(".mobile-slide");
        $(".mobile-slide").css({ marginTop: "0px" });
      });
  }
  setInterval(mobile, 3000);
});
