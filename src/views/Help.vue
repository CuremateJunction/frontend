<template>
  <v-container
    class="d-flex flex-column align-center ma-0 pa-0 justify-center h-100"
    fluid>
    <WaveTop class="d-flex mt-0 pt-0 pl-0 w-100" />

    <!-- This page serves the purpose of saying hello to a new user before he gets to enter his details -->
    <v-row class="d-flex flex-column">
      <div id="title" class="d-flex text-h5 font-weight-light mb-n1">
        Emergency
      </div>
      <h1 class="d-flex text-h2 font-weight-bold">Contacts</h1>
    </v-row>

    <v-row class="d-flex flex-column justify-start">
      <v-col cols="auto">
        <v-card
          color="primary"
          title="Your Doctor"
          text="Dr. Med. Stefanson is available from 8am to 6pm"
          prepend-icon="mdi mdi-doctor"
          append-icon="mdi mdi-phone-dial"
          href="tel:+49123-456-7890"
          target="_blank"
          rel="noopener">
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card
          color="primary"
          title="Talk to a psychologist"
          text="Hotline is available 24/7"
          prepend-icon="mdi mdi-doctor"
          append-icon="mdi mdi-phone-dial"
          href="tel:+49123-456-7890"
          target="_blank"
          rel="noopener">
        </v-card>
      </v-col>

      <v-col cols="auto">
        <v-card
          color="primary"
          title="Talk to a pharmacist"
          text="Nearby pharmacy 1.2 km away - open 24/7"
          prepend-icon="mdi mdi-pill"
          append-icon="mdi mdi-navigation-variant"
          href="http://maps.google.com/?q=Yliopiston Apteekki, Mannerheimintie 96, Helsinki"
          target="_blank"
          rel="noopener"></v-card>
      </v-col>

      <v-col cols="auto">
        <v-card
          color="primary"
          title="Elisa"
          text="Your family contact."
          prepend-icon="mdi mdi-home-heart"
          append-icon="mdi mdi-phone-dial"
          href="tel:+49123-456-7890"
          target="_blank"
          rel="noopener"></v-card>
      </v-col>
    </v-row>

    <v-row class="d-flex align-start justify-center">
      <v-alert
        color="warning"
        density="compact"
        type="warning"
        style="height: 3rem"
        text="In case of an emergency, please call 112." />
    </v-row>

    <v-row class="d-flex align-start justify-center">
      <Footer class="mt-auto" />
    </v-row>
  </v-container>
</template>

<script>
import WaveTop from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    WaveTop,
    Footer,
  },
};
</script>

<style scoped></style>
