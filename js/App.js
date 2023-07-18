window.onload = function() {
    if (window.innerWidth > 768 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      ScrollReveal({
        reset: false,
        distance: "100px",
        duration: 0.3,
        delay: 0.1,
      });
      ScrollReveal().reveal('.landing .text', { origin: 'left', duration: 1500 });
      ScrollReveal().reveal('.landing img', { origin: 'right', duration: 1500 });
      ScrollReveal().reveal('.main-tittle', { origin: 'top', duration: 1000, distance: "100px" });
      ScrollReveal().reveal('.articles', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.gallery .box', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.features .box', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.testimonials .box ', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.team .box ', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.our-skills ', { origin: 'right', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.our-skills img ', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.work-steps .box  ', { origin: 'left', duration: 1000, distance: "500px" });
      ScrollReveal().reveal('.services .box ', { origin: 'left', duration: 1500, distance: "500px" });
      ScrollReveal().reveal('.stats h2', { origin: 'top', duration: 1000, distance: "100px" });
      ScrollReveal().reveal('.preview img', { origin: 'right', duration: 1000, distance: "300px" });
      ScrollReveal().reveal('.discount .image', { origin: 'left', duration: 1000, distance: "300px" });
      ScrollReveal().reveal('.form', { origin: 'right', duration: 1000, distance: "300px" });
      ScrollReveal().reveal('.events .container', { origin: 'left', duration: 1000, distance: "400px" });
    }
  };

/* ================= To Scroll Up ================*/
const scrollUp = document.querySelector(".up");
scrollUp.onclick = () => {
    window.scrollTo({ top: 0, behavior:'smooth'});
};


/*================== Events =================== */

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dataNow = new Date().getTime();
  let dateDif = countDownDate - dataNow;

  // Get Time Units
  let days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDif % (1000 * 60)) / 1000);

  document.querySelector('.time .unit:nth-child(1) .time-number').innerHTML = days;
  document.querySelector('.time .unit:nth-child(2) .time-number').innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector('.time .unit:nth-child(3) .time-number').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector('.time .unit:nth-child(4) .time-number').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDif <= 0) {
    clearInterval(counter);
  }
}, 1000);

/* =================== Stats && Skills ================= */

let numbers = document.querySelectorAll(".number");
let sectionStats = document.querySelector(".stats");
let started = false;
let section = document.querySelector(".our-skills");
let spans = Array.from(document.querySelectorAll(".the-progress span"));

window.onscroll = () =>{
/* ================= To Scroll Up ================*/
    this.scrollY >= 1500 ? scrollUp.classList.add("show") : scrollUp.classList.remove("show")

    if (window.scrollY >= section.offsetTop ) {
        spans.forEach(span => span.style.width = span.dataset.width);
      }
      
    if(window.scrollY >= sectionStats.offsetTop - 100){
        if(!started){
            numbers.forEach(num => startCount(num));
        }
        started = true;
    }
}

function startCount(el){
    let goal = el.dataset.goal; 
    let count = setInterval(() =>{
        el.textContent++;
        if( el.textContent == goal){
            clearInterval(count)
        }
    }, 2000 / goal);
};

