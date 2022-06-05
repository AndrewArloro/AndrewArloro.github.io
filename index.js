red = [0, 100, 63];
green = [87, 98, 28];

letterColors = [red, green, white];

mouseResponseThreshold = 500
friction = 0.75
rotationForce = 0.745

message = 'Welcome!';

drawName(message, letterColors);
bounceBubbles();

function open(sectionName) {
  // Define variables
  var i;
  var x = document.getElementsByClassName("tabcont");
  
  for (i = 0; i < x.length; i++) {
    x[i] = style.display = "none";
  }
  document.getElementById(sectionName).style.display = "block";
}
