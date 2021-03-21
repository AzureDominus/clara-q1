<template>
  <div id="app">
    <h2 class="title">Create New Account</h2>
    <SignUp class="signup"></SignUp>
  </div>
</template>
<script>
import SignUp from "@/views/SignUp.vue";

export default {
  components: { SignUp },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap");
#app {
  $text-color: #4f668f;
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 400;
  color: $text-color;
  background: linear-gradient(160deg, #8a94f7 0%, #7175e5 65%, #f6f8f6 65%);
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.title {
  font-weight: 200;
  font-size: 2.1rem;
  margin-bottom: 30px;
  color: white;
}
</style>
