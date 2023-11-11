<script setup>
</script>

<template>
  <div id='item' class='content'>
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div class='d-flex' id="title">
      <div class='text-h2'>
        Kickstart your Journey
      </div>
    </div>


    <div id="description">

      YOUR PARTNERING DOCTOR HAS GIVEN YOU AN INVITE CODE TO USE WITH FINN.
      <br><br>
      <div class='d-flex justify-center'>
      <v-form class='w-75' @submit.prevent>
        <v-text-field

          v-model="Code"
          :rules="rules"
          label="Enter your prescription code"
        ></v-text-field>
      </v-form>
      </div>
    </div>
  </div>

</template>

<style scoped>

.content {
  padding-left: 20px;
  padding-top: 40px;
}

#description {
  padding-top: 25vh;
  font-size: 20px;
  font-weight: bolder;
}


#title  {
  font-weight: lighter;
}

#dolphin {
  position: absolute;
  right: 20px;
  bottom: 160px;
  width: 200px;
  height: 200px;
}




</style>
