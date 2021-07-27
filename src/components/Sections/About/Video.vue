<template>
  <section class="video bg">
    <b-container class="video-inserts text-center text-white">
      <b-row
          class="justify-content-center m-0"
          @click="$bvModal.show('video__modal')">
        <b-col cols="12" class="video__icon-margin justify-content-center d-flex">
          <div class="video__icon cursor-pointer"></div>
        </b-col>
        <b-col cols="12">
          <h2 class="video__heading text-uppercase">
            watch our story
          </h2>
        </b-col>
      </b-row>
      <b-modal id="video__modal" hide-footer hide-header no-fade body-class="p-0" size="xl" centered>
        <b-embed
            class="bg-dark p-0"
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/KvUgaHTNit4"
            allowfullscreen
        ></b-embed>
      </b-modal>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Video"
}
</script>