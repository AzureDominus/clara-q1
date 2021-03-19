<template>
  <div class="tab-content">
    <div class="row">
      <div class="col">
        <h5 class="tab-content-step">Step 1</h5>
        <h3 class="tab-content-title">Your Profile</h3>
        <span class="tab-content-desc"
          >Enter the login information for your account. You can change this
          information at any time</span
        >
      </div>
    </div>
    <div class="gap"></div>
    <form ref="basicForm" @submit.prevent>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="fname"
            >First Name<span class="asterik">*</span></label
          >
          <input
            required
            id="fname"
            placeholder="Input Your First Name"
            class="tab-container-input form-control"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="lname"
            >Last Name<span class="asterik">*</span></label
          >
          <input
            required
            id="lname"
            placeholder="Input Your Last Name"
            class="tab-container-input form-control"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="email"
            >Email<span class="asterik">*</span></label
          >
          <input
            required
            id="email"
            type="email"
            placeholder="Input Your Email"
            class="tab-container-input form-control"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="number"
            >Phone Number<span class="asterik">*</span></label
          >
          <input
            required
            id="number"
            type="tel"
            v-mask="'+# (###) ###-####'"
            placeholder="Input Your Phone Number"
            class="tab-container-input form-control"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="pass1"
            >Password<span class="asterik">*</span></label
          >
          <input
            required
            id="pass1"
            type="password"
            placeholder="Create Password"
            class="tab-container-input form-control"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <label class="tab-container-input-label" for="pass2"
            >Confirm Password<span class="asterik">*</span></label
          >
          <input
            required
            id="pass2"
            type="password"
            placeholder="Confirm Password"
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
  name: "Basic",
  directives: { mask },
  data: () => ({
      form: ''
  }),
  methods: {
      validateForm() {
          console.log(this.form)
      }
  },
  mounted() {
    this.form = this.$refs.basicForm
  }
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