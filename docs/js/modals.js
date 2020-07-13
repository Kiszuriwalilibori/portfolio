///////////////////// adds modal functionality to click on small project image

let modal = document.getElementById('large-project-content');
let large_project = document.getElementById('large-project-content');

function show_modal(ev) {

  let source = ev.target.parentNode;
  modal.innerHTML = source.innerHTML;
  modal.removeChild(modal.getElementsByClassName('project__name pointer')[0]);

  function hide_modal() {
    modal.innerHTML = '';
  }

  Array.prototype.forEach.call(
    modal.getElementsByClassName('initial'),
    item => {
      item.classList.toggle('initial');
    }
  )
  const delete_button = document.createElement("div");
  delete_button.classList.add('icon-delete');
  delete_button.addEventListener('click', hide_modal);

  large_project.style.display = 'block';
  large_project.appendChild(delete_button);
  large_project.classList.add('large');

  Array.prototype.forEach.call(
    modal.getElementsByClassName('project__image'),
    div => {
      div.classList.add('large');
    }
  );

  location.hash = "projects";
  window.scrollBy(0, -document.getElementById('intro').clientHeight);

}

Array.prototype.forEach.call(
  document.getElementsByClassName('project-pointer'),
  div => {
    div.addEventListener('click', show_modal);
  }
);