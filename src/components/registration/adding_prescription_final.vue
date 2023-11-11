<script setup></script>

<template>
  <div id="item" class="content">
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div id="title">
      <div class="text-h4 w-50">
        Welcome <br />
        <div id="finn">Lisa!</div>
      </div>
    </div>
    <img id="logo" src='../../assets/finn.svg' alt="Finn logo" />

    <div id="description">
      We are so happy to have you here!

      <div class="d-flex justify-center">
        <img
          class="d-inline-block"
          src='../../assets/loading.gif'
          alt="Loading animation"
          width="300px" />
      </div>
      <div id="boldertext">How to make the best of Finn:</div>
      <br /><br />
      Let us know when you take your medicin. <br />
      Try FINN pain relief methods. <br />
      Track your symptoms. <br />
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

#title {
  font-weight: lighter;
}

#finn {
  font-weight: bold;
  padding-top: 20px;
  font-size: 80px;
}

#boldertext {
  font-weight: bold;
}
</style>
