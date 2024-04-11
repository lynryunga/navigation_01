let indicator = document.querySelector('#indicator');
let items = document.querySelectorAll('nav a');

function maker(e) {
  indicator.style.left = e.offsetLeft+"px";
  indicator.style.width = e.offsetWidth+"px";
}

items.forEach(link => {
  link.addEventListener('click', (e) => {
    maker(e.target);
  })
});