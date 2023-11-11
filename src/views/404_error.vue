<template>
  <v-container
    class="d-flex flex-column align-center ma-0 pa-0 justify-start h-100"
    fluid>
    <WaveTop class="d-flex mt-0 pt-0 pl-0 w-100" />
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <v-row class="d-flex flex-column align-center">
      <div class="text-h5 w-50">FINN NOT FOUND</div>
      <h1 class="text-h1 font-weight-bold">404</h1>
    </v-row>

    <v-row class="d-flex align-start">
      <v-img
        class="d-flex justify-self-center align-start"
        src="@/assets/dead_dolphin.svg"
        :width="200" />
    </v-row>

    <v-row class="d-flex flex-column justify-start align-center">
        <Footer></Footer>
    </v-row>
  </v-container>
</template>

<script>
import WaveTop from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { WaveTop },
};
</script>

<style scoped>
.link {
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  color: #000000;
}
</style>
