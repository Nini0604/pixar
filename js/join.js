function resultEmail(){
  var selectEmail = document.getElementById("selectEmail");
  var email = document.getElementById("useremail2");

  switch(selectEmail.value){
    case "naver.com":
    case "gmail.com":
    case "daum.net":
    case "nate.com": email.value = selectEmail.value;email.readOnly=true;  break;
    case "direct": email.value=""; email.focus(); break;
  }
}
