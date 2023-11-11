<script setup>
</script>

<template>
  <div id="item" class="content">
    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <div id="title">
      <div class="text-h5 w-50">
        Emergency <br />
        <div id="finn">Contacts</div>
      </div>
    </div>

    <div class="d-flex align-center flex-column cards">

      <v-card
        class="mx-auto card my-4"
        width="400"
        title="Your doctor"
        text='Dr. Med. Stefanson is available from 8am to 6pm'
        prepend-icon="mdi-doctor"
        append-icon="mdi-phone-dial"
        href="tel:+49123-456-7890"
        target="_blank"
        rel="noopener"
      ></v-card>

      <v-card
        class="mx-auto card my-4"
        width="400"
        title="Speak with a psychologist."
        text='Hotline is available 24/7'
        prepend-icon="mdi-doctor"
        append-icon="mdi-phone-dial"
        href="tel:+49123-456-7890"
        target="_blank"
        rel="noopener"
      ></v-card>


      <v-card
        class="mx-auto card my-4"
        width="400"
        title="Speak with a pharmacist."
        text='Nearby pharmacy 1.2 km away - open 24/7'
        prepend-icon="mdi-pill"
        append-icon="mdi-navigation-variant"
        href="http://maps.google.com/?q=Yliopiston Apteekki, Mannerheimintie 96, Helsinki"
        target="_blank"
        rel="noopener"
      ></v-card>

      <v-card
        class="mx-auto card my-4"
        width="400"
        title="Elisa "
        text='Your family contact.'
        prepend-icon="mdi-home-heart"
        append-icon="mdi-phone-dial"
        href="tel:+49123-456-7890"
        target="_blank"
        rel="noopener"
      ></v-card>

      <v-alert
        class='mx-auto card my-4'
        density="compact"
        type="warning"
        text="In case of an emergency, please call 112."
      ></v-alert>
    </div>

    <a class='link' href='/dashboard' ><v-icon icon="mdi-home"></v-icon>Home</a>
  </div>
</template>

<style scoped>
.content {
  padding-left: 20px;
  padding-top: 40px;
  background-image: url("@/assets/header.svg");
  background-size: 100vw;
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

.card {
  /* margin-bottom: 20px; */
  background-color: #38E3D1;
}

.cards {
  margin-top: 80px;
}

.link{
  text-decoration: none;
  color: #000000;
}

</style>
