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
    setTab(index) {
      if(this.$refs.comp.validateForm()) {
        this.tabIndex = index;
        this.$router.push(this.tabs[this.tabIndex]);
      }
    },
    nextTab() {
      if(this.$refs.comp.validateForm())
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
          }
          else {
              this.showResult(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showResult(data) {
        var tmp_msg = `The result is ${data.positives} positives after ${data.total} scans. `;
        if (100 - ((data.positives * 100) / (data.total * 1.0)) > 95) {
            tmp_msg += `The file is safe!`;
        }
        else
            tmp_msg += `The file is infected!`;

        this.virusMsg = tmp_msg;
    }
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