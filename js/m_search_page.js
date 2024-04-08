$(document).ready(function () {
  $(".m_search").click(function () {
      $(".m_search_page").addClass("open");
      $("body").addClass("body_lock");
  });

  $(".m_search_page_close").click(function (event) {
      event.stopPropagation();
      $(".m_search_page").removeClass("open");
      $("body").removeClass("body_lock");
  });
});