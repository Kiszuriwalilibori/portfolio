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
window.onload = function() {
    
  var element = document.getElementById('intro');
  element.classList.add('regular');
  
  document.getElementById('informations').style.marginTop = document.getElementById('heading').clientHeight +"px";
  window.scrollTo({top: 0,  behavior: 'smooth'});
  
  setTimeout(function(){
    new ResizeSensor(element, function() {
    document.getElementById('informations').style.marginTop = element.clientHeight +"px";
    });
  } ,5000
  )
  
  function change_location(ev){
        location.hash = ev.target.dataset.target;
        window.scrollBy(0,-document.getElementById('heading').clientHeight);
      }
      
  change_location = throttle(change_location, 1000);
  
  Array.prototype.forEach.call(
    document.getElementsByClassName('location-button'), 
    button => {   
      button.addEventListener('click', change_location ); 
    }
  );
}
  