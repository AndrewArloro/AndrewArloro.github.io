function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

red = [0, 100, 63];
green = [87, 98, 28];

letterColors = [red, green, white];

mouseResponseThreshold = 500
friction = 0.55
rotationForce = 0.500

message = 'Welcome!';

drawName(message, letterColors);
bounceBubbles();
