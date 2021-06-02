//popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

  //Nightmode

  var timesClicked = 0;
  function nightMode() {
      timesClicked++;
      if (timesClicked % 2 == 0) {
          document.body.style.background = 'white';
      } else {
          document.body.style.background = 'black';
      }

  }