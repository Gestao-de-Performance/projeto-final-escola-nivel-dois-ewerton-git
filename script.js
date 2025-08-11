        // ----- MENU HAMBURGUER ----- //
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

        //-----  CARROSSEL DE IMAGENS ------ //
        
const carrosselSlide = document.querySelector('.slideProjetos');
const carrosselImagens = document.querySelectorAll('.slideProjetos img');
const avancarBtn = document.querySelector('.avancarCarrossel');
const voltarBtn = document.querySelector('.voltarCarrossel');
let indice = 0;

function atualizarLarguraSlide() {
  return carrosselImagens[0].clientWidth;
}

function moveSlide() {
  const larguraSlide = atualizarLarguraSlide();
  carrosselSlide.style.transform = `translateX(${-larguraSlide * indice}px)`;
}

avancarBtn.addEventListener('click', () => {
  if (indice >= carrosselImagens.length - 1) {
    return;
  }
  indice++;
  moveSlide();
});

voltarBtn.addEventListener('click', () => {
  if (indice <= 0) {
    return;
  }
  indice--;
  moveSlide();
});
setInterval(() => {
   if (indice >= carrosselImagens.length - 1) {
     indice = 0;
   } else {
     indice++;
   }
  moveSlide();
}, 3000);

