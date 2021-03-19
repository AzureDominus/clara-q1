<template>
  <div class="container-fluid">
    <template v-if="!done">
      <!-- Actual tabs begin here -->
      <div class="row tab-group">
        <div class="tab-progress"></div>
        <div
          :class="{ 'tab-active': activeTab('basic') }"
          class="tab-bar col"
          @click="setTab(0)"
        >
          <span class="tab-number">1</span>Basic
        </div>
        <div
          :class="{ 'tab-active': activeTab('personal') }"
          ref="tab"
          class="tab-bar col"
          @click="setTab(1)"
        >
          <span class="tab-number">2</span>Personal
        </div>
        <div
          :class="{ 'tab-active': activeTab('prefs') }"
          ref="tab"
          class="tab-bar col"
          @click="setTab(2)"
        >
         <span class="tab-number">3</span>Prefs
        </div>
      </div>
      <!-- Tab view begins here -->
      <div class="row">
        <div class="tab-view-body">
          <keep-alive>
            <router-view ref="comp"></router-view>
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
      <div class="upload-info">{{ virusMsg }}</div>
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
    virusMsg: "Uploaded file is being scanned for viruses...",
    resource: "",
  }),
  methods: {
    activeTab(name) {
      return this.$router.currentRoute.name.toLowerCase() == name;
    },
    setTab(index) {
      // if(this.$refs.comp.validateForm()) {
      this.tabIndex = index;
      this.$router.push(this.tabs[this.tabIndex]);
      // }
    },
    nextTab() {
      this.activeTab(0);
      // if(this.$refs.comp.validateForm())
      if (this.tabs.length - 1 > this.tabIndex) {
        this.tabIndex++;
        this.$router.push(this.tabs[this.tabIndex]);
      } else {
        this.beginScan();
      }
    },
    backTab() {
      if (this.tabIndex > 0) {
        this.tabIndex--;
        this.$router.push(this.tabs[this.tabIndex]);
      }
    },
    beginScan() {
      this.done = true;
      this.$refs.comp.uploadFile();
    },
    checkVirus(res) {
      this.$http
        .post("http://localhost/api/proxy.php", {
          resource: res,
        })
        .then((response) => {
          console.log(response);
          if (response.data.response_code != 1) {
            setTimeout(() => {
              this.checkVirus(this.resource);
            }, 15000);
          } else {
            this.showResult(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showResult(data) {
      var tmp_msg = `The result is ${data.positives} positives after ${data.total} scans. `;
      if (100 - (data.positives * 100) / (data.total * 1.0) > 95) {
        tmp_msg += `The file is safe!`;
      } else tmp_msg += `The file is infected!`;

      this.virusMsg = tmp_msg;
    },
  },
};
</script>

<style scoped lang="scss">
$activeColor: white;
$text-color: #4F668F;
$blue: #A6E3FF;
$tab-bg: #ecf0fe;

.tab {
  &-bar {
    position: relative;
    padding: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    .tab-number {
      color: $tab-bg;
      background-color: $text-color;
    }
  }

  &-group {
    background-color: $tab-bg;
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &-number {
    border-radius: 50%;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    font-weight: 600;
  }

  &-active {
    opacity: 1;
    color: $activeColor;
    
    .tab-number {
      color: $blue;
      background-color: white;
    }
  }

  &-progress {
    position: absolute;
    height: 100%;
    border-radius: 50px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 0;
    width: 33.33%;
    width: 66.66%;
    background: rgb(166, 227, 255);
    background: linear-gradient(
      90deg,
      rgba(166, 227, 255, 1) 0%,
      rgba(108, 172, 251, 1) 100%
    );

    &-done {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 0;
      width: 100%;
    }
  }

  &-view-body {
    padding: 20px 40px 30px 40px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid black;
  }
}
</style>