// Get the back-to-top element:
let backTop = document.getElementById("back-to-top");

// When the user scrolls down 50px from the top of the document, show the element
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}
