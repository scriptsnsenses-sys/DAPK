function sayHi(){
  document.getElementById('msg').textContent = 'Built on Codemagic at ' + new Date().toLocaleTimeString();
  if(navigator.vibrate) navigator.vibrate(50);
}
