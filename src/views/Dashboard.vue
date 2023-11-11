<script setup>
import Medications from '@/components/Medications.vue';
import Symptoms from '@/components/Symptoms.vue';
import Assistance from '@/components/Assistance.vue';
</script>

<template>
  <div>
    <div class='container flex'>
      <div class='row align-items-center'>
        <div class='col-4 welcome'>
          <h1>HELLO</h1>
          <h2>Lisa!</h2>
        </div>
        <div class='col-6'>
          <img size='400px' src='/dolphin.png'>
        </div>
      </div>
    </div>

    <Symptoms />
    <Medications />
    <Assistance />
  </div>
</template>

<style scoped>
  .welcome h1, h2 {
    font-size: 6rem;
  }
</style>
