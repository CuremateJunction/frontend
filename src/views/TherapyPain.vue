<template>
  <v-container
    class="d-flex flex-column align-center ma-0 pa-0 justify-center h-100"
    fluid>
    <WaveTop class="d-flex mt-0 pt-0 pl-0 w-100" />

    <v-row class="d-flex mt-10 align-center justify-center">
      <v-col cols="auto"> RELIEVING PAIN </v-col>
    </v-row>

    <v-row class="d-flex flex-column">
      <v-col cols="auto">
        <ButtonTemplate :text="'Breathe'" :icon="'fas fa-wind'" />
        <!--          :to="'/therapy/pain'"-->
        <!--        />-->
      </v-col>
      <v-col cols="auto">
        <ButtonTemplate
          :text="'Meditate'"
          :icon="'mdi mdi-head-sync-outline'" />
        <!--          :to="'/therapy/stress'"-->
        <!--        />-->
      </v-col>
      <v-col cols="auto">
        <ButtonTemplate :text="'Other'" :icon="'mdi:mdi-dots-horizontal'" />
        <!--          :to="'/therapy/sleep'"-->
        <!--        />-->
      </v-col>
    </v-row>

    <WaveBottom class="mt-auto" />
  </v-container>
</template>

<script>
import WaveTop from '@/components/Header.vue';
import WaveBottom from '@/components/Footer.vue';
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
