const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let latestSlide = slides.length - 1;


nextBtn.addEventListener("click", function () { 
  
  if (currentSlide === latestSlide) {
    currentSlide = 0
  } else {
    currentSlide ++
  }

  //100 % slide move
  slides.forEach((slide, index) => {
    // slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    slide.style.transform = "translateX(" + 100 * (index - currentSlide) + "%)";
  })

})
 
prevBtn.addEventListener("click", function () {

  if (currentSlide === 0) {
    currentSlide = latestSlide;
  } else {
    currentSlide--;
  }

  //-100 % slide move
  slides.forEach((slide, index) => {
    // slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    slide.style.transform = "translateX(" + 100 * (index - currentSlide) + "%)";
  });
})