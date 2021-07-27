<template>
  <section class="expertise">
    <b-container class="inserts container-max-width">
      <b-row class="justify-content-center m-0">
        <b-col cols="12" class="text-center">
          <h2 class="heading heading-page text-uppercase">Expertise</h2>
          <p class="expertise__heading-text">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          <hr class="expertise__hr hr">
        </b-col>
      </b-row>
      <b-row class="m-0">
        <b-col class="border-items p-0 text-center"
               cols="12"
               lg="4"
               v-for="item in expertiseItems"
               :key="item.heading">
          <div class="expertise__item">
            <div :class="item.icon" class="expertise__item-icon mx-auto"></div>
            <h2 class="expertise__item-heading expertise__item-heading-margin text-uppercase">{{ item.heading }}</h2>
            <p class="expertise__item-text m-0 text">{{ item.text }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

</template>

<script>
import {getExpertiseItems} from "@/data/const";

export default {
  name: "Expertise",
  data: function () {
    return {
      expertiseItems: []
    }

  },
  mounted() {
    this.expertiseItems = getExpertiseItems()
  }
}
</script>

<style scoped>

</style>