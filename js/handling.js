function resetClasses() {
  "use strict";
  var elements = [
    document.getElementById("red"),
    document.getElementById("blueIn"),
    document.getElementById("blueBottom"),
    document.getElementById("green"),
  ];

  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    if (el) {
      el.className = ""; // Clears all classes
    }
  }
}


function greenAroundBoth() {
  "use strict";
  resetClasses();

  // Get the red box element by its ID
  var redBox = document.getElementById("red");
  var blueIn = document.getElementById("blueIn");
  var greenBox = document.getElementById("green");

  // Add the "red-box" class to the red box
  redBox.classList.add("red-box");

  // Add the "blue-inside" class to the blue box inside the red box
  blueIn.classList.add("blue-inside");

  // Add the "green-box" class to the green box
  greenBox.classList.add("green-box");
}

function blueOffsetInRed() {
  "use strict";
  resetClasses();
  var redBox = document.getElementById("red");
  var blueIn = document.getElementById("blueIn");
  redBox.classList.add("red-box");
  blueIn.classList.add("blue-off");
}

function blueLeftOfRed() {
  "use strict";
  resetClasses();

  var redBox = document.getElementById("red");
  var blueIn = document.getElementById("blueIn");

  redBox.classList.add("red-box-right");

  blueIn.classList.add("blue-left");
}

function blueRightOfRed() {
  "use strict";
  resetClasses();

  var redBox = document.getElementById("red");
  var blueIn = document.getElementById("blueIn");

  redBox.classList.add("red-box");
  blueIn.classList.add("blue-right");
}

function blueUnderRed() {
  "use strict";
  resetClasses();

  // Get the red box element by its ID
  var redBox = document.getElementById("red");
  var blueBottom = document.getElementById("blueBottom");

  redBox.classList.add("red-box");
  blueBottom.classList.add("blue-bottom");
}

function blueInsideRed() {
  "use strict";
  resetClasses();

  // Get the red box element by its ID
  var redBox = document.getElementById("red");
  var blueIn = document.getElementById("blueIn");

  // Create a new div element to represent the blue box
  redBox.classList.add("red-box");
  blueIn.classList.add("blue-inside");
}

// Initialize event listeners for buttons
function init() {
  "use strict";
  var redBox = document.getElementById("red");
  redBox.classList.add("red-box");
  document.getElementById("btn1").addEventListener("click", blueInsideRed);
  document.getElementById("btn2").addEventListener("click", blueUnderRed);
  document.getElementById("btn3").addEventListener("click", blueRightOfRed);
  document.getElementById("btn4").addEventListener("click", blueLeftOfRed);
  document.getElementById("btn5").addEventListener("click", blueOffsetInRed);
  document.getElementById("btn6").addEventListener("click", greenAroundBoth);
}

// Call init() after window loads
window.onload = init;
