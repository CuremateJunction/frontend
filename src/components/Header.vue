<script>
import waveTop from '@/assets/views/wave-top.svg';

export default {
  name: 'Header',
  data() {
    return {
      waveTop,
    };
  },
};
</script>

<template>
  <img :src="waveTop" />
</template>

<style scoped></style>
