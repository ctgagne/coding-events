<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <input
        v-model="user.email"
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      // dispatch login action
      this.$store.dispatch("login", this.user);
    },
  },
};
</script>

<style scoped></style>
