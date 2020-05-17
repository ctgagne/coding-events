<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="submit">
      <input
        v-model="event.title"
        type="text"
        name="title"
        placeholder="Add a Title"
      />
      <input
        v-model="event.details"
        type="text"
        name="title"
        placeholder="Tell us about your event"
      />
      <input
        v-model="event.date"
        type="text"
        name="title"
        placeholder="Date: MM/DD/YYYY hh:mm"
      />
      <input
        v-model="event.location"
        type="text"
        name="title"
        placeholder="Where is your event?"
      />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { createEvent } from "@/services/event-service.js";

export default {
  data() {
    return {
      event: {
        title: "",
        details: "",
        location: "",
        date: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        await createEvent(this.event);
        this.$router.push({ name: "dashboard" });
      } catch (error) {
        alert("Sorry, Couldn't create entry, please check your input");
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  gap: 2em;
  max-width: 500px;
  margin: 0 auto;
}
</style>
