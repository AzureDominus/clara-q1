<template>
  <div id="app">
    <SignUp></SignUp>
  </div>
</template>
<script>

import SignUp from '@/views/SignUp.vue'

export default {
  components: { SignUp },
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
#app {
  $text-color: #4F668F;
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 400;
  color: $text-color;
}

</style>
