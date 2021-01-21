// Glide Js Carousel
const slider1 = document.getElementById("glide1");
const glide2 = document.querySelector('#glide2');
const glide3 = document.querySelector('#glide3');
const glide4 = document.querySelector('#glide4');


// Hero
if (slider1){
    new Glide (slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear",
    }).mount();
}

// Latest Product
if (glide2){
  new Glide (glide2, {
      type: "carousel",
      startAt: 0,
      hoverpause: true,
      perView: 4,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
  }).mount();
}

// Testimonial
if (glide3){
  new Glide (glide3, {
      type: "carousel",
      startAt: 0,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
  }).mount();
}

// News
if (glide4){
  new Glide (glide4, {
      type: "carousel",
      startAt: 0,
      autoplay: 3000,
      hoverpause: true,
      perView: 3,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        998: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
  }).mount();
}