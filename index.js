red = [0, 100, 63];
green = [87, 98, 28];

letterColors = [red, green, white];

mouseResponseThreshold = 500
friction = 0.85
rotationForce = 0.015

message = 'Welcome!';

drawName(message, letterColors);
bounceBubbles();

function open(sectionName) {
  // Define variables
  var i;
  var x = document.getElementsByClassName("tabcont");
  
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  
  document.getElementById(tabContent).style.display = "block";
}
