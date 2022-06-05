red = [0, 100, 63];
green = [87, 98, 28];

letterColors = [red, green, white];

mouseResponseThreshold = 500
friction = 0.85
rotationForce = 0.015

message = 'Welcome!';

drawName(message, letterColors);
bounceBubbles();

function open(tabContent) {
  // Define variables
  var i, tabcont, tablinks;
  
  // Hide whose class is "tabcont"
  tabcont = document.getElementsByClassName("tabcont");
  for (i = 0; i < tabcont.length; i++){
    tabcont[i].style.display = "none";
  }
  
  // Remove the class "active from those whose classes are "tablinks"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  
  // Show current tab and append "active" class to the tab-opening button
  document.getElementById(tabContent).style.display = "block";
  evt.currentTarget.className += " active";
}
