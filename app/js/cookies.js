
module.exports = {
cookies:class cookies{

static set(cname, cvalue, exMinutes) {
  
  
  var d = new Date();
  d.setTime(d.getTime() + exMinutes*60*1000);
  var expires = "expires="+ d.toUTCString();
  const stringifiedValue =JSON.stringify(cvalue);
  document.cookie = cname + "=" + stringifiedValue + ";" + expires;
}

static  get(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

}
}