<template>
<div class="container-fluid">
    <div class="row">
        <div class="tab-bar col">Basic</div>
        <div class="tab-bar col">Personal</div>
        <div class="tab-bar col">Prefs</div>
    </div>
    <div class="row">
      <div class="tab-view-body">
          <Basic></Basic>
      </div>
    </div>
</div>
</template>

<script>
import Basic from './Basic.vue'
export default {
  components: { Basic },
    name: 'Tabs',
}
</script>

<style scoped lang="scss">

    .tab- {
        &.bar {
            padding: 20px;
            border: 1px solid black;
        }  

        &.view-body {
            padding: 20px 40px 30px 40px;
        }      
    }

</style>