<template>
  <div class="container-fluid">
    <template v-if="!done">
        <div class="row">
          <div class="tab-bar tab-active col" @click="setTab(0)">Basic</div>
          <div class="tab-bar col" @click="setTab(1)">Personal</div>
          <div class="tab-bar col" @click="setTab(2)">Prefs</div>
        </div>
        <div class="row">
          <div class="tab-view-body">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
        <div class="row">
          <button class="col btn btn-primary" @click="backTab">Back</button>
          <div class="col"></div>
          <button class="col btn btn-primary" @click="nextTab">Next</button>
        </div>
    </template>
    <div v-if="done" class="row">
      <div class="upload-info"> {{virusMsg}} </div>
    </div>
  </div>
</template>

<script>
import Basic from "./Basic.vue";
import Personal from "./Personal.vue";
import Prefs from "./Prefs.vue";
export default {
  components: { Basic, Personal, Prefs },
  name: "Tabs",
  data: () => ({
    tabs: ["basic", "personal", "prefs"],
    currentTab: "",
    tabIndex: 0,
    done: false,
    virusMsg: 'Uploaded file is being scanned for viruses...'
  }),
  methods: {
    setTab(index) {
      this.tabIndex = index;
      this.$router.push(this.tabs[this.tabIndex]);
    },
    nextTab() {
      // var currentRoute = this.$router.currentRoute.matched[0].components.default.methods;
      if (this.tabs.length - 1 > this.tabIndex) {
        this.tabIndex++;
        this.$router.push(this.tabs[this.tabIndex]);
      } else {
        this.finishUp();
      }
      // console.log(currentRoute.validateForm())
    },
    backTab() {
      if (this.tabIndex > 0) {
        this.tabIndex--;
        this.$router.push(this.tabs[this.tabIndex]);
      }
    },
    finishUp() {
      this.done = true;
    //   this.$http
    //     .post("http://localhost/api/proxy.php", {
    //         // resource: '8a442cc660923c2ba0ff2a426bc47ad4cdb6721583538863f4aafd6fb9953724'
    //         file: 
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    console.log(this.$router.currentRoute.matched[0].components.default.methods);
    },
  },
};
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