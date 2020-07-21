function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

/////////// assures proper repositioning of intro  
window.onload = function () {

  // variables
  const intro = document.getElementById('intro');
  const informations = document.getElementById('informations');
  const heading = document.getElementById('heading');
  const buttons = document.getElementsByClassName('location-button');
  //check for missing items
  if (!(informations && heading && intro && buttons)) {
    window.alert('Nie odnaleziono jednego lub więcej waznych identyfikatorów. Strona nie bedzie działać proawidłowo');
    return false;
  }

  //local functions
  function adjustMargin(item) {
    informations.style.marginTop = item.clientHeight + "px"
  }

  function change_location(ev) {
    location.hash = ev.target.dataset.target;
    window.scrollBy(0, -intro.clientHeight);
  }
  change_location = (typeof throttle !== 'undefined') ? throttle(change_location, 500) : change_location;

  //main function flow starts here
  intro.classList.add('regular');
  adjustMargin(heading);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  if (typeof ResizeSensor !== 'undefined') {
    setTimeout(function () {
      new ResizeSensor(intro, function () {
        adjustMargin(intro);
      });
    }, 5000)
  } else {
    window.alert('ResizeSensor nie jest dostępny')
  }

  Array.prototype.forEach.call(
    buttons,
    button => {
      button.addEventListener('click', change_location);
    }
  );



}