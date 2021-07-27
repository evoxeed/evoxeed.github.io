<template>
  <footer class="footer bg">
    <b-container class="container-max-width">
      <b-row class="text-center text-lg-left">
        <b-col cols="12" lg="4" class="footer__item d-flex flex-column justify-content-between px-2">
          <div>
            <img :src="require('@/assets/img/logos/header.png')" class="footer__logo d-inline-block align-bottom"
                 alt="tajam logo">
            <span class="logo-text align-bottom">tajam</span>
          </div>
          <p class="footer__text text">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
            elit. Duis sed odio sit amet
            auctror a ornare odio non mauris vitae erat in elit</p>
        </b-col>

        <b-col cols="12" lg="4" class="footer__item d-flex flex-column justify-content-between px-2">
          <h3 class="footer-title d-flex align-items-center text-uppercase m-0">our studio</h3>
          <div class="footer-contacts d-flex">
            <img class="footer-contacts__img" :src="require('@/assets/img/footer/marker.png')">
            <span  class="text">Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
            11480 - Indonesia</span>
          </div>
          <div class="footer-contacts d-flex">
            <img class="footer-contacts__img" :src="require('@/assets/img/footer/phone.png')">
            <a href="tel:(+62) 21-2224 3333" class="text">(+62) 21-2224 3333</a>
          </div>
        </b-col>
        <b-col cols="12" lg="4" class="footer__item d-flex flex-column justify-content-between px-2">
          <h3 class="footer-title d-flex align-items-center text-uppercase m-0">stay in touch</h3>
          <form class="footer-subscribe d-flex align-items-center">
            <input class="footer-subscribe__input" name="email" type="email" placeholder="Subscribe our newsletter">
            <button class="footer-subscribe__btn"/>
          </form>
          <div class="footer-socials d-flex">
            <a class="footer-socials__item facebook-icon m-1" href="#"></a>
            <a class="footer-socials__item twitter-icon m-1" href="#"></a>
            <a class="footer-socials__item dribbble-icon m-1" href="#"></a>
            <a class="footer-socials__item instagram-icon m-1" href="#"></a>
            <a class="footer-socials__item gplus-icon m-1" href="#"></a>
            <a class="footer-socials__item youtube-icon m-1" href="#"></a>
          </div>
        </b-col>
      </b-row>
      <b-row class="footer-bottom justify-content-between mx-0">
        <b-col cols="6" class="p-0">
          <div class="footer-bottom__menu">
            <a href="#" class="footer-bottom__item mr-1 mr-lg-4">HELP</a>
            <a href="#" class="footer-bottom__item mr-1 mr-lg-5">TERM &amp; CONDITION</a>
            <a href="#" class="footer-bottom__item ">PRIVACY</a>
          </div>
        </b-col>
        <b-col cols="6" class="p-0 text-right">
          <span>Copyright © 2015 - Tajam Creative</span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>