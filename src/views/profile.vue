
<script>
import Header from '@/components/Header.vue';
import Medications from '@/components/Medications.vue';
import Symptoms from '@/components/Symptoms.vue';
import Assistance from '@/components/Assistance.vue';
import router from '@/router';
import WaveTop from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      medicals: [
        {
          imageUrl: 'http://tiny.cc/r23evz',
          title: 'Opiod B',
          frequency: 2,
          taken: 0,
        },
      ],
    };
  },
  methods: {
    takePill(medical) {
      medical.taken += 1;
      console.log(medical.taken);
    },
  },
  components: {
    Footer,
    Header,
    Medications,
    Symptoms,
    Assistance,
    WaveTop,
  },
};


let symptomsSelected = 0;
let taken = 0;


</script>

<template>
  <v-container
    class="d-flex flex-column align-center ma-0 pa-0 justify-center h-100"
    fluid>
    <Header class="d-flex mt-0 pt-0 pl-0 w-100 mb-auto" />

    <v-row align="start" :dense="true" class="d-block pa-0 ma-0">
      <v-col cols="auto" class="d-inline-block ma-0 pa-0">
        <h3 class="text-h4">Your profile,</h3>
        <h2 class='text-h1'>Lisa!</h2>

      </v-col>

      <v-col cols="auto" class="d-inline-block ma-0 pa-0 ml-1">
        <v-img
          id="finn"
          src="@/assets/finn.svg"
          alt="hello there"
          width="170"
          max-width="300px"
          class="ma-0 pa-0" />
      </v-col>
    </v-row>

    <v-row class="d-flex flex-row mb-auto mx-auto">
      <v-col class="d-flex flex-column align-self-start">
        <p class="d-flex justify-center">Journey started 2.11.2022</p>

        <div v-for="medical in medicals">

          <v-card width="100%">
            <template v-slot:title>
              Lisa Müller
            </template>

            <template v-slot:subtitle>
              Chronic Pain Patient
            </template>

            <template v-slot:text>
              Content upcoming.
            </template>
          </v-card>
          <!--
          <div>
            <h3></h3>
            <p>Taken: {{ medical.taken }} of {{ medical.frequency }} pills/day</p>
          </div>
          -->


        </div>

        <v-btn
          class="mt-5"
          append-icon="mdi mdi-phone"
          height="60"
          width='100%'
          onclick='location.href="/help"'>
          SEEK Assistance
        </v-btn>
        <v-btn
          class="mt-5"
          append-icon="mdi mdi-phone"
          height="60"
          onclick='location.href="/registration"'>
          Register Yourself
        </v-btn>
      </v-col>

    </v-row>

    <!--    <v-row class='flex-column text-truncate text-wrap'>-->
    <!--      <v-col class='text-truncate text-wrap'>-->
    <!--      <Symptoms @symptomsSelected="onSymptomsSelected" />-->
    <!--      </v-col>-->
    <!--&lt;!&ndash;      <div v-if="symptomsSelected > 1">Hi!</div>&ndash;&gt;-->
    <!--    </v-row>-->

    <v-row class="d-flex align-center justify-center">
      <Footer class="mb-2"></Footer>
    </v-row>

    <!--    <v-row-->
    <!--      class="d-flex flex-column align-start justify-start">-->

    <!--      <v-col id="divider" class="">-->
    <!--        <div class="d-flex justify-center">-->
    <!--          -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; OR -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <!--        </div>-->
    <!--      </v-col>-->

    <!--      <v-row class='d-flex flex-row'>-->
    <!--        <v-col cols='auto'>-->
    <!--          <v-sheet class="pa-2 ma-2">-->
    <!--            <v-btn-->
    <!--              width='100'-->
    <!--              class=""-->
    <!--              :to="'/joinfinn'">-->
    <!--              <p class='text-wrap'>Medication Journey</p>-->
    <!--            </v-btn>-->
    <!--          </v-sheet>-->
    <!--        </v-col>-->

    <!--        <v-col cols='auto'>-->
    <!--          <v-sheet class="pa-2 ma-2">-->
    <!--            <v-btn-->
    <!--              style="word-wrap: break-word"-->
    <!--              class="text-wrap text-break text-truncate"-->
    <!--              width='8rem'-->
    <!--              onclick='location.href="help"'>-->
    <!--              Seek Assistance-->
    <!--            </v-btn>-->
    <!--          </v-sheet>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--    </v-row>-->

    <!--    <Symptoms @symptomsSelected="onSymptomsSelected" />-->

    <!--    <div v-if="symptomsSelected > 1">Hi!</div>-->
  </v-container>
</template>


<style scoped>
/*
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
 */
</style>
