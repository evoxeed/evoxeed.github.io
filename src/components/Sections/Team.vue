<template>
  <section class="team bg">
    <b-container class="inserts text-white container-max-width">
      <b-row class="justify-content-center m-0">
        <b-col cols="12" class="text-center">
          <h2 class="heading heading-page heading-margin text-uppercase">meet our amazing team</h2>
          <p class="team__heading">Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          <hr class="team__hr hr">
        </b-col>
        <b-container class="p-0 container-max-width">
          <b-row class="m-0">
            <b-col class="team-item-padding text-center"
                   cols="12"
                   lg="3"
                   sm="6"
                   v-for="item in teamItems"
                   :key="item.heading">
              <template class="team__item">
                <div class="team__avatar" :style="{ background: 'url(' + item.img + ')'}"></div>
                <div class="team__item-text">
                  <h2 class="team__item-heading text-uppercase">{{ item.heading }}</h2>
                  <p class="team__item-title text text-uppercase">{{ item.subHeading }}</p>
                </div>
              </template>
            </b-col>
          </b-row>
        </b-container>
        <b-col cols="12" class="team__description-margin text-center">
          <p class="team__description-text">Become part of our dream team, let’s join us !</p>
          <button class="button button--active text-uppercase">we are hiring</button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import {getTeamItems} from "@/data/const";

export default {
  name: "Team",
  data: function () {
    return {
      teamItems: []
    }
  },
  mounted() {
    this.teamItems = getTeamItems()
  }
}
</script>