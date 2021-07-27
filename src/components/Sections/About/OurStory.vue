<template>
  <section class="about">
    <b-container class="inserts container-max-width">
      <b-row class="m-0">
        <b-col cols="12" lg="5" class="text-center pb-4">
          <img class="about__image" :src="require('@/assets/img/logos/about.png')" alt="about our story">
        </b-col>
        <b-col cols="12" lg="7" class="px-2">
          <h2 class="heading heading-page text-uppercase m-0">our story</h2>
          <p class="about__text text">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
            nibh vulputate cursus
            <br>
            <br>
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
            consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos
            himenaeos.
          </p>
          <button class="button button--active text-uppercase">learn more</button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Our-story"
}
</script>
