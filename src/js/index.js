document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.popular__slider', {
    init: false,
    width: 870,
    centeredSlides: false,
    slidesPerView: 3, // Reduce the number of visible slides
    spaceBetween: 48,
    loop: true,
    touchEventsTarget: 'container',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<input type="radio" name="swiper-pagination" class="${className}" ${index === 0 ? 'checked' : ''}>`;
      },
    },
  });

  swiper.init();
});