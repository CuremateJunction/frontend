<script>
import waveBottom from '@/assets/views/bottom_waves.svg';

export default {
  name: 'Footer',
  data() {
    return {
      waveBottom,
    };
  },
};
</script>

<template>
  <v-row class="mt-5 justify-self-center">
    <v-btn
      prepend-icon="mdi mdi-home"
      text="Home"
      class="mt-5 mx-3"
      color="primary-darken-1"
      :to="'/'" />
    <v-btn
      text="Figma prototype"
      class="mt-5 mx-3"
      color="primary-darken-1"
      :to="'/figma'" />
  </v-row>
</template>

<style scoped></style>
