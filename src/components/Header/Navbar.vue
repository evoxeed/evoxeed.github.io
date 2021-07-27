<template>
  <b-container class="header__navbar-padding container-max-width">
    <b-navbar toggleable="lg" variant="faded" type="dark" class="p-0">
      <b-navbar-brand href="#" class="p-0">
        <img :src="require('@/assets/img/logos/header.png')" height="50px" class="d-inline-block align-bottom"
             alt="tajam logo">
        <span class="logo-text align-bottom">tajam</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="header__navbar ml-auto text-uppercase p-2 p-lg-0">
          <li class="nav-item pb-2 pb-lg-0"
              v-for="item in navbarItems"
              :key="item.name">
            <a href="#" class="header__link header__link--active">{{ item.name }}</a>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import {getNavbarItems} from "@/data/const";

export default {
  name: "Header__navbar",
  data: function () {
    return {
      navbarItems: []
    }
  },
  mounted() {
    this.navbarItems = getNavbarItems()
  }
}
</script>