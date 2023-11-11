<template>
  <v-container
    class="d-flex flex-column align-center ma-0 pa-0 justify-center h-100"
    fluid>
    <WaveTop class="d-flex mt-0 pt-0 pl-0 w-100" />

    <v-row class="d-flex mt-10 align-center justify-center">
      <v-col cols="auto"> What do you want to improve {{ username }}? </v-col>
    </v-row>

    <v-row class="d-flex flex-column">
      <v-col cols="auto">
        <ButtonTemplate :text="'Pain'" :icon="'fas fa-face-tired'" />
        <!--          :to="'/therapy/pain'"-->
        <!--        />-->
      </v-col>
      <v-col cols="auto">
        <ButtonTemplate :text="'Stress'" :icon="'fas fa-bolt-lightning'" />
        <!--          :to="'/therapy/stress'"-->
        <!--        />-->
      </v-col>
      <v-col cols="auto">
        <ButtonTemplate :text="'Sleep'" :icon="'mdi:mdi-power-sleep'" />
        <!--          :to="'/therapy/sleep'"-->
        <!--        />-->
      </v-col>
    </v-row>

    <WaveBottom class="mt-auto w-100" />
  </v-container>
</template>

<script>
import WaveTop from '@/components/WaveTop.vue';
import WaveBottom from '@/components/WaveBottom.vue';
import ButtonTemplate from '@/components/ButtonTemplate.vue';

export default {
  components: { WaveTop, WaveBottom, ButtonTemplate },
  props: {
    username: {
      type: String,
      default: 'Lisa',
    },
  },
};
</script>

<style scoped></style>
