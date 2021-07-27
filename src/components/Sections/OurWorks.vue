<template>
  <section class="our-works">
    <b-container class="container-max-width">
      <b-row class="our-works-height"
             align-content="center"
             align-v="center"
      >
        <b-col cols="12" sm="6">
          <h2 class="text-uppercase heading-page m-0">our works</h2>
        </b-col>
        <b-col cols="12" sm="6" class="our-works__text text-right text">
          <a href="#">
            See All Project in dribble >
          </a>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="p-0">
      <b-row class="m-0">
        <b-col class="w-100 p-0"
               cols="6"
               sm="4"
               md="3"
               lg="2"
               v-for="item in OurWorksImage"
               :key="item.img"
        >
          <a href="#">
            <b-img :src="item.img" class="w-100"/>
          </a>
        </b-col>
      </b-row>
      <b-row align-content="center" align-v="center" class="our-works__bottom text-center m-0">
        <b-col cols="12">
          <button class="button button--active text-uppercase">load more</button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import {getOurWorksImage} from "@/data/const";


export default {
  name: "OurWorks",
  data: function () {
    return {
      OurWorksImage: []
    }
  },
  mounted() {
    this.OurWorksImage = getOurWorksImage()
  }
}
</script>