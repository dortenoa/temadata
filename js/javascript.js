function openMe() {
  var open = document.getElementById('clickopen');
  var box = document.getElementById('slideshow-wrapz');
    open.onclick = function() {
    box.className = 'unhide';
  }
}

function openMe2() {
  var open = document.getElementById('clickopen2');
  var box = document.getElementById('slideshow-wrapz');
    open.onclick = function() {
    box.className = 'unhide';
  }
}

function closeMe() {
  var close = document.getElementById('slideshow-wrapz1');
  var box = document.getElementById('slideshow-wrapz');
    close.onclick = function() {
    box.className = 'slideshow-wrapper';
  }
}

function closeMe2() {
  var close = document.getElementById('slideshow-wrapz2');
  var box = document.getElementById('slideshow-wrapz');
    close.onclick = function() {
    box.className = 'slideshow-wrapper';
  }
}
