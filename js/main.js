const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
// cardButton.addEventListener('click', function(event){
//       // console.log('ghbdtn');
//       modal.classList.add("is-open");
// })
cardButton.onclick = function(){
    modal.classList.add("is-open");
}

close.onclick = function(){
      // console.log('CLIK');
      modal.classList.remove("is-open");
}
new WOW().init();