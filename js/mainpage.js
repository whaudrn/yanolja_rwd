$(function () {
    // 필터링 함수 정의
    function filterImages() {
        // 각 셀렉트 박스에서 선택된 값을 가져옵니다.
        const roomType = $('#roomtype').val();
        const reservationType = $('#reservationtype').val();
        const grade = $('#grade').val();
        const bed = $('#bed').val();
        const bath = $('#bath').val();

        // 이미지를 필터링하고 표시합니다.
        $('.room li').each(function () {
            const li = $(this);
            const img = li.find('img');
            const tags = img.data('tags').split(',');

            // 선택된 값이 이미지의 태그와 모두 일치하는지 확인합니다.
            const isVisible =
                (roomType === 'ALL' || tags.includes(roomType)) &&
                (reservationType === 'ALL' || tags.includes(reservationType)) &&
                (grade === 'ALL' || tags.includes(grade)) &&
                (bed === 'ALL' || tags.includes(bed)) &&
                (bath === 'ALL' || tags.includes(bath));

            // 숙소가 보이는 경우 추가 조건을 확인하여 숙소를 숨기거나 보여줍니다.
            if (isVisible) {
                li.show();
            } else {
                li.hide();
            }
        });
    }

    // 셀렉트 박스 변경 이벤트 핸들러 등록
    $('select').on('change', filterImages);

    // 초기화 버튼 클릭 이벤트 핸들러 등록
    $('.select-reset').on('click', function () {
        // 셀렉트 박스의 값을 모두 초기화합니다.
        $('select').val('ALL');

        // 각 셀렉트 박스의 selectedIndex를 0으로 설정하여 기본 텍스트를 선택합니다.
        $('select').each(function () {
            this.selectedIndex = 0;
        });

        // 필터링 함수 호출하여 이미지 표시 초기화
        filterImages();
    });

    // 정렬 셀렉트 박스 변경 이벤트 핸들러 등록
    $('#order').on('change', function () {
        const order = $(this).val();
        const list = $('.room ul');

        // 각 숙소의 데이터를 가져옵니다.
        const items = list.children('li').get();

        // 정렬 기준에 따라 숙소를 정렬합니다.
        items.sort(function (a, b) {
            const aValue = parseFloat($(a).data(order));
            const bValue = parseFloat($(b).data(order));

            if (order === 'score' || order === 'review') {
                return bValue - aValue; // 내림차순
            } else if (order === 'hprice') {
                return parseFloat(b.dataset.price) - parseFloat(a.dataset.price); // 내림차순
            } else if (order === 'lprice') {
                return parseFloat(a.dataset.price) - parseFloat(b.dataset.price); // 오름차순
            }
            
        });

        // 정렬된 숙소를 다시 추가합니다.
        $.each(items, function (index, item) {
            list.append(item);
        });
    });
});
