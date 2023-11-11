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
  <v-btn
    prepend-icon="mdi mdi-home"
    text="Home"
    class="mb-2"
    color="primary-darken-1"
    :to="'/'" />
</template>

<style scoped></style>
