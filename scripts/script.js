
// const articleForm = document.querySelector('#article-form')

// let showOrHide = function(){
//     articleForm.style.display = 'block'
// }

let toggleBtn = document.querySelector('#btn-toggle');
let plantExchange = document.querySelector('#article-form');

toggleBtn.addEventListener('click', function() {
  // toggleBtn.classList.toggle('is-closed');
  plantExchange.style.display = 'block'
  plantExchange.classList.toggle('.slide');
})
