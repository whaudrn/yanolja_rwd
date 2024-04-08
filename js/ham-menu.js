function rotateHam() {
  const ham = document.querySelector('.ham');
  ham.classList.toggle('rotate');
}
$(function () {
  $(".ham").click(function () {
    $(".ham-page").toggleClass("open");
    $(".ham").toggleClass("open");
    $("body").toggleClass("body_lock");
  });
  $(".ham").click(function (event) {
    event.stopPropagation();
  });
});
