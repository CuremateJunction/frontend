<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div id="item" class="content">
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div id="title">
      <div class="text-h5 w-50">
        Relax with Finn <br />
        <div id="finn">Meditation</div>
      </div>
    </div>

    <iframe
      id="finnvideo"
      class="d-flex d-inline-block"
      width="90%"
      height="100%"
      src="https://www.youtube.com/embed/fJyIMgZYpi4?si=lG9Q95yBBn1OFHat&amp;controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>

    <p id="paragraph">
      In the quietude of a dimly lit room, find solace in a comfortable seat.
      Breathe deep, shedding the day's weight. Soft music whispers tranquility,
      echoing in the silence. Wear comfort like a second skin. As you close your
      eyes, set adrift on the gentle waves of your breath. In this moment, let
      go, and be.
    </p>

    <v-row class="d-flex align-center justify-center">
      <Footer class="mb-2"></Footer>
    </v-row>

  </div>
</template>

<style scoped>
.content {
  padding-left: 20px;
  padding-top: 40px;
  background-image: url('@/assets/header.svg');
  background-size: 100vw;
}

#title {
  font-weight: lighter;
}

#finn {
  font-weight: bold;
  padding-top: 20px;
  font-size: 50px;
}

.link {
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  color: #000000;
}

#finnvideo {
  margin-top: 40px;
}

#paragraph {
  padding-right: 10px;
}
</style>
