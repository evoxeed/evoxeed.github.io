<template>
  <section class="review bg">
    <b-container class="container-max-width">
      <div class="swiper-container">
        <div class="review__description swiper-wrapper text-center">
          <div class="swiper-slide" v-for="i in 5" :key="i">
            <h2 class="review__quotes heading">“</h2>
            <p class="review__text heading">This is Photoshop's version of Lorem Ipsum. Proin
              gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet
              nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
              auctor a ornare odio.
              Sed non mauris vitae erat consequat auctor eu in elit.</p>
            <p class="review__name heading text-uppercase">jane galadriel</p>
            <p class="review__profession text text-uppercase">ceo tengkurep</p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </b-container>
  </section>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, {Pagination} from 'swiper/core';

SwiperCore.use([Pagination]);

export default {
  name: "Review",
  mounted() {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      initialSlide: 2,
      loop: true,
      type: 'custom',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '" ' + 'style="background-image: url(' + require(`@/assets/img/avatars/${index + 1}.png`) + ')"' + '>' + '</span>';
        }
      }
    });
  }
}
</script>