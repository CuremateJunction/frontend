<template>
  <v-container
    class="d-flex flex-column align-center ma-0 pa-0 justify-center h-100"
    fluid>
    <WaveTop class="d-flex mt-0 pt-0 pl-0 w-100" />

    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto"> PROFILE </v-col>
    </v-row>

    <SettingsList />

    <v-row class="d-flex flex-column flex-grow-1">
      <v-col cols="auto">

      </v-col>
    </v-row>

    <WaveBottom class="mt-auto w-100" />
  </v-container>
</template>


<script>
import {defineComponent} from "vue";
import WaveBottom from "@/components/WaveBottom.vue";
import WaveTop from "@/components/WaveTop.vue";
import SettingsList from "@/components/SettingsList.vue";

export default defineComponent({
  components: {WaveTop, WaveBottom, SettingsList},
  props: {
    username: {
      type: String,
      default: 'Lisa',
    },
  },
})
</script>
<style scoped>

</style>
