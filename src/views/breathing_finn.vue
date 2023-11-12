<script setup></script>

<template>
  <div id="item" class="content">
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div id="title">
      <div class="text-h5 w-50">
        Relax with Finn <br />
        <div id="finn">Breathing exercise</div>
      </div>
    </div>

    <iframe
      id="finnvideo"
      class="d-flex d-inline-block"
      width="90%"
      height="100%"
      src="https://www.youtube.com/embed/b8oUqwp9i4E?si=GDPr2TTegVhEVu-R"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>

    <p id="paragraph">
      Inhale serenity, exhale stress. Find a quiet spot, sit comfortably, and let tension drift away.
      Picture each breath as a cleansing wave, washing away the day's strains.
      Inhale revitalizing energy, exhale burdens. Let your breath be a melody of calm, guiding you to inner peace.
    </p>

    <a class="link" href="/dashboard"
      ><v-icon icon="mdi mdi-home"></v-icon>Home</a
    >
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
  font-size: 50px;
}

.link {
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  color: #000000;
}

#finnvideo {
  margin-top: 40px;
}

#paragraph {
  padding-right: 10px;
}
</style>
