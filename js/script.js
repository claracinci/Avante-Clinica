document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("review-carousel");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  let scrollAmount = 0;
  const slideWidth = 280; // largura do card + gap (~250 + 30)

  nextBtn.addEventListener("click", () => {
    scrollAmount += slideWidth;
    if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0; // volta ao início
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener("click", () => {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) {
      scrollAmount = 0; // trava no começo
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
  });
});


const swiper = new Swiper('.polaroid-carousel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



