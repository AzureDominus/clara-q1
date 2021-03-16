<template>
  <div class="tab-container">
      <Tabs></Tabs>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'
export default {
  components: { Tabs },
    name: 'SignUp',
}
</script>

<style lang="scss">
    .tab-container { 
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }
    
</style>