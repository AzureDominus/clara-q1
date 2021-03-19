<template>
  <div class="tab-content">
    <div class="row">
      <div class="col">
        <h5 class="tab-content-step">Step 2</h5>
        <h3 class="tab-content-title">Your Personal Information</h3>
        <span class="tab-content-desc"
          >Enter your personal information for your account. You can change this
          information at any time</span
        >
      </div>
    </div>
    <div class="gap"></div>
    <form autocomplete="off" ref="form" @submit.prevent>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="addy1"
            >Address Line 1<span class="asterik">*</span></label
          >
          <input
            required
            id="addy1"
            placeholder="Input Your Address"
            class="tab-container-input form-control"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="addy2"
            >Address Line 2<span class="asterik"></span
          ></label>
          <input
            id="addy2"
            placeholder="Input Your Address"
            class="tab-container-input form-control"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="sex"
            >Sex<span class="asterik"></span
          ></label>
          <input
            id="sex"
            type="text"
            placeholder="Input Your Sex"
            class="tab-container-input form-control"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="height"
            >Height (ft)<span class="asterik">*</span></label
          >
          <input
            required
            id="height"
            v-mask="heightMask"
            placeholder="Input Your Height"
            class="tab-container-input form-control"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "Personal",
  directives: { mask },
  data: () => ({
    heightMask: `#'#"`,
  }),
  methods: {
    validateForm() {
      return this.$refs.form.reportValidity();
    },
  },
};
</script>

<style scoped lang="scss">
.gap {
  margin: 30px;
}
.asterik {
  color: blue;
}
.tab-container {
  &-input {
    &-label {
      width: 100%;
      text-align: left;
    }
  }
}
</style>