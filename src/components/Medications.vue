<script>
export default {
  data() {
    return {
      medicals : [
        { imageUrl: 'http://tiny.cc/r23evz', title: 'Excedrin', frequency: 2, taken: 0 },
      ]
    }
  },
  methods: {
    takePill (medical) {
      medical.taken += 1;
      console.log(medical.taken);
    }
  }
}
</script>

<template>
  <h3>Take a pill</h3>
  <div>
    <ul>
      <li v-for="medical in medicals">
        <img :src="medical.imageUrl" :alt="medical.title">
        <div>
          <h3>{{ medical.title }}</h3>
          <p>Taken: {{ medical.taken }} of {{ medical.frequency }} pills/day</p>
        </div>
        <button v-if='medical.taken < medical.frequency' @click="takePill(medical)" class="btn btn-dark">Take pill</button>
        <button v-if='medical.taken >= medical.frequency' class="btn btn-info">Check alternatives</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  h3 {
    margin-top: 40px;
  }
  img {
    width: 100px;
  }
  body{
    background: #eee;
    max-width: 960px;
    margin: 20px auto;
  }
  p, h3, ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
    background: #fff;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
