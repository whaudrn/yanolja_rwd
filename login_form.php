<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>html5문서</title>
		<link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/login_form.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/footer.js"></script>
        

    <script>
      function goBack() {
        window.history.back();
      }
    </script>
		</head>
	<body>
	<header>
      <h1 id="logo">
        <a href="index.html"><img src="img/logo.jpg" alt="logo" /></a>
      </h1>
      <div class="back">
        <a href="#"><img src="img/icon/back.png" onclick="goBack()" alt="back" /></a>
      </div>
    </header>
    <div class="login-wrap">
    <div class="social">
      <h2>간편 로그인</h2>
      <ul class="sbox">
        <li id="naver">
          <a href="#"><img src="img/nlogin.png" alt="kakao" /></a>
        </li>
        <li id="kakao">
          <a href="#"><img src="img/klogin.png" alt="kakao" /></a>
        </li>
      </ul>
    </div>
    <div class="login">
      <h2>야놀자 로그인</h2>
      <div class="login-box">
        <form name="member_form" method="post" action="login.php">
          <div class="id">
            <label for="name"><img src="img/icon/id.png" alt="id-icon"></label><input type="text" id="name" name="id" />
          </div>
          <div class="password">
            <label for="pwd"><img src="img/icon/pw.png" alt="pw-icon"></label><input type="password" id="pwd" name="pass" />
          </div>
          <div class="submit">
            <input type="submit" value="로그인" />
          </div>
          <div class="center">
            <a href="member_form.php">회원가입</a>
            <span>|</span>
            <a href="id_screen.php" class="mm">아이디찾기</a>
            <span>|</span>
            <a href="pw_screen.php" class="mm">비밀번호찾기</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="m_footer">
    <div class="foot_logo">
      <a href="index.html"><img src="img/logo/footer_logo.png" alt="footer_logo" class="foot_logo" /></a>
    </div>
    <div class="foot_sns">
      <ul>
        <li>
          <div>
            <a href="javascript:;"><img src="img/icon/twiter1.png" alt="twiter" class="twiter" /></a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:;"><img src="img/icon/instar1.png" alt="instar" class="instar" /></a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:;"><img src="img/icon/facebook1.png" alt="facebook" class="facebook" /></a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:;"><img src="img/icon/blog1.png" alt="blog" class="blog" /></a>
          </div>
        </li>
      </ul>
      <div class="foot_menu">
        <ul>
          <li><a href="javascript:;">회사소개</a></li>
          <li><a href="javascript:;">광고제휴문의</a></li>
          <li><a href="javascript:;">인사채용</a></li>
          <li>
            <a href="javascript:;"><span>개인정보처리방침</span></a>
          </li>
          <li><a href="javascript:;">청소년 보호 정책</a></li>
          <li><a href="javascript:;">서비스 이용 약관</a></li>
          <li><a href="javascript:;">위치정보이용약관</a></li>
          <li><a href="javascript:;">사업자 정보확인</a></li>
          <li><a href="javascript:;">전자금융거래 이용약관</a></li>
          <li><a href="javascript:;">전자금융거래 이용자 유의사항</a></li>
        </ul>
      </div>
    </div>
    <div class="foot_text">
      <p>
        (주) 야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br />
        (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송,
        스크래핑 등의 행위는 저작권법 및 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
      </p>
    </div>
    <div class="foot_add">
      <p>
        (주)야놀자 대표이사 :이수진, 김종윤, 배보찬| 사업자 등록번호 :220-87-42885 통신판매업신고 :강남-14211호|
        <em>메일 :help@yanolja.com</em>관광사업자 등록번호 :제2016-31호
        <em>주소 :서울특별시 강남구 테헤란로108길 42</em>
        호스팅서비스 제공자 :주식회사 야놀자고객센터 :1644-1346 (오전 9시 - 익일 새벽 3시)
      </p>
    </div>
    <div class="top-button">
      <a href="#"><img src="img/icon/top1.png" alt="top-button" /></a>
    </div>
  </div>
</body>
</html>