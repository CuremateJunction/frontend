<template>
  <v-btn
    :text="text"
    color="primary"
    elevation="8"
    :append-icon="icon"
    style="width: 10rem; height: 3rem"
    class="d-flex justify-center align-center" />
</template>

<script>
export default {
  name: 'ButtonTemplate',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped></style>
