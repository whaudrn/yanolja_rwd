$(function () {
  // pc 체크인 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  $('.checkin').datepicker({
    dateFormat: 'mm월dd일',
    minDate: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    yearSuffix: '년',
    showMonthAfterYear: true,
    showButtonPanel: true,

    closeText: '초기화',
    onClose: function () {
      if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
        $(this).val('');
        $('.checkin').css('background-color', '#fff');
        $('.checkin').css('color', 'inherit');
      }
    },
    onSelect: function (selectedDate) {
      $('.checkout').datepicker('option', 'minDate', selectedDate);
      $('.checkin').css('background-color', '#ff3e72');
      $('.checkin').css('color', '#fff');
      $('.checkin').css('opacity', '0.7');
    },
  });

  // pc 체크아웃 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  $('.checkout').datepicker({
    dateFormat: 'mm월dd일',
    minDate: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    yearSuffix: '년',
    showMonthAfterYear: true,
    showButtonPanel: true,
    closeText: '초기화',
    onClose: function () {
      if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
        $(this).val('');
        $('.checkout').css('background-color', '#fff');
        $('.checkout').css('color', 'inherit');
      }
    },
    onSelect: function (selectedDate) {
      $('.checkin').datepicker('option', 'maxDate', selectedDate);
      $('.checkout').css('background-color', '#ff3e72');
      $('.checkout').css('color', '#fff');
      $('.checkout').css('opacity', '0.7');
    },
  });
});

$(function () {
  // 모바일 체크인 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  $('.m_checkin').datepicker({
    dateFormat: 'mm월dd일',
    minDate: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    yearSuffix: '년',
    showMonthAfterYear: true,
    showButtonPanel: true,
    closeText: '초기화',
    onClose: function () {
      if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
        $(this).val('');
        $('.m_checkin').css('background-color', '#fff');
        $('.m_checkin').css('color', 'inherit');
      }
    },
    onSelect: function (selectedDate) {
      $('.m_checkout').datepicker('option', 'minDate', selectedDate);
      $('.m_checkin').css('background-color', '#ff3e72');
      $('.m_checkin').css('color', '#fff');
      $('.m_checkin').css('opacity', '0.7');
    },
  });

  // 모바일 체크아웃 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  $('.m_checkout').datepicker({
    dateFormat: 'mm월dd일',
    minDate: 0,
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    yearSuffix: '년',
    showMonthAfterYear: true,
    showButtonPanel: true,
    closeText: '초기화',
    onClose: function () {
      if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
        $(this).val('');
        $('.m_checkout').css('background-color', '#fff');
        $('.m_checkout').css('color', 'inherit');
      }
    },
    onSelect: function (selectedDate) {
      // 체크아웃 날짜 선택 시, 체크인 필드에 최대 날짜 설정
      $('.m_checkin').datepicker('option', 'maxDate', selectedDate);
      $('.m_checkout').css('background-color', '#ff3e72');
      $('.m_checkout').css('color', '#fff');
      $('.m_checkout').css('opacity', '0.7');
    },
  });
});

// 인원수---------------------------------------------------------------------------

function toggleDropdown(type) {
  var dropdownContent;
  if (type === 'pc') {
    dropdownContent = document.querySelector('#pc_dropdown .dropdown_content');
  } else if (type === 'mobile') {
    dropdownContent = document.querySelector('#mobile_dropdown .m_dropdown_content');
  }
  dropdownContent.classList.toggle('show');
}

function updateSelectedGuests(type) {
  let adultCount = parseInt(document.getElementById(type + '_adult_count').textContent);
  let childCount = parseInt(document.getElementById(type + '_child_count').textContent);
  let petCount = parseInt(document.getElementById(type + '_pet_count').textContent);

  let selectedGuests;
  if (type === 'pc') {
    selectedGuests = document.querySelector('#pc_dropdown .dropdown_toggle');
  } else if (type === 'mobile') {
    selectedGuests = document.querySelector('#mobile_dropdown .m_dropdown_toggle');
  }

  let text = '';

  if (adultCount > 0) {
    text += `성인 : ${adultCount} `;
  }
  if (childCount > 0) {
    text += `어린이 : ${childCount} `;
  }
  if (petCount > 0) {
    text += `반려동물 : ${petCount}`;
  }

  if (text.trim() === '') {
    selectedGuests.textContent = '인원수';
  } else {
    selectedGuests.textContent = text.trim();
  }
}

function increment(type, guestType) {
  event.stopPropagation();
  var countElement = document.getElementById(type + '_' + guestType + '_count');
  var count = parseInt(countElement.textContent);
  countElement.innerHTML = `&nbsp;${count + 1}&nbsp;`;
  updateSelectedGuests(type);
}

function decrement(type, guestType) {
  event.stopPropagation();
  var countElement = document.getElementById(type + '_' + guestType + '_count');
  var count = parseInt(countElement.textContent);
  if (count > 0) {
    countElement.innerHTML = `&nbsp;${count - 1}&nbsp;`;
    updateSelectedGuests(type);
  }
}

function resetCounts(type) {
  event.preventDefault();
  event.stopPropagation();
  var counts;
  if (type === 'pc') {
    counts = document.querySelectorAll('#pc_dropdown .guest_count');
  } else if (type === 'mobile') {
    counts = document.querySelectorAll('#mobile_dropdown .m_guest_count');
  }
  counts.forEach(function (count) {
    count.innerHTML = '&nbsp;0&nbsp;';
  });
  updateSelectedGuests(type);
}

window.addEventListener('click', function (event) {
  var mobileDropdownContent = document.getElementById('mobile_dropdown').querySelector('.m_dropdown_content');
  var pcDropdownContent = document.getElementById('pc_dropdown').querySelector('.dropdown_content');

  if (!event.target.matches('.m_dropdown_toggle') && !event.target.matches('.dropdown_toggle')) {
    if (!event.target.closest('.m_dropdown_content') && !event.target.closest('.dropdown_content')) {
      mobileDropdownContent.classList.remove('show');
      pcDropdownContent.classList.remove('show');
      updateSelectedGuests('mobile');
      updateSelectedGuests('pc');
    }
  }
});

$(document).ready(function () {
  $('.dropdown_toggle').on('DOMSubtreeModified', function () {
    var value = $(this).text().trim();
    if (value !== '인원수') {
      $(this).css('background-color', '#ff3e72');
      $(this).css('color', '#fff');
      $(this).css('opacity', '0.7');
    } else {
      $(this).css('background-color', '#fff');
      $(this).css('color', 'inherit');
    }
  });
});
$(document).ready(function () {
  $('.m_dropdown_toggle').on('DOMSubtreeModified', function () {
    var value = $(this).text().trim();
    if (value !== '인원수') {
      $(this).css('background-color', '#ff3e72');
      $(this).css('color', '#fff');
      $(this).css('opacity', '0.7');
    } else {
      $(this).css('background-color', '#fff');
      $(this).css('color', 'inherit');
    }
  });
});
