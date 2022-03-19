<template>
  <section class="toy-home page-layout">
    <br />
    <h1>Welcome</h1>
    <br />
    <section v-if="!signUpOn" class="login">
      <el-input
        type="text"
        size="large"
        v-model="username"
        style="width: 300px"
        placeholder="userName"
        clearable
      />
      <el-input
        type="text"
        size="large"
        v-model="password"
        style="width: 300px"
        placeholder="password"
        clearable
      />
      <el-button @click="onLogin" type="primary" size="large" round
        >login</el-button
      >
      <br />
    </section>
    <section v-else class="signup">
      <el-input
        type="text"
        size="large"
        v-model="username"
        style="width: 300px"
        placeholder="userName"
        clearable
      />
      <el-input
        type="text"
        size="large"
        v-model="password"
        style="width: 300px"
        placeholder="enter password"
        clearable
      />
      <el-input
        type="text"
        size="large"
        style="width: 300px"
        placeholder="confirm password"
        clearable
      />
      <el-button @click="onLogin" type="primary" size="large" round
        >signin</el-button
      >
      <br />
    </section>
    <el-button type="info" @click="toggleSignUpOn" size="small" plain>{{
      signLog
    }}</el-button>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      signUpOn: false,
      username: "",
      password: "",
    };
  },
  computed: {
    signLog() {
      return this.signUpOn ? "login" : "signup";
    },
  },
  methods: {
    toggleSignUpOn() {
      this.signUpOn = !this.signUpOn;
    },
    async onLogin() {
      if (!this.username || !this.password) return;
      try {
        const user = await this.$store.dispatch({
          type: "login",
          username: this.username,
          password: this.password,
        });
        this.$router.push("/toy");
      } catch (err) {
        console.log("could not login...");
      }
    },
  },
};
</script>

<style></style>
