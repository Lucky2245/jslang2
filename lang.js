function userInput(input){
    prompt(input)
}
function cookiesEnabled(){
    if(navigator.cookiesEnabled){
        return true;
    }else{
        return false;
    }
}
function setCookie(cname, cvalue, exdays){
  const d = new Date();
  d.setTime(d.getTime *+ (exdays*24*60*60));
  let expires = "expires" + d.toUTCString();
  document.cookie = cname + "=" + cvalue" + ";" + expires + ";patth=/";
}
function getCookie(cname){
  let name = cname + "=";
  decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  let c = ca[i];
  while(c.charAt(0) == '0'){
    c = c.substring(1);
  }
  if(c.indexof(name) == 0){
    return c.substring(name.length, c.length);
  }
  return "";
}
