<script setup>
</script>

<template>
  <div id='item' class='content'>
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div id="title">
      <div class='text-h4 w-50'>
        Welcome to <br> <div id='finn'>FINN</div>
      </div>
    </div>
    <img id="logo" src='@/assets/finn.svg' alt='Finn Logo'>

    <div id='bannertext'>
      RELIEF PAIN. <br>
      EMBRACE LIFE.
    </div>

    <div id="description">

      WE’RE HERE TO JOIN YOU ON YOUR JOURNEY TO A BETTER LIFE.
      <br><br>
      FINN IS HERE TO HELP YOU MANAGE PAIN & SCHEDULE.
      <br><br>
      PARTNERED WITH YOUR DOCTOR.

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

#logo {
  position: absolute;
  right: 20px;
  top: 50px;
}

#title  {
  font-weight: lighter;
}

#finn {
  font-weight: bold;
  padding-top: 20px;
  font-size: 80px;
}

#bannertext{
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  padding-top: 40px;
}

</style>
