<template>
<div class="container-fluid">
    <div class="row">
        <div class="tab-bar tab-active col" @click="setTab(0)">Basic</div>
        <div class="tab-bar col" @click="setTab(1)">Personal</div>
        <div class="tab-bar col" @click="setTab(2)">Prefs</div>
    </div>
    <div class="row">
      <div class="tab-view-body">
          <keep-alive>
            <component :is="currentTab"></component>
          </keep-alive>
      </div>
    </div>
    <div class="row">
        <button class="col btn btn-primary" @click="backTab">Back</button>
        <div class="col"></div>
        <button class="col btn btn-primary" @click="nextTab">Next</button>
    </div>
</div>
</template>

<script>
import Basic from './Basic.vue'
import Personal from './Personal.vue'
import Prefs from './Prefs.vue'
export default {
  components: { Basic, Personal, Prefs },
    name: 'Tabs',
    data: () => ({
        tabs: ['basic', 'personal', 'prefs'],
        currentTab: '',
        tabIndex: 0
    }),
    computed: {
        // currentTab() {
        //     return this.tabs[0];
        // }
    },
    methods: {
        setTab(index) {
            this.tabIndex = index;
            this.currentTab = this.tabs[index];
        },
        nextTab() {
            if (this.tabs.length - 1 > this.tabIndex) {
                this.tabIndex++
                this.currentTab = this.tabs[this.tabIndex]
            }
        },
        backTab() {
            if (this.tabIndex > 0) {
                this.tabIndex--
                this.currentTab = this.tabs[this.tabIndex]
            }
        }
    },
    mounted() {
        this.currentTab = this.tabs[this.tabIndex];
    }
}
</script>

<style scoped lang="scss">

$activeColor: blue;

    .tab {
        &-bar {
            padding: 20px;
            border: 1px solid black;
        } 

        &-active {
            color: $activeColor;
            font-weight: bold;
        } 

        &-view-body {
            padding: 20px 40px 30px 40px;
        }      
    }

</style>