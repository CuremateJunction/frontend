<script setup>
import Medications from '@/components/Medications.vue';
import Symptoms from '@/components/Symptoms.vue';
import Assistance from '@/components/Assistance.vue';

let symptomsSelected = 0;

const onSymptomsSelected = (isSelected) => {
  if (isSelected) {
    symptomsSelected++;
  } else {
    symptomsSelected--;
  }
  console.log(symptomsSelected);
};
</script>

<template>
  <div class="content"></div>
  <div class="dashboard">
    <div class="flex">
      <div class="row align-items-center">
        <div class="col-4 welcome">
          <h1>HELLO,</h1>
          <h2>Lisa!</h2>
        </div>
        <div class="col-8">
          <img src="/dolphin.png" alt="hello there" />
        </div>
      </div>
    </div>

    <Symptoms @symptomsSelected="onSymptomsSelected" />
    <Medications />
    <Assistance />
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#0badbf"
      fill-opacity="1"
      d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,165.3C672,203,768,245,864,229.3C960,213,1056,139,1152,101.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
</template>

<style scoped>
.dashboard {
  font-family: 'Roboto', sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  background-image: url('@/assets/header.svg');
  background-size: 100vw;
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
</style>
