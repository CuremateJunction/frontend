<script setup>
import Medications from '@/components/Medications.vue';
import Symptoms from '@/components/Symptoms.vue';
import Assistance from '@/components/Assistance.vue';
import router from '@/router';

let symptomsSelected = 0;

const onSymptomsSelected = (isSelected) => {
  if (isSelected) {
    symptomsSelected++;
  } else {
    symptomsSelected--;
  }
  if (symptomsSelected > 2) {
    router.push({ name: 'JoinFinn' });
  }
  console.log(symptomsSelected);
};
</script>

<template>
  <div class="dashboard">
    <div class="flex">
      <div class="row align-items-center">
        <div class="col-4 welcome">
          <h3>HELLO,</h3>
          <h2>Lisa!</h2>
        </div>
        <img id="finn" src="@/assets/finn.svg" alt="hello there" />
      </div>
    </div>

    <v-container class="content">
      <v-row no-gutters>
        <div class="w-100">
          <p class="d-flex justify-center">Not feeling well?</p>
        </div>
        <button
          class="v-btn dashboard_button"
          id="join"
          onclick='location.href="/joinfinn"'>
          Try FINN Pain Relief
        </button>

        <div id="divider" class="w-100">
          <p class="d-flex justify-center">
            ----------------- OR -----------------
          </p>
        </div>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <button
              class="v-btn dashboard_button"
              onclick='location.href="todo"'>
              Meidcation Journey
            </button>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <button
              class="v-btn dashboard_button"
              onclick='location.href="help"'>
              Seek Assistance
            </button>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <Symptoms @symptomsSelected="onSymptomsSelected" />

    <div v-if="symptomsSelected > 1">Hi!</div>
  </div>
</template>

<style scoped>
.dashboard {
  padding-left: 20px;
  padding-right: 20px;
  background-image: url('@/assets/header.svg');
  background-size: 100vw;
  overflow: hidden;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 6rem;
}
img {
  width: 100%;
  max-width: 800px;
  max-height: 800px;
}

.dashboard_button {
  background-color: #32d9c8;
  color: #000000;
  font-weight: bolder;
  min-height: 100px;
  border-radius: 10px;
  width: 100%;
}

#join {
  margin-left: 16px;
  margin-right: 16px;
}

#finn {
  position: absolute;
  width: 45vw;
  top: 1vh;
  left: 55vw;
}

#divider {
  margin-top: 20px;
  margin-bottom: 20px;
}

.welcome {
  padding-top: 5vh;
  line-height: normal;
}

.content {
  padding-top: 10vh;
}
</style>
