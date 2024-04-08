$(function () {
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

$(document).ready(function() {
  function changeImage(element, newImage) {
    $(element).attr('src', newImage);
  }

  function restoreImage(element, originalImage) {
    $(element).attr('src', originalImage);
  }

  // 트위터 아이콘 이벤트
  $('.twiter').hover(
    function() {
      changeImage(this, 'img/icon/twiter2.png');
    },
    function() {
      restoreImage(this, 'img/icon/twiter1.png');
    }
  );

  // 인스타 아이콘 이벤트
  $('.instar').hover(
    function() {
      changeImage(this, 'img/icon/instar2.png');
    },
    function() {
      restoreImage(this, 'img/icon/instar1.png');
    }
  );

  $('.facebook').hover(
    function() {
      changeImage(this, 'img/icon/facebook2.png');
    },
    function() {
      restoreImage(this, 'img/icon/facebook1.png');
    }
  );

  $('.blog').hover(
    function() {
      changeImage(this, 'img/icon/blog2.png');
    },
    function() {
      restoreImage(this, 'img/icon/blog1.png');
    }
  );

  $('.foot_logo').hover(
    function() {
      changeImage(this, 'img/logo/tp-logo.png');
    },
    function() {
      restoreImage(this, 'img/logo/footer_logo.png');
    }
  );
});