<template>
  <v-expansion-panels variant="accordion" class="mb-6 flex-grow-1" v-for="category in categories" :key="category.id">

    <v-expansion-panel
      :title="category.name"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    >
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Profile',
        },
        {
          id: 2,
          name: 'Doctor',
        },
        {
          id: 3,
          name: 'Settings',
        },
        {
          id: 4,
          name: 'Help',
        },
      ],
    };
  },
};

</script>

<style scoped>

</style>
