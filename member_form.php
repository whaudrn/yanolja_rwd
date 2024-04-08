<? 
	session_start(); 
?>
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>html5문서</title>
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/member.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script>
   function check_id()
   {
     window.open("check_id.php?id=" + document.member_form.id.value,
         "IDcheck",
          "left=200,top=200,width=200,height=60,scrollbars=no,resizable=yes");
   }



//let reg_pw2 = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/; // 문자와 특수문자 조합의 6~24 자리

function check_input()
   {
   // const re1 = /^[a-zA-Z0-9]{4,12}$/ ;  //가능하다
   const re1 =/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,10}$/;
    const id=document.member_form.id.value;
      if (!document.member_form.id.value)
      {
          alert("아이디를 입력하세요");    
          document.member_form.id.focus();
          return;
      }else if(!re1.test(id)){
        alert("6~10자의 영문자,숫자,특수기호 혼합해서 사용할 수 있습니다");
    return false;
      }


      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }
      
      if (!document.member_form.hp.value)
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.hp.focus();
          return;
      }


      if (!document.member_form.email.value)
      {
          alert("Email을 입력하세요");    
          document.member_form.email.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

    



      //휴대전화번호 체크
const hp1=document.member_form.hp.value;
const re2= /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
if (!re2.test(hp1)) {
          alert('휴대전화번호를 다시 입력해주세요.'); 
          return false;
      }



// 이메일 체크
const email=document.member_form.email.value;
//const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 //위의 식도 가능하다
const re=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
if (!re.test(email)) {
    alert("@를 포함해서 입력해주세요");
    return false;
        
    }

          
      document.member_form.submit();
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp.value = "";
         document.member_form.email.value = "";
	  
      document.member_form.id.focus();

      return;
   }

      function goBack() {
        window.history.back();
      }
    </script>
		</head>
		
		
		<body>
      <div id="member-wrap">
        <header>
      <h1 id="logo">
        <a href="index.html"><img src="img/logo.jpg" alt="logo" /></a>
      </h1>
      <div class="back">
        <a href="#"><img src="img/icon/back.png" onclick="goBack()" alt="back" /></a>
      </div>
    </header>

    <div class="member">
      <form name="member_form" action="insert.php" method="post">
        <fieldset>
          <legend class="skip">회원가입</legend>
          <p class="p1">회원가입하고 다양한 혜택을 누리세요!</p>
          <p class="p2"><span>*</span>필수 입력 정보입니다.</p>

          <div class="id">
            <label for="id"><b>아이디<span>*</span></b></label>
            <input type="text" size="18" maxlength="16" autofocus id="id" required name="id"/>
            <input class="button1" type="button" value="중복확인" onclick="check_id()"/>
          </div>

          <div class="pass">
            <label for="pass"
              ><b>비밀번호<span>*</span></b></label
            >
            <input type="password" name="pass" id="pass" maxlength="16" autofocus placeholder="(8~16자의 영문,숫자,특수기호)" required />
          </div>

          <div class="pass_confirm">
            <label for="pass_confirm"
              ><b>비밀번호 재확인<span>*</span></b></label
            >
            <input type="password" name="pass_confirm" id="pass_confirm" maxlength="16" autofocus required />
          </div>

          <div class="name">
            <label for="name"
              ><b>이름(실명)<span>*</span></b></label
            >
            <input type="text" size="12" maxlength="16" autofocus id="name" required name="name"/>
          </div>

          <div class="hp">
            <label for="hp"
              ><b>휴대전화<span>*</span></b></label
            >
            <input type="tel" maxlength="11" pattern="[0-9]{11}" required id="hp" name="hp"/>
            
          </div>

          <div class="email">
            <label for="email"
              ><b>이메일<span>*</span></b></label
            >
            <input type="email" id="email" name="email"/>
          </div>
        </fieldset>
      </form>
    </div>

    <div class="join" onclick="check_input()">
      <input type="submit" value="가입하기" />
    </div>
  </div>
		</body>
		</html>