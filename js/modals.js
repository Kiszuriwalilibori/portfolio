///////////////////// adds modal functionality to click on small project image

let modal = document.getElementById('large-project-content');
  
function show_modal(ev){
    
    let source = ev.target.parentNode;
    modal.innerHTML = source.innerHTML;
    modal.removeChild(modal.getElementsByClassName('project__name pointer')[0]);
    function hide_modal(){modal.innerHTML ='';}
    
    Array.prototype.forEach.call(
      modal.getElementsByClassName('initial'),
      item =>{item.classList.toggle('initial');}
    )
    const deleting = document.createElement("div");
    deleting.classList.add('icon-delete');
    deleting.addEventListener('click', hide_modal);
    document.getElementById('large-project-content').appendChild(deleting);
    
    Array.prototype.forEach.call(
      modal.getElementsByClassName('project__image'), 
      div => {div.classList.add('large');}
    ); 
}
  
  
Array.prototype.forEach.call(
    document.getElementsByClassName('project-pointer'), 
    div => {  
    div.addEventListener('click',show_modal ); 
    }
);

  