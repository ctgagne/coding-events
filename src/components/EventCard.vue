<template>
  <div>
    <h2>{{ event.title }}</h2>
    <h3>{{ date }}</h3>
    <p>{{ event.details }}</p>
    <p>{{ event.location }}</p>
  </div>
</template>

<script>
export default {
  props: ["event"],
  computed: {
    date() {
      let cardDate = new Date(this.event.date);
      return cardDate.toDateString();
    },
  },
};
</script>

<style scoped></style>
