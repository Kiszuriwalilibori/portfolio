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
  
        setTimeout(function() {
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

  const element = document.getElementById('intro');
  const informations = document.getElementById('informations');
  const heading = document.getElementById('heading');
  const intro = document.getElementById('intro');
  if (! (element && informations && heading && intro)){window.alert('Nie odnaleziono jednego lub więcej waznych identyfikatorów. Strona nie bedzie działać proawidłowo'); return false;}

  element.classList.add('regular');
  informations.style.marginTop = heading.clientHeight + "px";
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  if (typeof ResizeSensor !== 'undefined') {
    setTimeout(function () {
      new ResizeSensor(element, function () {
        informations.style.marginTop = element.clientHeight + "px";
      });
    }, 5000)
  } else {
    window.alert('ResizeSensor nie jest dostępny')
  }

  function change_location(ev) {
    location.hash = ev.target.dataset.target;
    window.scrollBy(0, -intro.clientHeight);
  }

  change_location = (typeof throttle !== 'undefined')? throttle(change_location, 500):change_location;
  
  Array.prototype.forEach.call(
    document.getElementsByClassName('location-button'),
    button => {
      button.addEventListener('click', change_location);
    }
  );

}