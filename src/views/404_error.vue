<script setup></script>

<template>
  <div id="item" class="content">
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div id="title">
      <div class="text-h5 w-50">
        FINN NOT FOUND <br />
        <div id="finn">404</div>
      </div>
    </div>
    <br />
    <br />

    <img class="d-flex" src="@/assets/dead_dolphin.svg" width="300" />

    <a class="link" href="/dashboard"><v-icon icon="mdi-home"></v-icon>Home</a>
  </div>
</template>

<style scoped>
.content {
  padding-left: 20px;
  padding-top: 40px;
  background-image: url('@/assets/header.svg');
  background-size: 100vw;
}

#title {
  font-weight: lighter;
}

#finn {
  font-weight: bold;
  padding-top: 20px;
  font-size: 80px;
}

.link {
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  color: #000000;
}
</style>
