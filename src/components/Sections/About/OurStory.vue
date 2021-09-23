<template>
  <section class="about">
    <b-container class="inserts container-max-width">
      <b-row class="m-0">
        <b-col class="text-center pb-4" cols="12" lg="5">
          <img :src="require('@/assets/img/logos/about.png')" alt="about our story" class="about__image">
        </b-col>
        <b-col class="px-2" cols="12" lg="7">
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
    <b-container>
      <b-col cols="12">
        <h1>video-background</h1>
        <video-background
            :src="require(`@/assets/video/menu-05-convert.mp4`)"
            muted
            preload='auto'
            style="max-height: 400px; height: 100vh; width: 1000px"
        >
        </video-background>
      </b-col>
      <b-col cols="12">
        <h1>HTML 5 video</h1>
        <video
          controls
          muted
          playsinline
          autoplay
          loop
          preload="auto"
          width="1000"
          >
          <source :src="require(`@/assets/video/menu-05-convert.mp4`)" type="video/mp4">
        </video>
      </b-col>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Our-story"
}
</script>
