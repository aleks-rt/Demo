// поменять картинку

var $nextPhoto = document.querySelector('#next-photo');

var n = 1;

$nextPhoto.addEventListener('click', nextPhoto)

function nextPhoto() {
    n = n + 1
    pics.innerHTML='<img class="hotel-img" width="600px" src="hotel-photo/отель' + n +'.jpeg"/><button id="next-photo" сlass="btn"> > </button>'
    if (n == 4) {
        n = 0
    }
}


// скрыть или показать текст

var acc = document.querySelectorAll(".accordion");
var i;



for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}







