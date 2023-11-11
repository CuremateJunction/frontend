<script setup>
import { ref } from 'vue';
import adding_prescription_final from '@/assets/registration/adding_prescription_final.vue';
import hellothere from '@/assets/registration/hellothere.vue';
import prescription_enter from '@/assets/registration/prescription_enter.vue';

// this variable indicates the current step of the registration process
// 0 = hello there, 1 = enter prescription, 2 = thank you and redirect
let registration_process_counter = ref(0);

function next_step() {
  // if less than 2 then increment to show next step
  // else redirect to home page
  if (registration_process_counter.value < 2) {
    registration_process_counter.value += 1;
  } else {
    // redirect to home page
    this.$router.push({ name: 'Home' });
  }
}
</script>

<template>
  <div id='overall'>
    <div id='maincontent class="h-75'>

      <hellothere v-if="registration_process_counter === 0" />

      <prescription_enter v-if="registration_process_counter === 1" />

      <adding_prescription_final v-if="registration_process_counter === 2" />

    </div>


    <div id='button' class="h-25">
      <!-- Button that sticks to the right bottom in bootstrap -->
      <v-col cols="auto" class="justify-end text-right">
        <button @click="next_step">
          <v-btn>Next</v-btn>
        </button>
      </v-col>

    </div>
  </div>
</template>

<style scoped>

/* background image */
#overall {
  background: url(@/assets/blue_wave.png);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  }



</style>
