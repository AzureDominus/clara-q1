<template>
  <div class="tab-view">
      <Tabs></Tabs>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'
export default {
  components: { Tabs },
  name: 'SignUp',
  created() {
    if(this.$router.currentRoute.name != 'Basic')
      this.$router.push('/')
  }
}
</script>

<style lang="scss">
    .tab-view {
        display: flex;
        flex-flow: column nowrap;
        margin: 0px 20px 30px 20px;
        // border: 1px solid red;
    }
    
</style>