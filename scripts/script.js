


let toggleBtn = document.querySelector('#btn-toggle');
let plantExchange = document.querySelector('#article-form');

toggleBtn.addEventListener('click', function() {

  plantExchange.style.display = 'block'
  plantExchange.classList.toggle('.slide');
})
